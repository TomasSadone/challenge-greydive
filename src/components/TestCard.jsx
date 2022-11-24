import React from 'react';
import { useNavigate } from 'react-router';

export const TestCard = ({ cliente }) => {
  const handleClick = () => {
    navigate(`/${cliente}`);
  };
  const navigate = useNavigate();
  return (
    <div className='test-card'>
      <h1 className='uppercase fs-30 text-decoration'>{cliente}</h1>
      <button className='nav-btn' onClick={handleClick}>
        IR
      </button>
    </div>
  );
};
