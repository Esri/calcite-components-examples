import React, { useState, useEffect, useRef } from 'react';
import '@esri/calcite-components/dist/calcite/calcite.css';
import './App.css';

function App() {
  const sliderEl = useRef(null);
  const [sliderValue, setSliderValue] = useState(50);

  function onUpdate(event){
    setSliderValue(event.target.value);
  }

  // need to access the dom node to set custom event listeners or props that aren't strings / numbers
  // https://stenciljs.com/docs/react#properties-and-events
  useEffect(_ => {
    sliderEl.current.addEventListener('calciteSliderUpdate', onUpdate);
  }, [sliderEl]);

  return (
    <div className="App">
      <h1>Hello, React</h1>
      <calcite-button>Test</calcite-button>
      <calcite-icon icon="banana" />
      <calcite-slider
        ref={sliderEl}
        min="1"
        max="100"
        value={sliderValue}
        step="1"/>
      <p>The slider currently has a value of {sliderValue}</p>
    </div>
  );
}

export default App;
