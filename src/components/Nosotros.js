import React from 'react';
import imagenFondo from '../assets/images/concierto-wide1.jpg'
function Nosotros(){
    return(
        <div className="col-lg-6 mb-4">
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h5 className="m-0 font-weight-bold text-gray-800">A STAR IS BORN - Tickets To Go</h5>
                </div>
                <div className="card-body">
                    <div className="text-center">
                        <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{width: 40 +'rem'}} src={imagenFondo} alt=" Star Wars - Mandalorian "/>
                    </div>
                    <p>“A Star is Born” se centra en Jackson Maine, un músico country veterano cuya carrera se encuentra en decadencia. Maine descubre a una talentosa cantante llamada Ally, una joven aspirante a estrella que sueña con triunfar en el apasionante mundo del espectáculo.


En enero de 2011 se anunció que el proyecto estaba en marcha, aunque con Clint Eastwood como director y Cooper y Beyoncé como potenciales protagonistas. Sin embargo, en marzo de 2015, Warner Bros. actualizó que Cooper sería el responsable del proyecto y que debutaría como director en el mismo. El actor también siguió de cerca la producción y guion de la cinta.</p>
                    <a className="btn btn-danger" target="_blank" rel="nofollow" href="http://localhost:4000/">Ir a la Web Oficial</a>
                </div>
            </div>
        </div>
    )
}

export default Nosotros;
