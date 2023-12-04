import React, { useState } from 'react';
import "@esri/calcite-components/dist/components/calcite-button.js";
import "@esri/calcite-components/dist/components/calcite-icon.js";
import "@esri/calcite-components/dist/components/calcite-slider.js";
import {
  CalciteButton,
  CalciteIcon,
  CalciteSlider
} from '@esri/calcite-components-react';
import '@esri/calcite-components/dist/calcite/calcite.css';
import "./App.css";

function App() {
  const [sliderValue, setSliderValue] = useState(50);
  const [histogramSliderValue, setHistogramSliderValue] = useState(60);
  const histogram = [
    [0, 0],
    [20, 12],
    [40, 25],
    [60, 55],
    [80, 10],
    [100, 0],
  ];

  return (
    <>
      <div className="app">
        <div className='header'>
          <h1>
            React App for Component Examples and Common Workflows
          </h1>
          <CalciteIcon icon="banana"/>
        </div>
        <div className='examples'>
          <div className='sliders'>
            {/* Basic slider */}
            <div>
              <p>Basic slider - Value: <span className='value'>{sliderValue}</span></p>
              <CalciteSlider
                min="0"
                max="100"
                step="1"
                value={sliderValue}
                onCalciteSliderInput={(e) => setSliderValue(e.target.value)}
              />
              <CalciteButton onClick={(e) => setSliderValue(0)}>Reset slider</CalciteButton>
            </div>
            {/* Slider with histogram */}
            <div>
              <p>Slider with histogram - Value: <span className='value'>{histogramSliderValue}</span></p>
              <CalciteSlider 
                className="react-histogram" 
                min="0" 
                max="100" 
                step="1" 
                scale="m" 
                value={histogramSliderValue} 
                onCalciteSliderInput={(e) => setHistogramSliderValue(e.target.value)}
                histogram={histogram}
              />
              <CalciteButton onClick={(e) => setHistogramSliderValue(0)}>Reset slider</CalciteButton>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
