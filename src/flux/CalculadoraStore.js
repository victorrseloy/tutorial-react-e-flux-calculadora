import EventEmmiter from 'events'

const CHANGE = 'change'

let _store = {
    valorDoDisplay:'0',
    resultadoUltimaOperacao:0,
    limparVisor:false,
    operacaoAritmetica: undefined,
    modoDeEntradaDecimal: false,
}

class CalculadoraStore extends  EventEmmiter{

    getValorDoDisplay(){
         return _store.valorDoDisplay;
    }

    setValorDoDisplay(valor){
        _store.valorDoDisplay = valor;
        this.emit(CHANGE);
    }

    getResultadoUltimaOperacao(){
        return _store.resultadoUltimaOperacao;
    }

    setResultadoUltimaOperacao(valor){
        _store.resultadoUltimaOperacao = valor;
        this.emit(CHANGE);
    }

    getLimparVisor(){
        return _store.limparVisor;
    }

    setLimparVisor(valor){
        _store.limparVisor = valor;
        this.emit(CHANGE);
    }

    getOperacaoAritmetica() {
        return _store.limparVisor;
    }

    setOperacaoAritmetica(valor){
        _store.operacaoAritmetica = valor;
        this.emit(CHANGE);
    }

    getModoDeEntradaDecimal(){
        return _store.modoDeEntradaDecimal;
    }

    setModoDeEntradaDecimal(valor){
        return _store.modoDeEntradaDecimal = valor;
        this.emit(CHANGE);
    }

    getState(){
        return _store
    }
}

export let calculadoraStore = new CalculadoraStore()
window.calculadoraStore = calculadoraStore