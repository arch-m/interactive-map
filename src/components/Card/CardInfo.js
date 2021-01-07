import React from 'react';

export const CardInfo = ({ name, description }) => {
  return (
    <>
      <h3> { name } </h3>
      <span>
        { description }
      </span>
    </>
  );
}
