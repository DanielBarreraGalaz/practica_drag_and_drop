import React from 'react';   //  /* +tyT */
import PropTypes from 'prop-types';

export default class Droppable extends React.Component{
    
    drop = (e) => {
        e.preventDefault();
        const data = e.dataTransfer.getData('transfer');
        e.target.appendChild(document.getElementById(data)) //Esta instruccion permite agregar los datos del item draggeable en un nuevo droppable
    }

    //Funcion que permite soltar un elemento en el espacio dado
    allowDrop = (e) => {
        e.preventDefault();
    }

    render(){
        return(
        <div id={this.props.id} onDrop={this.drop} onDragOver={this.allowDrop} style={this.props.style}>
            {this.props.children} {/*Permite poder visualizar los items draggeables en los droppables*/}
        </div>
        );
    }
}

Droppable.propTypes = {
    id: PropTypes.string,
    style: PropTypes.object,
    children: PropTypes.node,
}