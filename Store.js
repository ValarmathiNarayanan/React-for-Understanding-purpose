import React, {createContext, useReducer}  from 'react';
import {initState} from './initState';
import {reducer} from './reducer';

const Store = createContext();

const StoreProvider = (props) =>  {
  const [state, dispatch] = useReducer(reducer, initState);
  console.log(state);
  return <Store.Provider value={{state,dispatch}}>{props.children}</Store.Provider>
  
}

export {Store, StoreProvider};