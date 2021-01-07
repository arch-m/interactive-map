import React from 'react';
import {
  Link
} from "react-router-dom";

export const NavBar = () => {
  return (
    <>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Mapa</Link>
            </li>
            <li>
              <Link to="/cuestionarios">Cuestionarios</Link>
            </li>            
            <li>
              <Link to="/referencias">Referencias</Link>
            </li>
            {/* <li>
              <Link to="/enciclopedia">Enciclopedia</Link> Componente pendiente por dificultad de realizacion, necesita filtros y
              queries para la busqueda de datos, ademas de necesitar uso de hooks de memorizacion para efeciencia
            </li> */}
          </ul>
        </nav>
      </div>
    </>
  );
}