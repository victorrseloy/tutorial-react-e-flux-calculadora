import React from 'react'
import Botao from './Botao'

export default class Teclado extends React.Component{
    render(){
        return(
            <div id="teclado">
                <Botao valor="c"/>
                <Botao valor="+/-"/>
                <Botao valor="%"/>
                <Botao valor="/"/>
                <Botao valor="7"/>
                <Botao valor="8"/>
                <Botao valor="9"/>
                <Botao valor="*"/>
                <Botao valor="4"/>
                <Botao valor="5"/>
                <Botao valor="6"/>
                <Botao valor="+"/>
                <Botao valor="4"/>
                <Botao valor="5"/>
                <Botao valor="6"/>
                <Botao valor="-"/>
                <Botao valor="0"/>
                <Botao valor="."/>
                <Botao valor="pi"/>
                <Botao valor="="/>
            </div>
        )
    }
}
