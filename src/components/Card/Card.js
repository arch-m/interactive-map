import React from 'react';
import ReactDOM from 'react-dom';
import { CardGallery } from './CardGallery';
import { CardInfo } from './CardInfo';

export const Card = ({ name, description, isShowing, hide }) => isShowing ? ReactDOM.createPortal(
  <>
    <div className="modal-overlay"/>
    <div className="modal-wrapper" aria-modal aria-hidden tabIndex={-1} role="dialog">
      <div className="modal">
        <div className="modal-header">
          <button type="button" className="modal-close-button" data-dismiss="modal" aria-label="Close" onClick={hide}>
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <CardInfo name={ name } description={ description }/>
        <CardGallery id={ name }/>
      </div>
    </div>
  </>, document.body
): null;
