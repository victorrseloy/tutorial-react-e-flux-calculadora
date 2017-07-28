import {appDispatcher} from './AppDispatcher'
import Action from './Constants'



export function atualizarVisor(valorAntigo,valorPressionado,limparDisplayNaProximaOperacao,modoDeEntradaDecimal){

    let novoValor = valorPressionado;

    if(!limparDisplayNaProximaOperacao){
        valorAntigo = parseFloat(valorAntigo);
        valorPressionado = parseFloat(valorPressionado);
        if(!modoDeEntradaDecimal){
            novoValor = valorAntigo*10+valorPressionado;
        }
        else{
            novoValor = valorAntigo + valorPressionado/Math.pow(10,quantidadeCasasdecimais(valorAntigo)+1)
        }
    }
    else{
        setLimparVisorNaProximaOperacao(false)
    }
    appDispatcher.dispatch({type:Action.ATUALIZA_VISOR,value:novoValor})
}

export function executarOperacaoMatematica(operacaoAtual,operacaoNaMemoria,valorNoVisor,valorNaMemoria){

    let resultado = valorNoVisor;

    valorNoVisor = parseFloat(valorNoVisor)
    valorNaMemoria = parseFloat(valorNaMemoria)
    appDispatcher.dispatch({type:Action.LIMPA_OPERACAO})
    setModoDeEntradaDecimal(false);

    if(operacaoAtual!== '='){
        appDispatcher.dispatch({type:Action.SETA_OPERACAO,value:operacaoAtual})
    }

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