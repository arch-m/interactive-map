import React from 'react';
import { useFetchData } from '../../hooks/useFetchGifs';
import { MapState } from './MapState';
import { colors } from './Colors';


export const MapStateList = () => {

  const { data:states, loading } = useFetchData();
  
  const getRandomColor = () => {
    return colors[Math.floor(Math.random()*colors.length)]
  }
  return (
    <>
      { loading && <p className="animate__animated animate__flash">Loading...</p>}
      
      { 
        states.map(state => (
          <MapState 
            key={ state.id }
            color={ getRandomColor() }
            { ...state } 
          />
        ))
      }
    </>
  );
}