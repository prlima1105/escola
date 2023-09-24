import React, { Component } from 'react';
import './Nav.css';
import {Link} from 'react-router-dom';
import logo from '../../assets/logo.png';
import user from '../../assets/user.png';
import FontAwesome from 'react-fontawesome';

export const NavDisplay = ({isLogged, signOut, photoURL}) => {
  return (
    <div id="navbar" className="nav-bar ? nav-bar ">
      <div className="logo">
        <Link to="/">
          <img className="logo_fix" src={logo} alt="logo"/>
        </Link>
      </div>

      <div className="pestanas">
        <Link to="/">
          <span className="less">Servicios</span>
        </Link>
        <Link to="/">
          <span className="less">Casos de uso</span>
        </Link>
        <Link to="/">
          <span className="less">Precios</span>
        </Link>
        <hr className="divider"/>
        <Link to="/contacto">
          <span className="less">Contacto</span>
        </Link>
        <hr className="divider"/>
        {!isLogged ?
        <div className="log">
          <Link to="/login" >
            <span >Login</span>
          </Link>
        </div>:
        <div className="dropdown" style={{display:"flex", alignItems:"center"}}>
          <button className="dropbtn"><img className="userphoto" src={photoURL ? photoURL : user} alt=""/></button>
          <div className="dropdown-content">
            <span><Link to="/perfil">Perfil</Link></span>
            <span className="none"><Link  to="/catalogo">Productos</Link></span>
            <span className="none"><Link to="/contacto"> Contacto</Link></span>
            <span><Link onClick={signOut} to="/">Cerrar sesión</Link></span>
          </div>
          {/*<button  className="close" >Cerrar sesion</button>*/}
        </div>}
      </div>
    </div>
  );
};
