import React from 'react';
import './button.scss';

const Button = ({ sigle, newInput, result }) => {
  const inputHasBeenPressed = () => {
    if(sigle === '=') {
      return (
        result()
      );
    } else {
      return (
        newInput(sigle)
      )
    }
  };
  return (
    <div className="button" onClick={inputHasBeenPressed}>
      <p>{sigle}</p>
    </div>
  );
};


export default Button;
