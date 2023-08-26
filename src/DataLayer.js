import React from "react";
import { createContext, useReducer, useContext } from "react";
const DataLayerContext = React.createContext();
export default function DataLayer({ initialState, reducer, children }) {
  return (
    <DataLayerContext.Provider value={useReducer(reducer, initialState)}>
      {children}
    </DataLayerContext.Provider>
  );
}
export const useDataLayerValue = () => useContext(DataLayerContext);
