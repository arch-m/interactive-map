import React from 'react';
import { useModal } from '../../hooks/useModal';
import { Card } from '../Card/Card';
import './style(temporal).css';

export const MapState = ({id, d, name, description}) => {

  const {isShowing, toggle} = useModal();
  
  return (
    <>
      <path id={ id } stroke={ '#FFFFFF' }  strokeWidth={ 0.5 } style={ { fill: '#CCCCCC' } } d={ d } onClick={ toggle } />
      <Card
        name={ name }
        description={ description }         
        isShowing={isShowing}
        hide={toggle}
      />
    </>
  );
}
