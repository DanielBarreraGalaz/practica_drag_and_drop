import React from 'react'; //  /* +tyT */
import PropTypes from 'prop-types';

const Draggable = (props) => {
    
    //Esta funcion permite pasar los datos del draggable a otro espacio droppable
    //Basicamente, permite poder soltar un draggable a otro espacio
    //Sin esta funcion la pagina se crashearia al intentar pasar el draggable a otro espacio droppable
    const drag = (e) => {
        e.dataTransfer.setData('transfer', e.target.id);
    }
    //setData
    //Parametro 1: El tipo de accion a realizar (En este caso, va a "transferir los datos de un draggable a otro droppable")
    //Parametro 2: El elemento sobre el que caera el efecto, especificado (en este caso) por su id
    
    const noAllowDrop = (e) => {
        e.stopPropagation();
    }

    return (
        <div id={props.id} draggable="true" onDragStart={drag} onDragOver={noAllowDrop} style={props.style}>
            {props.children}
        </div>
    );
}

export default Draggable;

Draggable.propTypes = {
    id: PropTypes.string,
    style: PropTypes.object,
    children: PropTypes.node,
}