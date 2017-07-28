import React from 'react'
import * as Action from './../flux/CalculdoraActions'

export default class Botao extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return (
            <div className="botao" onClick={this.click.bind(this)}>
                <p>{this.props.valor}</p>
            </div>
        )
    }

    click(e){
        switch(this.props.valor){
            case '0':
            case '1':
            case '2':
            case '3':
            case '4':
            case '5':
            case '6':
            case '7':
            case '8':
            case '9':
                Action.atualizarVisor(this.props.valorVisor,this.props.valor
                    ,this.props.limparNaProximaOperacao,this.props.entradaDecimal)
                break;
            case '+':
            case '-':
            case '*':
            case '/':
            case '=':
                Action.executarOperacaoMatematica(this.props.valor,this.props.operacaoAnterior
                    ,this.props.valorVisor,this.props.valorNaMemoria)
            case '.':
                Action.setModoDeEntradaDecimal(true)
            case 'c':
                Action.resetar();
        }
    }
}