import React from 'react';
import SmallCard from './SmallCard';
import { useState, useEffect } from 'react';

/*  Cada set de datos es un objeto literal */




function Numeros(){

    let [cantEvent,setCantEvent] = useState([]) 
    useEffect(()=>{
        fetch('http://localhost:4000/api/eventos')
        .then(res => res.json())
        .then(resul => setCantEvent(resul.count))
        .catch(error => console.error(error))
      
      },[])

      let [cantUsers,setCantUsers] = useState([]) 
      useEffect(()=>{
          fetch('http://localhost:4000/api/usuarios')
          .then(res => res.json())
          .then(resul => setCantUsers(resul.count))
          .catch(error => console.error(error))
        
        },[])

    
    

let cantidadEventos = {
    title: 'Cantidad de Eventos Programados',
    color: 'primary', 
    cuantity: cantEvent,
    icon: 'fa-clipboard-list'
}



let cantidadEventosRealizados = {
    title:' Total de Eventos ya realizados', 
    color:'success', 
    cuantity: '179',
    icon:'fa-award'
}



let cantidadUsuarios = {
    title:'Cantidad de Usuarios Registrados' ,
    color:'warning',
    cuantity:cantUsers,
    icon:'fa-user-check'
}

let cartProps = [cantidadEventos, cantidadEventosRealizados, cantidadUsuarios];
    return (
    
        <div className="row">
            
            {cartProps.map( (num, i) => {

                return <SmallCard {...num} key={i}/>
            
            })}

        </div>
    )
}

export default Numeros;