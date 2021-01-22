import React from 'react';
import ReactDOM from 'react-dom';
import { CardInfo } from './CardInfo';

export const Card = ({ name, description, isShowing, hide, color }) => isShowing ? ReactDOM.createPortal(
  <>
    <div className="modal-overlay" style={{backgroundColor:`${color}`}}/>
    <div className="modal-wrapper" aria-modal aria-hidden tabIndex={-1} role="dialog">
      <div className="modal d-block">
        <div className="modal-header">
          <button type="button" className="btn modal-close-button" data-dismiss="modal" aria-label="Close" onClick={hide}>
            Cerrar
          </button>
        </div>
        <CardInfo name={ name } description={ description }/>
      </div>
    </div>
  </>, document.body
): null;
