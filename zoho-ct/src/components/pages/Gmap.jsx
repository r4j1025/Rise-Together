/* eslint-disable no-unused-vars */
import React from 'react';
import {Map,Marker,NavigationControl,Popup} from 'react-map-gl';
import "mapbox-gl/dist/mapbox-gl.css"
import { useState,useEffect } from 'react';
import Data from '../../../Shared/Data';
import MapProfile from './MapProfile';
import { Link } from "react-router-dom";

const Gmap = (params) => {


  const [cor,setCor]=useState(Data.Hospital);
  const [showPopup, setShowPopup] = useState(true);


  const TOKEN = import.meta.env.VITE_TOKEN;
  const [viewState, setViewState] = useState({
    latitude: 11.914442,
    longitude: 79.635635,
    zoom:14,
  });

  useEffect(() => {conditionMap();},[params.selectedCate])

  
  

  const conditionMap=()=>{
  switch(params.selectedCate) {

    case "Hospital":   return setCor(Data.Hospital);
    case "Volunteers":   return setCor(Data.volunteers);
    case "Fire Station": return setCor(Data.Fire_Station);
    case "DRA":  return setCor(Data.DRA);
    case "Police":  return setCor(Data.Police);

    //default: return console.log(params.selectedCate)
  }}
  

  return (
    <div style={{width : '98%',height:'98%',margin:'auto',
  }}>
      <Map
        {...viewState}
        mapboxAccessToken={TOKEN}
        width="100%"
        minZoom="9"
        onMove={evt=>setViewState(evt.viewState)}
        transitionDuration='200'
        mapStyle="mapbox://styles/raj1025/clozrzou800gd01qj71b6eumy"
      >
        {cor.map((c,index)=><Marker
        //onClick={(<MapProfile name={c.val}/>)}     //<Link to="/mapprofile"></Link>
        key={index}
        longitude={c.lng}
        latitude={c.lat}
        ><center>
        <img src='/pin.png' width="30px" height="30px"/>
        <h4>{c.description}</h4></center></Marker>
        )}
        
        <NavigationControl position="bottom-right" />
      </Map>
    </div>
  )
}

export default Gmap