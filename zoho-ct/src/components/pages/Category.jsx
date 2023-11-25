/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import '../../../Shared/Data'
import Data from '../../../Shared/Data'
import styled from 'styled-components';

const Container = styled.div`

  display: flex;
  flex-direction:column;
 
  height:30%;
  @media screen and (max-width: 900px) {
    h2{
        margin-bottom:1px;
        padding:10px;
        font-size: 1.5rem;
        
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
  
`

const Cate = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  @media screen and (max-width: 900px) {
    flex-direction: row;
    flex-wrap: wrap;
  }
  img {
    height: 40px;
    width: 40px;
    padding: 0.1em;
  }
  .sdiv {
    margin: 5px;
    padding: 5px;
    background-color: #DDDDDD;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 10px;
    border: 1.5px solid #190482;
    cursor:pointer;
  }

  .mystyle{
    margin: 10px;
    padding: 5px;
    display: flex;
    flex-direction: column;
    align-items: center;
    cursor:pointer;
    border: 2px solid #190482;
    border-radius: 20px;
    background-color:white;
    transition: all 0.2s ease 0s;
  } 

  .sdiv:hover {
    border: 1.5px solid #B15EFF;
    border-radius: 30px;
    background-color:white;
    transition: all 0.8s ease 0s;
  }

  .para {
    font-family: "Play", sans-serif;
    font-weight: bold;
    font-size:1rem;
  }
  @media screen and (max-width: 900px) {
    .sdiv:hover {
    border: 1.5px solid #9400ff;
    border-radius: 20px;

    transition: all 0.8s ease 0s;
  }
  .para {
    font-size:0.8rem;
  }
  }
`;


const Category = (params) => {
    const [category,setCategory]=useState(Data.CategoryListData);
    

  return (
    <Container>
    <h2 className=''>
        Select Category :
    </h2>

    <Cate>
        {category.map((item,index)=>(

            <div className={params.selectedCate==item.name?"mystyle":"sdiv"} onClick={()=>{params.setSelectedCate(item.name)}} key={index}>
                <img
                    src={item.icon}
                    alt={item.name}
                />
                <p className='para'>{item.name}</p>
            </div>
        ))}
    </Cate>

    </Container>
  )
}

export default Category