import React, { createContext, useReducer } from "react";
import GlobalReducer from "./GlobalReducer";

const initialState = {
  cart: getFromStorage("cart") || [],
  user: getFromStorage("user") || null,
  setUser: user => {},
  addToCart: item => {}
};

function getFromStorage(key) {
  let val = localStorage.getItem(key)
    ? JSON.parse(localStorage.getItem(key))[key]
    : null;
  return val;
}

export const GlobalState = createContext(initialState);

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(GlobalReducer, initialState);

  //actions
  function addToCart(item) {
    dispatch({
      type: "ADD_ITEM",
      payload: item
    });
  }

  function setUser(user) {
    dispatch({
      type: "SET_USER",
      payload: user
    });
  }

  return (
    <GlobalState.Provider
      value={{
        user: state.user,
        cart: state.cart,
        addToCart,
        setUser
      }}
    >
      {children}
    </GlobalState.Provider>
  );
};
