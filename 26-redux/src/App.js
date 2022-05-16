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



//reducer
const reducer = (state,action)=>{
  console.log({state,action});
  if(action.type === DECREASE ){
    return {...state, count:state.count - 1 }
  }
  if(action.type === INCREASE ){
    return {...state, count:state.count + 1 }
  }
  else{
    return state
  }
  // return state
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
