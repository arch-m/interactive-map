import React, { useState } from 'react';
import {
  Link
} from "react-router-dom";
import './NavBar.css'
import Style from './NavBar.module.css'

export const NavBar = () => {
  const [active, setActive] = useState(false)
  return (
    <>
      <nav id="sidebar" className={`${active ? Style.active : Style.show} d-flex flex-column navbar-light bg-light `}>
        <div className="sidebar-header p-2 d-flex bg-secondary">
          <div>
            <h3>AWA</h3>
          </div>
          <div className="ms-auto">
            <button class="mx-0 navbar-toggler" onClick={() => setActive(!active)} type="button">
              <span class="navbar-toggler-icon"></span>
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
        <div class="mt-auto px-2 text-secondary">
          <div>
            <p>IPN Escuela Superior de Cómputo 2021</p>
          </div>
        </div>
      </nav>
    </>
  )
}