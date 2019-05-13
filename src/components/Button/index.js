import React from 'react';
import './button.scss';

const Button = ({ sigle, newInput }) => {
  const inputHasBeenPressed = () => (
    newInput(sigle)
  );
  return (
    <div className="button" onClick={inputHasBeenPressed}>
      <p>{sigle}</p>
    </div>
  );
};


export default Button;
