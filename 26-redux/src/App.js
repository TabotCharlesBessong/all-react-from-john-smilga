import React from "react";
// components
import Navbar from "./components/Navbar";
import CartContainer from "./components/CartContainer";
// items
import cartItems from "./cart-items";
// redux stuff
import {createStore} from 'redux'
import { DECREASE, INCREASE , RESET } from "./actions";
import reducer from "./reducer";
import { Provider } from "react-redux";

// // initial store
const initialState = {
  cart:cartItems ,
  total:125,
  amount:5 
}

const store = createStore( reducer ,initialState)


function App() {
  // cart setup

  return (
    <Provider store={store} >
      <Navbar   />
      <CartContainer  />
    </Provider>
  );
}

export default App;
