import React from "react";
import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";


function DetalleEvento(props) {

const id = useParams()


let [evento,setEvento] = useState([]) 
  
useEffect(()=>{

  fetch(`http://localhost:4000/api/eventos/${id.id}`)
  
  .then(res => res.json())
  .then(resul =>setEvento(resul.evento))
  .catch(error => console.error(error))

},[])


return (
<div className="detalles-container">
  <h1 className="h1-city">Ciudad: {evento.city}</h1>
  <div className="img-container">
    <img className="detalle-img" src={`http://localhost:4000/img/${evento.image}`}></img>
   </div>
  <div className="info-container">
    <h2>Detalles del evento:</h2>
    <h2>Pais: {evento.country}</h2>
    <h2>Precio: {evento.currency}  {evento.price}</h2>
    <h2>Fecha: {evento.date}</h2>
    <h2>Evento Disponible: {evento.agotado===0?'Si':'Lo siento... se encuentra agotado este evento!!'}</h2>
    <h3>Description: {evento.description}</h3>
  </div>




</div>
)  
}


export default DetalleEvento;
