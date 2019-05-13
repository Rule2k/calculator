import React from 'react';
import Button from 'src/components/Button';

const Calculator = () => (
  <div id="calculator">
    <div className="row">
      <Button className="left-button" sigle="7" />
      <Button className="left-button" sigle="8" />
      <Button className="left-button" sigle="9" />
      <Button className="right-button" sigle="del" />
    </div>
    <div className="row">
      <Button className="left-button" sigle="5" />
      <Button className="left-button" sigle="6" />
      <Button className="left-button" sigle="7" />
      <Button className="right-button" sigle="/" />
    </div>
    <div className="row">
      <Button className="left-button" sigle="1" />
      <Button className="left-button" sigle="2" />
      <Button className="left-button" sigle="3" />
      <Button className="right-button" sigle="-" />
    </div>
    <div className="row">
      <Button className="left-button" sigle="." />
      <Button className="left-button" sigle="0" />
      <Button className="left-button" sigle="=" />
      <Button className="right-button" sigle="del" />
    </div>
  </div>
);

export default Calculator;
