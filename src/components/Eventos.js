import React from "react";
import { useState, useEffect } from 'react';
import {Link, Route, Switch} from 'react-router-dom';

function Eventos() {
let [event,setEvent] = useState([]) 
  
useEffect(()=>{
  fetch('http://localhost:4000/api/eventos')
  .then(res => res.json())
  .then(resul => setEvent(resul.eventos))
  .catch(error => console.error(error))

},[])
 



  return (
    
    
    <div className="col-lg-6 mb-4">
      <div className="card shadow mb-4">
        <div className="card-header py-3">
          <h5 className="m-0 font-weight-bold text-gray-800">
            Eventos Disponibles
          </h5>
        </div>
        <div className="card-body">
          <div className="row">
            {event.map((ev,i)=>{
              return (
                
              <div className="col-lg-6 mb-4" key={i}>
                <div className="card bg-dark text-white shadow">
                <Link to={`/detalleEvento/${ev.id}`}><div className="card-body" >{ev.city}</div></Link>
                </div>
              </div>
              
              )
              })
            }  
            
            
           
          </div>
        </div>
      </div>
    </div>
  );
}

export default Eventos;
