import React from 'react';
import { Loading } from './Loading';
import { TestCard } from './TestCard';

export const UsabilityTests = ({ data }) => {
  return (
    <div className='flow'>
      <h1>Pruebas de usabilidad:</h1>
      {data.map(test => (
        <TestCard key={test.cliente} cliente={test.cliente} />
      ))}
    </div>
  );
};
