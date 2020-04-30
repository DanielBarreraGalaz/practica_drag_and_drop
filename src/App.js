import React from 'react';   //  /* +tyT */
import Prueba from './drag_and_drop/Prueba';
import styled from 'styled-components';

const AppWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 100px;
`;

const Container = styled.div`
`;

function App() {

  //render(){}
    return (
      <AppWrapper>
        <Container>
          <Prueba />
        </Container>
      </AppWrapper>
    );
}

export default App;
