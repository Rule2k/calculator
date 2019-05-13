/**
 * Npm import
 */
import React from 'react';

/**
 * Local import
 */
import Calculator from 'src/components/Calculator';
import Result from 'src/containers/Result';
import './app.scss';

/**
 * Code
 */
const App = () => (
  <div id="app">
    <Result />
    <Calculator />
  </div>
);

/**
 * Export
 */
export default App;
