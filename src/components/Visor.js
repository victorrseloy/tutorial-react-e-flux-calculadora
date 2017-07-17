import React from 'react'

export default class Visor extends React.Component{

    render(){
        return (
            <div id="visor">
                <h1>{this.props.valor}</h1>
            </div>
        )
    }
}