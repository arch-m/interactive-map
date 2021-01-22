import React, { useState } from 'react';
import { RiMenuFill } from 'react-icons/ri'
import logo from './awa2.png'
import {
  Link
} from "react-router-dom";
import './NavBar.css'
import Style from './NavBar.module.css'

export const NavBar = () => {
  const [active, setActive] = useState(false)
  return (
    <>
      <nav id="sidebar" className={`${active ? Style.active : Style.show} d-flex flex-column bg-light`}>
        <div className="sidebar-header p-2 d-flex bg-secondary">
          <div className="ms-1 d-flex justify-content-center align-items-center">
            <img id="sidebar-icon" src={logo} alt="Icono de AWA" />
            <h3 className="m-0 mb-1 px-2">AWA</h3>
          </div>
          <div className="ms-auto">
            <button className={Style.btn} onClick={() => setActive(!active)} type="button">
              <RiMenuFill /> 
            </button>
          </div>
        </div>
        <div className={`p-2 ${active && Style.hidden}`}>
          <div className="text-secondary p-2 my-3">
            <h4>Geografía de México</h4>
          </div>
          <ul className="list-unstyled components">
            <li>
              <Link to="/">Mapa Interactivo</Link>
            </li>
            <li>
              <Link to="/cuestionarios">Cuestionarios</Link>
            </li>
            <li>
              <Link to="/referencias">Referencias</Link>
            </li>
            {
              /* <li>
              <Link to="/enciclopedia">Enciclopedia</Link> Componente pendiente por dificultad de realizacion, necesita filtros y
              queries para la busqueda de datos, ademas de necesitar uso de hooks de memorizacion para efeciencia
              </li> */
            }
          </ul>
        </div>
        <div className={`sidebar-footer mt-auto px-2 text-secondary ${active && Style.hidden}`}>
          <h5>Instituto Politécnico Nacional </h5>
          <p className="mb-1">Escuela Superior de Cómputo</p>
          <p>2021</p>
        </div>
      </nav>
    </>
  )
}