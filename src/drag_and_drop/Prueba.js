import React from 'react';  //  /* +tyT */
import styled from 'styled-components';
import Draggable from './Draggable'; 
import Droppable from './Droppable';
import './estilizado/estilos_prueba.css';

const Wrapper = styled.div`
    width: 100%;
    padding: 0px;
    display: inline-block;
    justify-content: center;
`;

const Item = styled.div`
    padding: 8px;
    color: #000;
    background-color: #80A7CB;
    border-radius: 3px;
`;

const droppableStyle = {
    backgroundColor: '#098668',
    width: '250px',
    height: '400px',
    margin: '32px',
    border: 'solid'
};

const Prueba = () => {
        //Los id en los Draggables SON importantes, permitiran poder arrastrar los elementos a otro espacio sin problemas
        return(
        <Wrapper>
            <Droppable id="dr1" style={droppableStyle}>
                <Draggable id="item1" style={{ margin: '5px' }}><Item>Item 1</Item></Draggable>
                <Draggable id="item2" style={{ margin: '5px' }}><Item>Item 2</Item></Draggable> 
            </Droppable>
            <Droppable id="dr2" style={droppableStyle}>
                <Draggable id="item3" style={{ margin: '5px' }}><Item>Item 3</Item></Draggable>
            </Droppable>
        </Wrapper>
        );
    
}

export default Prueba;