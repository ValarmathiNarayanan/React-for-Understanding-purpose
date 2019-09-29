import React, { Component, useState, useContext, useEffect } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';
import { OffSwitches, OnSwitches } from './actions';
import { Store, StoreProvider } from './Store';

const App = () => {
  let [switchOffOn, setState] = useState(true);
  const { state, dispatch } = useContext(Store);
  const [buttonText, setButtonText] = useState("Click me, please");
  return (
    <div className="App">
      <h1> Toggle Buttons {state.PriceMapSwitches.FXE}</h1>
      <button className='my-btn' type='button' onClick={() => {
        setState(switchOffOn = true)
        OnSwitches(dispatch)
      }}>ON Switch
      </button>
      <button className='my-btn' type='button' onClick={() => {
        setState(switchOffOn = false)
        OffSwitches(dispatch)
      }}>OFF Switch
      </button>

       <button onClick={() => setButtonText("Thanks, been clicked!")}>
      {buttonText}
</button>
    </div>
  );
}

render(
  <StoreProvider>
    <App />
  </StoreProvider>
  , document.getElementById('root'));
