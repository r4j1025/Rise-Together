// eslint-disable-next-line no-unused-vars
import React from 'react';
import styled from 'styled-components';

const Container = styled.div`

  background:#E5CFF7;
  height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  margin:30px;
  
`

const Section = styled.div`

    display: flex;
    justify-content: center;
    align-items: center;
    height: 80vh;
    max-width: 1500px;
    width:1500px;
    @media screen and (max-width: 960px) {
      flex-direction:column;
    }
  
`

const Left = styled.div`

  display: flex;
  border: 2px solid gray;
  height: 80vh;
  width: 80%;
  @media screen and (max-width: 960px) {
      width:100%;
      height:10%;
    }
  
`

const Right = styled.div`

  display: flex;
  height: 80vh;
  border: 2px solid gray;
  width: 20%;
  @media screen and (max-width: 960px) {
      width:100%;
      height:90%;
    }
  
`



const Feeds = () => {
  return (
    <Container>
    <Section>
      <Left></Left>
      <Right></Right>
    </Section>
    </Container>
  )
}

export default Feeds