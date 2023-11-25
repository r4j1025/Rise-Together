// eslint-disable-next-line no-unused-vars
import React,{useState,useEffect} from 'react';
import styled from 'styled-components';
import Data from '../../../Shared/Data2';
//import './guidance.css';



const Container = styled.div`

  background:transparent;
  height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  margin:15px;
  
  
  
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
  flex-direction: column;
  //border: 2px solid gray;
  height: 80vh;
  width: 30%;
  padding: 5px;
  @media screen and (max-width: 900px) {
      width:100%;
      height:30%;
    }
    @media screen and (max-width: 700px) {
      width:100%;
      height:30%;
    }
    
    @media screen and (max-height: 667px) {
      height:30%;
    }
    @media screen and (max-width: 900px) {
    h2{
        margin-bottom:1px;
        padding:10px;
        font-size: 1.3rem;
        
    }
    button{
      font-size:0.65rem;
      //width:50%;
    }
    .mdiv{
      flex-direction: row;
      width:100%;
  
    }
    div{
      width: 50%;
    }

    }
    h2{
        margin-bottom:1px;
        padding:10px;
        font-weight:normal;
        display:block;
        color:white;
        //font-family: 'Playpen Sans', cursive;
        font-family: 'Secular One', sans-serif;
        text-shadow: 4px 4px 5px rgba(0,0,0,0.23);

        
    }
    div{
      display: flex;
      gap:3px;
      flex-direction: column;
  
    }
    button{
        width: 70%;
        padding: 0.8em;
        border-radius:10px;
        color: black;
        border: 1px solid grey;
        font-family: "Play", sans-serif;
        font-weight: bold;
        background-color:#DDDDDD;
    }
    button:hover {
    border: 1.5px solid #190482;
    border-radius: 30px;
    background-color:white;
    transition: all 0.8s ease 0s;
  }
    .mdiv{
      //gap:3px;
    }
  
`

const Right = styled.div`

  display: flex;
  flex-direction: column;
  gap: 5px;
  height: 80vh;
  //padding-top: 50px;
  padding:30px;
  background-color:#F8E8EE;
  overflow-y:scroll;
  border: 2px solid grey;
  border-radius: 20px;
  width: 70%;
  li{
    
  }
  li {
    display: flex;
    align-items: center;
    margin: 10px 0;
    font-size: 1.5rem;
    line-height: 25px;

    list-style: none;
}

li:before {
    display: block;
    flex-shrink: 0;
    width: 15px;
    height: 15px;
    margin-right: 10px;

    

    background: url('/b.png') no-repeat left center;
    background-size: contain;

    content: '';
}
  @media screen and (max-width: 900px) {
      width:100%;
      height:70%;
      
      li{
    font-size: 1rem;
  }
    }
    @media screen and (max-height: 667px) {
      height:70%;
    }
    li{
      font-family: 'Nanum Gothic', sans-serif;
    }
  
`



const Guidance = () => {
const [selected, setselected] = useState('cyclone')
const [data,setData]=useState(Data.cyclone)
useEffect(() => {cd();},[selected])
  
  

  const cd=()=>{
  switch(selected) {

    case "cyclone":  return setData(Data.cyclone);
    case "flood":   return setData(Data.flood);
    case "risedtemp": return setData(Data.risedtemp);
    case "roadacc":  return setselected(Data.roadacc);
    case "cpr":  return setData(Data.cpr);

    //default: return console.log(params.selectedCate)
  }}
  

  return (
    <Container>
      <Section>
        <Left>
        <h2 className=''>
        Guidelines
        </h2>
        <div className='mdiv'>
        <div>
          <button onClick={()=>setselected('cyclone')}>Cyclone</button>
          <button onClick={()=>setselected('flood')}>Flood</button>
          <button onClick={()=>setselected('risedtemp')}>Rised Temperature</button>
        </div>
        <div>
          <button onClick={()=>setselected('roadacc')}>Road Accident</button>
          <button onClick={()=>setselected('cpr')}>CPR</button>
          <button >More...</button>
        </div>
        </div>
        </Left>
        <Right>
          {data.map(
            (data,index)=><ul  key={index}><li >{data.des}</li></ul>
          )}
        </Right>
      </Section>
    </Container>
  )
}

export default Guidance