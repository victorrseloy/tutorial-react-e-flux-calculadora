import {appDispatcher} from './AppDispatcher'
import Action from './Constants'



export function atualizarVisor(valorAntigo,valorPressionado,limparDisplayNaProximaOperacao,modoDeEntradaDecimal){
    //por padrao colocamos o valor pressionado para ser o novo valor
    let novoValor = valorPressionado;
    //se nao vamos limpar o visor entao precisamos modificar valor present
    if(!limparDisplayNaProximaOperacao){
        valorAntigo = parseFloat(valorAntigo);
        valorPressionado = parseFloat(valorPressionado);
        //se o modo de entrada nao eh decimal multiplicamos o valor por 10 e somamos o novo
        //valor para criar o novo valor
        if(!modoDeEntradaDecimal){
            novoValor = valorAntigo*10+valorPressionado;
        }
        else{
            //em caso de modo decimil esse codigo coloca as casas depois da virgula
            novoValor = valorAntigo + valorPressionado/Math.pow(10,quantidadeCasasdecimais(valorAntigo)+1)
        }
    }
    else{
        //se entramos aqui eh porque vamos limpar o visor e colocar um novo valor
        //nesse caso setamos setLimparVisorNaProximaOperacao para falso
        //pois o visor jah foi limpo
        setLimparVisorNaProximaOperacao(false)
    }
    //finalmente despachamamos a acao para os stores via appDispatcher
    appDispatcher.dispatch({type:Action.ATUALIZA_VISOR,value:novoValor})
}

export function executarOperacaoMatematica(operacaoAtual,operacaoNaMemoria,valorNoVisor,valorNaMemoria){
    debugger
    let resultado = valorNoVisor;
    //lemos os valores e convertemos eles para float
    valorNoVisor = parseFloat(valorNoVisor)
    valorNaMemoria = parseFloat(valorNaMemoria)
    appDispatcher.dispatch({type:Action.LIMPA_OPERACAO})
    setModoDeEntradaDecimal(false);

    //se nao escolhemos = como operacao, precisamos guardar a operacao
    if(operacaoAtual!== '='){
        appDispatcher.dispatch({type:Action.SETA_OPERACAO,value:operacaoAtual})
    }

    //se jah temos uma operacao na memoria isso significa q eh hora
    //de executar ela
    if(operacaoNaMemoria){
        switch(operacaoNaMemoria){
            case '+':
                resultado = valorNoVisor+valorNaMemoria;
                break;
            case '-':
                resultado = valorNoVisor-valorNaMemoria;
                break;
            case '*':
                resultado = valorNoVisor*valorNaMemoria;
                break;
            case '/':
                resultado = valorNoVisor/valorNaMemoria;
                break;
        }
    }

    //finalmente despachamos o novo valor
    appDispatcher.dispatch({type:Action.GUARDA_VALOR,value:resultado});
    piscar(resultado)
    setLimparVisorNaProximaOperacao(true)

}

export function setLimparVisorNaProximaOperacao(value){
    appDispatcher.dispatch({type:Action.LIMPA_VISOR_NA_PROXIMA_OPERACAO,value:value})
}

export function setModoDeEntradaDecimal(value){
    appDispatcher.dispatch({type:Action.ENTRAR_COM_DIGITOS_DECIMAIS,value:value})
}

export function setVisor(value){
    appDispatcher.dispatch({type:Action.ATUALIZA_VISOR,value:value})
}

export function resetar(){
    appDispatcher.dispatch({type:Action.GUARDA_VALOR,value:0});
    appDispatcher.dispatch({type:Action.LIMPA_OPERACAO});
    piscar(0)
}

export function piscar(value){
    setVisor('')
    setTimeout(() =>{
        setVisor(value)
    },100)
}

function quantidadeCasasdecimais(value) {
    if(Math.floor(value) === value) return 0;
    return value.toString().split(".")[1].length || 0;
}