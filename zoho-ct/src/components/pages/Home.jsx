/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars
import {React,useRef,useState} from 'react';
import styled from 'styled-components';
import Category from './Category';
import Gmap from './Gmap';


const Container = styled.div`

  background:transparent;
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
    @media screen and (max-width: 900px) {
      flex-direction:column;
      justify-content:space-between;

    }
  
`

const Left = styled.div`

  display: flex;
  //border: 2px solid gray;
  height: 80vh;
  width: 30%;
  padding: 5px;
  @media screen and (max-width: 900px) {
      width:100%;
      height:40%;
    }
    @media screen and (max-width: 700px) {
      width:100%;
      height:40%;
    }
    
    @media screen and (max-height: 667px) {
      height:50%;
    }
  
`

const Right = styled.div`

  display: flex;
  height: 80vh;
  background-color:#DDDDDD;
  border: 2px solid grey;
  border-radius: 20px;
  width: 70%;
  @media screen and (max-width: 900px) {
      width:100%;
      height:60%;
      border-radius: 0px;
    }
    @media screen and (max-height: 667px) {
      height:50%;
    }
    
  
`



const Home = () => {

  const [selectedCate,setSelectedCate]=useState('Hospital');

  return (
    <Container>
    <Section>
      <Left>
        <Category
          selectedCate={selectedCate}
          setSelectedCate={setSelectedCate}
        />
      </Left>
      <Right>
        <Gmap
          selectedCate={selectedCate}
        />
      </Right>
    </Section>
    </Container>
  )
}

export default Home