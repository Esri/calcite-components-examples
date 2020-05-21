import React from 'react';
import '@esri/calcite-components/dist/calcite/calcite.css';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Hello, React</h1>
      <calcite-button>Test</calcite-button>
      <calcite-icon icon="banana" />
    </div>
  );
}

export default App;
