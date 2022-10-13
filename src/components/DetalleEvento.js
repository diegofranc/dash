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
<div>
  <h1>Detalles del evento...!</h1>
  <h2>Ciudad: {evento.city}</h2>
  <h2>Pais: {evento.country}</h2>
  <h2>Precio: {evento.currency}  {evento.price}</h2>
  <h2>Fecha: {evento.date}</h2>
  <h2>Evento Disponible: {evento.agotado===0?'Si':'Lo siento... se encuentra agotado este evento!!'}</h2>
  <h3>Description: {evento.description}</h3>


  <img src={`http://localhost:4000/img/${evento.image}`}></img>

</div>
)  
}


export default DetalleEvento;
