import React from 'react'
import Visor from './Visor'
import Teclado from './Teclado'

import {calculadoraStore} from './../flux/CalculadoraStore'

export default class Calculadora extends React.Component{

    constructor(props){
        super(props)
        this.state = calculadoraStore.getState()
    }

    componentWillMount(){
        calculadoraStore.on('change', ()=>{
            this.setState(calculadoraStore.getState())
        })
    }

    render(){
        return (
            <div id="calculadora">
                <Visor valor={this.state.valorDoDisplay}/>
                <Teclado valorNaMemoria={this.state.resultadoUltimaOperacao} operacaoAnterior={this.state.operacaoAritmetica} valorVisor={this.state.valorDoDisplay} limparNaProximaOperacao={this.state.limparVisor}
                         entradaDecimal={this.state.modoDeEntradaDecimal} />
            </div>
        )
    }
}