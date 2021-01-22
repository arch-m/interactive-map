import React from 'react';
import { useFetchData } from '../../hooks/useFetchGifs';
import { MapState } from './MapState';
import getRandomColor from './Colors';


export const MapStateList = () => {

  const { data:states, loading } = useFetchData();
  
  
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