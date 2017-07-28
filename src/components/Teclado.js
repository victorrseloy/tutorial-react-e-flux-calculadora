import React from 'react'
import Botao from './Botao'

export default class Teclado extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div id="teclado">
                <Botao valorNaMemoria={this.props.valorNaMemoria} operacaoAnterior={this.props.operacaoAnterior} valorVisor={this.props.valorVisor} limparNaProximaOperacao={this.props.limparNaProximaOperacao}
                       entradaDecimal={this.props.entradaDecimal} valor="c"/>
                <Botao valorNaMemoria={this.props.valorNaMemoria} operacaoAnterior={this.props.operacaoAnterior} valorVisor={this.props.valorVisor} limparNaProximaOperacao={this.props.limparNaProximaOperacao}
                       entradaDecimal={this.props.entradaDecimal} valor="+/-"/>
                <Botao valorNaMemoria={this.props.valorNaMemoria} operacaoAnterior={this.props.operacaoAnterior} valorVisor={this.props.valorVisor} limparNaProximaOperacao={this.props.limparNaProximaOperacao}
                       entradaDecimal={this.props.entradaDecimal} valor="%"/>
                <Botao valorNaMemoria={this.props.valorNaMemoria} operacaoAnterior={this.props.operacaoAnterior} valorVisor={this.props.valorVisor} limparNaProximaOperacao={this.props.limparNaProximaOperacao}
                       entradaDecimal={this.props.entradaDecimal} valor="/"/>
                <Botao valorNaMemoria={this.props.valorNaMemoria} operacaoAnterior={this.props.operacaoAnterior} valorVisor={this.props.valorVisor} limparNaProximaOperacao={this.props.limparNaProximaOperacao}
                       entradaDecimal={this.props.entradaDecimal} valor="7"/>
                <Botao valorNaMemoria={this.props.valorNaMemoria} operacaoAnterior={this.props.operacaoAnterior} valorVisor={this.props.valorVisor} limparNaProximaOperacao={this.props.limparNaProximaOperacao}
                       entradaDecimal={this.props.entradaDecimal}valor="8"/>
                <Botao valorNaMemoria={this.props.valorNaMemoria} operacaoAnterior={this.props.operacaoAnterior} valorVisor={this.props.valorVisor} limparNaProximaOperacao={this.props.limparNaProximaOperacao}
                       entradaDecimal={this.props.entradaDecimal} valor="9"/>
                <Botao valorNaMemoria={this.props.valorNaMemoria} operacaoAnterior={this.props.operacaoAnterior} valorVisor={this.props.valorVisor} limparNaProximaOperacao={this.props.limparNaProximaOperacao}
                       entradaDecimal={this.props.entradaDecimal} valor="*"/>
                <Botao valorNaMemoria={this.props.valorNaMemoria} operacaoAnterior={this.props.operacaoAnterior} valorVisor={this.props.valorVisor} limparNaProximaOperacao={this.props.limparNaProximaOperacao}
                       entradaDecimal={this.props.entradaDecimal} valor="4"/>
                <Botao valorNaMemoria={this.props.valorNaMemoria} operacaoAnterior={this.props.operacaoAnterior} valorVisor={this.props.valorVisor} limparNaProximaOperacao={this.props.limparNaProximaOperacao}
                       entradaDecimal={this.props.entradaDecimal} valor="5"/>
                <Botao valorNaMemoria={this.props.valorNaMemoria} operacaoAnterior={this.props.operacaoAnterior} valorVisor={this.props.valorVisor} limparNaProximaOperacao={this.props.limparNaProximaOperacao}
                       entradaDecimal={this.props.entradaDecimal} valor="6"/>
                <Botao valorNaMemoria={this.props.valorNaMemoria} operacaoAnterior={this.props.operacaoAnterior} valorVisor={this.props.valorVisor} limparNaProximaOperacao={this.props.limparNaProximaOperacao}
                       entradaDecimal={this.props.entradaDecimal} valor="+"/>
                <Botao valorNaMemoria={this.props.valorNaMemoria} operacaoAnterior={this.props.operacaoAnterior} valorVisor={this.props.valorVisor} limparNaProximaOperacao={this.props.limparNaProximaOperacao}
                       entradaDecimal={this.props.entradaDecimal} valor="1"/>
                <Botao valorNaMemoria={this.props.valorNaMemoria} operacaoAnterior={this.props.operacaoAnterior} valorVisor={this.props.valorVisor} limparNaProximaOperacao={this.props.limparNaProximaOperacao}
                       entradaDecimal={this.props.entradaDecimal} valor="2"/>
                <Botao valorNaMemoria={this.props.valorNaMemoria} operacaoAnterior={this.props.operacaoAnterior} valorVisor={this.props.valorVisor} limparNaProximaOperacao={this.props.limparNaProximaOperacao}
                       entradaDecimal={this.props.entradaDecimal} valor="3"/>
                <Botao valorNaMemoria={this.props.valorNaMemoria} operacaoAnterior={this.props.operacaoAnterior} valorVisor={this.props.valorVisor} limparNaProximaOperacao={this.props.limparNaProximaOperacao}
                       entradaDecimal={this.props.entradaDecimal} valor="-"/>
                <Botao valorNaMemoria={this.props.valorNaMemoria} operacaoAnterior={this.props.operacaoAnterior} valorVisor={this.props.valorVisor} limparNaProximaOperacao={this.props.limparNaProximaOperacao}
                       entradaDecimal={this.props.entradaDecimal} valor="0"/>
                <Botao valorNaMemoria={this.props.valorNaMemoria} operacaoAnterior={this.props.operacaoAnterior} valorVisor={this.props.valorVisor} limparNaProximaOperacao={this.props.limparNaProximaOperacao}
                       entradaDecimal={this.props.entradaDecimal} valor="."/>
                <Botao valorNaMemoria={this.props.valorNaMemoria} operacaoAnterior={this.props.operacaoAnterior} valorVisor={this.props.valorVisor} limparNaProximaOperacao={this.props.limparNaProximaOperacao}
                       entradaDecimal={this.props.entradaDecimal} valor="pi"/>
                <Botao valorNaMemoria={this.props.valorNaMemoria} operacaoAnterior={this.props.operacaoAnterior} valorVisor={this.props.valorVisor} limparNaProximaOperacao={this.props.limparNaProximaOperacao}
                       entradaDecimal={this.props.entradaDecimal} valor="="/>
            </div>
        )
    }
}
