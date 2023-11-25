// eslint-disable-next-line no-unused-vars
import React from 'react';
import styled from 'styled-components';


const Container = styled.div`

  height: 80vh;
  background-color: #E5CFF7;
  border:5px solid grey;
  margin:30px;

  
`

const MapProfile = (params) => {
  return (
    <Container>
        {params.name}
    </Container>
  )
}

export default MapProfile