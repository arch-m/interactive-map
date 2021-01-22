import React from 'react';
import { useFetchStatesData } from '../../hooks/useFetchData';
import { MapState } from './MapState';
import getRandomColor from './Colors';


export const MapStateList = () => {


  const { data:states, loading } = useFetchStatesData();

  return (
    <>
      { loading && <p className="animate__animated animate__flash">Loading...</p>}
      
      { 
        states.map(state => (
          <MapState 
            key={ state.id }
            color={ getRandomColor("pasteles") }
            { ...state } 
          />
        ))
      }
    </>
  );
}