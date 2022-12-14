import React from 'react';
import image from '../assets/images/logo-DH.png';
import ContentWrapper from './ContentWrapper';
import Eventos from './Eventos';
import Nosotros from './Nosotros';
import Numeros from './Numeros';
import DetalleEvento from './DetalleEvento';
import NotFound from './NotFound';
import {Link, Route, Switch} from 'react-router-dom';

function SideBar(){
    return(
        <React.Fragment>
            {/*<!-- Sidebar -->*/}
            <ul className="navbar-nav bg-gradient-secondary sidebar sidebar-dark accordion" id="accordionSidebar">

                {/*<!-- Sidebar - Brand -->*/}
                <a className="sidebar-brand d-flex align-items-center justify-content-center" href="/">
                    <div className="sidebar-brand-icon">
                        <img className="w-100" src={image} alt="Digital House"/>
                    </div>
                </a>

                {/*<!-- Divider -->*/}
                <hr className="sidebar-divider my-0"/>

                {/*<!-- Nav Item - Dashboard -->*/}
                <li className="nav-item active">
                    <Link className="nav-link" to="/">
                        <i className="fas fa-fw fa-tachometer-alt"></i>
                        <span>Dashboard - Tickets To Go</span></Link>
                </li>

                {/*<!-- Divider -->*/}
                <hr className="sidebar-divider"/>

                {/*<!-- Heading -->*/}
                <div className="sidebar-heading">Opciones</div>

                {/*<!-- Nav Item - Pages -->*/}
                <li className="nav-item">
                <Link className="nav-link" to="/Eventos">
                        <i className="fas fa-fw fa-folder"></i>
                        <span>Eventos Disponibles</span>
                    </Link>
                </li>

                {/*<!-- Nav Item - Charts -->*/}
                <li className="nav-item">
                    <Link className="nav-link" to="/Nosotros">
                        <i className="fas fa-fw fa-chart-area"></i>
                        <span>Sobre Nosotros</span></Link>
                </li>

                {/*<!-- Nav Item - Tables -->*/}
                <li className="nav-item nav-link">
                <Link className="nav-link" to="/Numeros">
                        <i className="fas fa-fw fa-table"></i>
                        <span>N??meros</span></Link>
                </li>

                {/*<!-- Divider -->*/}
                <hr className="sidebar-divider d-none d-md-block"/>
            </ul>
           
            <Switch>
                <Route exact path="/">
                    <ContentWrapper />
                </Route>
                <Route path="/Eventos">
                    <Eventos />
                </Route>
                <Route path="/Nosotros">
                    <Nosotros />
                </Route>
                <Route path="/Numeros">
                    <Numeros />
                </Route>
                <Route path="/DetalleEvento/:id">
                    <DetalleEvento />
                </Route>
                    <Route component={NotFound} />
            </Switch>
           
        </React.Fragment>
    )
}
export default SideBar;