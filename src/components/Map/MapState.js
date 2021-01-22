import React from 'react';
import { useModal } from '../../hooks/useModal';
import { Card } from '../Card/Card';
import './style(temporal).css';

export const MapState = ({id, d, name, description, color}) => {

  const {isShowing, toggle} = useModal();
  
  return (
    <>
      <path id={ id } className="pth" stroke={ '#9c9a9a' }  strokeWidth={ 1 } style={ { fill: color } } d={ d } onClick={ toggle } />
      <Card
        name={ name }
        description={ description }         
        isShowing={isShowing}
        hide={toggle}
        color={color}
      />
    </>
  );
}
