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

// // initial store
const initialState = {
  cart:cartItems ,
  total:0,
  amount:0 
}

const store = createStore( reducer ,initialState)


function App() {
  // cart setup

  return (
    <main>
      <Navbar cart={store.getState()}  />
      <CartContainer cart={cartItems} />
    </main>
  );
}

export default App;
