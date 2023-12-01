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
  const [sliderValue, setSliderValue] = useState(30);
  const [histogramSliderValue, setHistogramSliderValue] = useState(40);
  const [colorsHistogramSliderValue, setColorsHistogramSliderValue] = useState(50);
  const [rangeHistogramMinValue, setRangeHistogramMinValue] = useState(50);
  const [rangeHistogramMaxValue, setRangeHistogramMaxValue] = useState(80);
  const histogram = [
    [0, 0],
    [20, 12],
    [40, 25],
    [60, 55],
    [80, 10],
    [100, 0],
  ];
  const colors = ["violet", "blue", "cyan", "green", "yellow", "orange", "red"];
  const colorStops = colors.map((color, i) => ({ offset: (1 / (colors.length - 1)) * i, color }));

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
              <p>Basic slider - value: <span className='value'>{sliderValue}</span></p>
              <CalciteSlider
                min="0"
                max="100"
                step="1"
                value={sliderValue}
                onCalciteSliderInput={(e) => setSliderValue(e.target.value)}
              />
              <CalciteButton onClick={(e) => setSliderValue(0)}>Reset slider</CalciteButton>
            </div>
            {/* Slider histogram */}
            <div>
              <p>Slider histogram - value: <span className='value'>{histogramSliderValue}</span></p>
              <CalciteSlider 
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
            {/* Slider histogram with color stops*/}
            <div>
              <p>Slider histogram with color stops - value: <span className='value'>{colorsHistogramSliderValue}</span></p>
              <CalciteSlider 
                min="0" 
                max="100" 
                step="1" 
                scale="m" 
                value={colorsHistogramSliderValue} 
                onCalciteSliderInput={(e) => setColorsHistogramSliderValue(e.target.value)}
                histogram={histogram}
                histogramStops={colorStops}
              />
              <CalciteButton onClick={(e) => setColorsHistogramSliderValue(0)}>Reset slider</CalciteButton>
            </div>
            {/* Slider histogram with color stops*/}
            <div>
              <p>Slider range histogram with labeled ticks and precise labeled handles - range: <span className='value'>{rangeHistogramMinValue}</span> to <span className='value'>{rangeHistogramMaxValue}</span></p>
              <CalciteSlider 
                min="0"
                max="100"
                min-value={rangeHistogramMinValue}
                max-value={rangeHistogramMaxValue}
                step="10"
                ticks="10"
                min-label="Temperature range (lower)"
                max-label="Temperature range (upper)"
                label-handles
                label-ticks
                precise
                scale="m" 
                histogram={histogram}
                onCalciteSliderInput={(e) => {e.target.dragProp === 'minValue' ? setRangeHistogramMinValue(e.target.minValue) : setRangeHistogramMaxValue(e.target.maxValue)}}
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
