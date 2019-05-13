import React from 'react';
import './button.scss';

const Button = ({ sigle, newInput, result, clear }) => {
  const inputHasBeenPressed = () => {
    if(sigle === '=') {
      return (
        result()
      );
    } else if(sigle === 'del') {
      return (
        clear()
      )
    } return (
        newInput(sigle)
      )
  };
  return (
    <div className="button" onClick={inputHasBeenPressed}>
      <p>{sigle}</p>
    </div>
  );
};


export default Button;
