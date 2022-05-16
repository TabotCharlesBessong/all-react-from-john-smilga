import React from "react";
// components
import Navbar from "./components/Navbar";
import CartContainer from "./components/CartContainer";
// items
import cartItems from "./cart-items";
// redux stuff
import {createStore} from 'redux'
import { DECREASE, INCREASE } from "./actions";

// initial store
const initialState = {
  count:3 ,
  name:"John"
}

const store = createStore(reducer,initialState)
store.dispatch({type:DECREASE})
store.dispatch({type:INCREASE})
store.dispatch({type:INCREASE})
store.dispatch({type:INCREASE})

console.log(store.getState());

function App() {
  // cart setup

  return (
    <main>
      <Navbar cart = {store.getState()} />
      <CartContainer cart={cartItems} />
    </main>
  );
}

export default App;
