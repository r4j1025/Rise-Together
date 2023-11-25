/* eslint-disable react/no-unescaped-entities */
// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios'

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
    height: 100%;
    max-width: 1500px;
    width:1500px;
    @media screen and (max-width: 900px) {
      flex-direction:column;
    }
  
`

const Left = styled.div`

  display: flex;
  padding: 30px;
  height: 100%;
  justify-content:center;
  width: 80%;
  @media screen and (max-width: 900px) {
      width:100%;
      height:90%;
      padding: 10px;
      order: 2;
    }
`


const Right = styled.div`

  display: flex;
  height: 100%;
  padding: 30px;
  flex-direction:column;
  justify-content: center;
  align-items: center;
  align-items: center;
  //border: 2px solid gray;
  width: 20%;
  @media screen and (max-width: 900px) {
      width:100%;
      height:10%;
      justify-content:end;
      flex-direction: row;
      padding: 5px;
      font-size: 0.8rem;
    }

    .button {
  padding: 0.5em 0.8em;
  border: none;
  border-radius: 9999px;
  margin:10px;
  font-weight: bold;
  color: #2c9caf;
  transition: all 1000ms;
  font-size: 1rem;
  position: relative;
  overflow: hidden;
  outline: 2px solid #2c9caf;
}

button:hover {
  color: #ffffff;
  transform: scale(1.1);
  outline: 2px solid #70bdca;
  box-shadow: 4px 5px 17px -4px #268391;
}

button::before {
  content: "";
  position: absolute;
  left: -50px;
  top: 0;
  width: 0;
  height: 100%;
  background-color: #2c9caf;
  transform: skewX(45deg);
  z-index: -1;
  transition: width 1000ms;
}

button:hover::before {
  width: 250%;
}




/*---------------------------------------------*/
.button2 {
  position: relative;
  transition: all 0.3s ease-in-out;
  margin:10px;
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.2);
  padding: 0.5em 0.8em;
  background-color: rgb(0 107 179);
  border-radius: 9999px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ffff;
  gap: 2px;
  font-weight: bold;
  border: 3px solid #ffffff4d;
  outline: none;
  overflow: hidden;
  font-size: 1rem;
}

.icon {
  width: 0.8rem;
  height: 0.8rem;
  transition: all 0.3s ease-in-out;
}

.button2:hover {
  transform: scale(1.05);
  border-color: #fff9;
}

.button2:hover .icon {
  transform: translate(4px);
}

.button2:hover::before {
  animation: shine 1.5s ease-out infinite;
}

.button2::before {
  content: "";
  position: absolute;
  width: 100px;
  height: 100%;
  background-image: linear-gradient(
    120deg,
    rgba(255, 255, 255, 0) 30%,
    rgba(255, 255, 255, 0.8),
    rgba(255, 255, 255, 0) 70%
  );
  top: 0;
  left: -100px;
  opacity: 0.6;
}

@keyframes shine {
  0% {
    left: -100px;
  }

  60% {
    left: 100%;
  }

  to {
    left: 100%;
  }
}
`
const FeedsContainer = styled.div`

  display: flex;
  flex-wrap:wrap;
  border: 1px solid gray;
  border-radius: 10px;
  background:linear-gradient(180deg, rgba(188,122,249,1) 0%, rgba(255,131,251,1) 100%);
  padding: 6px;
  height: 100%;
  width: 80%;
  overflow-y:scroll;
  @media screen and (max-width: 900px) {
      padding: 6px;
      width: 100%;
    }
`

const PostCard=styled.div`
display: flex;
background-color:#F5F7F8;
height: 40%;
gap:3px;
border: 2px solid gray;
border-radius:20px;
padding: 3px;
margin-bottom: 20px;
width:100%;
@media screen and (max-width: 600px) {
  flex-direction: column;
  height: 60%;
  gap:3px;
    }
`
const PostImg=styled.div`
display: flex;
//border: 2px solid gray;
justify-content: center;
align-items: center;
width:40%;
img{
  object-fit: contain;
  border-radius: 10px;
  height: 100%;
  width: 100%;
}
@media screen and (max-width: 600px) {
  width: 100%;
  height: 60%;

  img{

      
    }
     
    }
`
const PostDes=styled.div`
display: flex;
position: relative;
flex-direction:column;
padding:3px;
border-left: 2px solid gray;
width:60%;
h3{
    font-family: 'Nanum Gothic', sans-serif;
    margin: 10px;
  }
  p{
    font-family: 'Nanum Gothic', sans-serif;
  }
@media screen and (max-width: 600px) {
  width: 100%;
  height :40% ;
  border-left:none;

  h3{
    font-size: 1rem;
    margin: 0px;
  }
  p{
    font-size: 0.8rem;
  }
    }
  .contact{
  position: absolute;
  
  cursor: pointer;
                    outline: 0;
                    color: #fff;
                    background-color: #0d6efd;
                    border-color: #0d6efd;
                    display: inline-block;
                    font-family: "Play", sans-serif;
                    text-align: center;
                    border: 1px solid transparent;
                    padding: .1em;
                    font-size: 1rem;
                    border-radius: .25rem;
                    transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;
                    :hover {
                        color: #fff;
                        background-color: #0b5ed7;
                        border-color: #0a58ca;
                    }
                
  /* color:blue;
  text-decoration: none; */
  bottom: 3px;
  right: 6px;
  font-size: 15px;
  }
  @media screen and (max-height: 670px){
    h3{

    font-size: 0.7rem;
    margin: 0px;
  }
  p{
    font-size: 0.65rem;
  }
  .contact{
    font-size: 0.6rem;
    bottom:1px;
    right: 6px;
  }
  }
  @media screen and (max-height: 750px){
    h3{
      margin: 0px;
    font-size: 0.7rem;
  }
  p{
    font-size: 0.65rem;
  }
  .contact{
    font-size: 0.6rem;
    bottom:1px;
    right: 6px;
  }
  }
  @media screen and (max-height: 850px){
    h3{
      margin: 0px;
    font-size: 0.7rem;
  }
  p{
    font-size: 0.65rem;
  }
  .contact{
    font-size: 0.6rem;
    bottom:1px;
    right: 6px;
  }
  }
  
`

const Feeds = () => {
  const [data,setData]=useState([])
  useEffect(()=>{
    axios.get('http://localhost:3001/getData')
    .then(data=>setData(data.data))
    .catch(err => console.log(err))
  },[])

  return (
    <Container>
    <Section>
      <Left>
      <FeedsContainer>
      {
        data.map(data=>{
        <PostCard>
        <PostImg><img src={data.img}/></PostImg>
        <PostDes>
          <h3>{data.h3}</h3>
          <p>{data.p}</p>
          <p className='contact'>contact</p>
        </PostDes>
        </PostCard>
      })
      }
        
      </FeedsContainer>
      </Left>
      <Right>
        <button className='button'>Refresh Feeds</button>
        <button className='button2'> Post Feed
        <svg fill="currentColor" viewBox="0 0 24 24" className="icon">
    <path clipRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm4.28 10.28a.75.75 0 000-1.06l-3-3a.75.75 0 10-1.06 1.06l1.72 1.72H8.25a.75.75 0 000 1.5h5.69l-1.72 1.72a.75.75 0 101.06 1.06l3-3z" fillRule="evenodd"></path>
  </svg>
        </button>
      </Right>
    </Section>
    </Container>
  )
}

export default Feeds