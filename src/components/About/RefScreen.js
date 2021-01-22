import React from 'react'
import Style from './RefScreen.module.css'
import escudoConaliteg from './escudoConaliteg.png'
import escudoESCOM from './logoESCOMBlanco.png'

export const RefScreen = () => {
  return (
    <div className="h-100 d-flex flex-column">
      <div className="h-100 d-flex text-center flex-column justify-content-center align-items-center">
        <img className={`mb-4 ${Style.logo}`} src={escudoConaliteg} alt="Escudo de la CONALITEG" />
        <div >
          <h2>Comisión Nacional de Libros de Texto Gratuitos</h2>
          <a className={Style.link} href="https://libros.conaliteg.gob.mx/" rel="noreferrer" target="_blank">CONALITEG.GOB.MX</a>
        </div>
      </div>
      <div className={`d-flex flex-row-reverse mt-auto ${Style.footer}`}>
        <img className="h-100 p-3" src={escudoESCOM} alt="escudo de la escom"/>
      </div>
    </div>
  );
}
