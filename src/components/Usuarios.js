import React from 'react';
import ChartRow from './ChartRow';
import { useState, useEffect } from 'react';

function Usuarios (){
    let [usuarios,setUsuarios] = useState([]) 
  
    useEffect(()=>{
      fetch('http://localhost:4000/api/usuarios')
      .then(res => res.json())
      .then(resul => setUsuarios(resul.users))
      .catch(error => console.error(error))
    
    },[])

     let tableRowsData = [];  
        usuarios.map((usuario,i)=>{
            tableRowsData.push(usuario)
    })

    return (
        /* <!-- DataTales Example --> */
        <div className="card shadow mb-4">
            <div className="card-body">
                <div className="table-responsive"> <h2>Usuarios Registrados</h2>
                    <table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
                        <thead>
                            <tr>
                                <th>Nombre y Apellido</th>
                                <th>Usuario</th>
                                <th>email</th>
                                <th>Fecha Nacimiento</th>
                                
                            </tr>
                        </thead>
                        <tfoot>
                            <tr>
                                <th>Nombre y Apellido</th>
                                <th>Usuario</th>
                                <th>email</th>
                                <th>Fecha Nacimiento</th>
                                
                            </tr>
                        </tfoot>
                        <tbody>
                            {
                            tableRowsData.map( ( row , i) => {
                                return <ChartRow { ...row} key={i}/>
                            })
                            }

                        </tbody>
                    </table>
                </div>
            </div>
        </div>

    )
}

export default Usuarios;