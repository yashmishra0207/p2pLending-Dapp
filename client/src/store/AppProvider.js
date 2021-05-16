import React from "react";
import { login, signup } from "./actions/authAction";
import rootReducer from "./reducers/rootReducer";

export const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const initialState = {};
  const [appState, dispatch] = React.useReducer(rootReducer, initialState);
  console.log(appState);
  const value = {
    appState,
    signup: (details) => signup(dispatch, details),
    login: (credentials) => login(dispatch, credentials),
  };
  console.log(value);

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export default AppProvider;
