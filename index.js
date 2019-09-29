import React, { useReducer, useState, useContext, createContext } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';

const Actions = {
  Update: "SET"
}

const set = name => ({ type: Actions.Update, payload: { name } })

const reducer = (state, { type, payload }) => {
  switch (type) {
    case Actions.Update:
      return payload
    default:
      return state
  }
}

const Context = createContext(null);

// Hooks can only be called inside the body of a function component.
// const value = useContext(Context)

const initialState = { name: "Hooks" }
  
const App = () => {
  const [value, setState] = useState("Narayanan")
  const [state, dispatch] = useReducer(reducer, initialState)
  const [buttonText, setButtonText] = useState("Click me, please");


  return (
    <Context.Provider value={"Valarmathi"}>
      <form onSubmit={e => {
        e.preventDefault()
        dispatch(set(value))
      }}>
        <Hello {...state} />
        <Context.Consumer>
          {contextValue => <p>Welcome {contextValue}</p>}
        </Context.Consumer>
        <input value={value} onChange={({ target: { value } }) => setState(value)} />
        <br/><br/>
        <input type="submit" value="Change Name" />

        <button onClick={() => setButtonText("Thanks, been clicked!")}>
      {buttonText}
    </button>
      </form>
    </Context.Provider>
  )
}

render(<App />, document.getElementById('root'));
