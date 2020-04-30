import React, {Fragment} from 'react';  //  /* +tyT */
import styled from 'styled-components';
import Draggable from './Draggable'; 
import Droppable from './Droppable';
import './estilizado/estilos.css';

//const Wrapper = {
    //width: '100%',
    //padding: '32px',
    //display: 'flex',
    //justifyContent: 'center'
//}

const Item = {
    padding: '8px',
    color: '#555',
    backgroundColor: 'white',
    borderRadius: '3px'
}

const droppableStyle = {
    backgroundColor: '#555',
    width: '250px',
    height: '400px',
    margin: '32px'
}

export default class Prueba extends React.Component {

    render(){
        return(
        <Fragment>
            <Droppable id="dr1" style={droppableStyle}>
                <Draggable id="item1" style={{ margin: '8px' }}><Item style={Item}>Item 1</Item></Draggable>
                <Draggable id="item2" style={{ margin: '8px' }}><Item style={Item}>Item 2</Item></Draggable>
            </Droppable>

             <Droppable id="dr2" style={droppableStyle}>

            </Droppable>
        </Fragment>
        );
    }
    
}