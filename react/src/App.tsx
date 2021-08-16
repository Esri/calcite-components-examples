import React, {useState} from 'react';
import {CalciteButton, CalciteIcon, CalciteSlider} from "@esri/calcite-components-react"
import '@esri/calcite-components/dist/calcite/calcite.css';
import './App.css';

function App() {
  const [sliderValue, setSliderValue] = useState<number | null>(50);

  function onUpdate(event: CustomEvent){
    setSliderValue((event.target as HTMLCalciteSliderElement).value);
  }

  return (
    <div className="App">
      <h1>Hello, React</h1>
      <CalciteButton>Test</CalciteButton>
      <CalciteIcon icon="banana" />
      <CalciteSlider
        onCalciteSliderUpdate={onUpdate}
        min={1}
        max={100}
        value={sliderValue}
        step={1} />
      <p>The slider currently has a value of {sliderValue}</p>
    </div>
  );
}

export default App;
