import React from 'react';   //  /* +tyT */
//import PropTypes from 'prop-types';

const Droppable = (props) => {
    
    const drop = (e) => {
        e.preventDefault();
        const data = e.dataTransfer.getData('transfer');
        e.target.appendChild(document.getElementById(data)) //Esta instruccion permite agregar los datos del item draggeable en un nuevo droppable
    }
    //dataTransfer: Metodo que permite trabajar con transferencia de datos
    //Se usa (en este caso) el getData, ya que el droppable lo que hara sera recibir los datos del nuevo draggable que caera sobre el
    
    //Funcion que permite soltar un elemento en el espacio dado
    const allowDrop = (e) => {
        e.preventDefault();
    }

    return(
        <div id={props.id} onDrop={drop} onDragOver={allowDrop} style={props.style}>
            {props.children} {/*Permite poder visualizar los items draggeables en los droppables*/}
        </div>
    );
}

export default Droppable;

//Droppable.propTypes = {
//   id: PropTypes.string,
//   style: PropTypes.object,
//    children: PropTypes.node,
//}