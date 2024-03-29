import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import CartWidget from './CartWidget';
import './NavBar.css';

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-dark" >
      <Link className="navbar-brand  " to="/">
        <h1 style={{color:'white'}} className='custom-font'>DivineDermal</h1>
      </Link>

      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item mx-4">
            <NavLink className="nav-link" style={{color:'white'}} to="/">
              Inicio
            </NavLink>
          </li>
          <li className="nav-item mx-4">
            <NavLink className="nav-link" style={{color:'white'}} to="/categoria/Cuidado Facial">
              Facial
            </NavLink>
          </li>
          <li className="nav-item mx-4">
            <NavLink className="nav-link" style={{color:'white'}} to="/categoria/Cuidado del Cuerpo">
              Corporal
            </NavLink>
          </li>
          <li className="nav-item mx-4">
            <NavLink className="nav-link" style={{color:'white'}} to="/contacto">
              Contacto
            </NavLink>
          </li>
          <li className='mx-4 mt-1 mb-1'><CartWidget /></li>
        </ul>
      </div>

    
    </nav>
  );
};

export default NavBar;

