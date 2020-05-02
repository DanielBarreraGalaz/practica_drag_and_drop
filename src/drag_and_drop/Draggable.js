import React, {useEffect, useState, useRef} from 'react'; //  /* +tyT */
//import PropTypes from 'prop-types';

const Draggable = (props) => {
    const [dragging, setDragging] = useState(false);

    const dragNode = useRef();
    
    //Esta funcion permite pasar los datos del draggable a otro espacio droppable
    //Basicamente, permite poder soltar un draggable a otro espacio
    //Sin esta funcion la pagina se crashearia al intentar pasar el draggable a otro espacio droppable
    const handleDragStart = (e) => {
        console.log('Start dragging..')
        e.dataTransfer.setData('transfer', e.target.id);
        dragNode.current = e.target; //Permite poder soltar un elemento
        dragNode.current.addEventListener('dragend', handleDragEnd)
        setTimeout(() => {
            setDragging(true)
        }, 0)
    //setData
    //Parametro 1: El tipo de accion a realizar (En este caso, va a "transferir los datos de un draggable a otro droppable")
    //Parametro 2: El elemento sobre el que caera el efecto, especificado (en este caso) por su id
    }

    //Acciones para cambiar de lugar a un item con otro
    const handleDragEnter = (e) => {
        console.log('Entering drag..')

        if(e.target !== dragNode.current)
        {
            console.log('target is not the same')
        }
    }

    //Acciones al soltar el item
    const handleDragEnd = () => {
        console.log('Ending drag..')

        //Resetear el estado del draggable una vez se suelta
        setDragging(false)
        dragNode.current.removeEventListener('dragend', handleDragEnd);
        dragNode.current = null;
    }
    
    const noAllowDrop = (e) => {
        e.stopPropagation();
    }

    return (
        <div 
        id={props.id} 
        draggable="true" 
        onDragStart={handleDragStart}
        onDragEnter={dragging ? (e) => {handleDragEnter(e)}:null}
        onDragOver={noAllowDrop} 
        style={props.style}
        >
            {props.children}
        </div>
    );
}

export default Draggable;

//Draggable.propTypes = {
//    id: PropTypes.string,
//    style: PropTypes.object,
//    children: PropTypes.node,
//}