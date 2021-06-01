import React, { createContext, useContext, useReducer } from "react";
// prepare the datalayer
export const StateContext = createContext();
// wrap aur app and provide a Data Layer
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);
// Pull information from the data layer
export const useStateValue = () => useContext(StateContext);
