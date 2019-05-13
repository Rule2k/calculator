import React from 'react';
import Button from 'src/containers/Button';
import './calculator.scss';

const Calculator = () => (
  <div id="calculator">
    <div className="row">
      <Button sigle="7" />
      <Button sigle="8" />
      <Button sigle="9" />
      <Button sigle="del" />
    </div>
    <div className="row">
      <Button sigle="5" />
      <Button sigle="6" />
      <Button sigle="7" />
      <Button sigle="/" />
    </div>
    <div className="row">
      <Button sigle="1" />
      <Button sigle="2" />
      <Button sigle="3" />
      <Button sigle="-" />
    </div>
    <div className="row">
      <Button sigle="." />
      <Button sigle="0" />
      <Button sigle="=" />
      <Button sigle="+" />
    </div>
  </div>
);

export default Calculator;
