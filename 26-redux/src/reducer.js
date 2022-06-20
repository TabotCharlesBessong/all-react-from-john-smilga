import { CLEAR_CART, DECREASE, INCREASE , REMOVE } from "./actions";

//reducer
const reducer = (state,action)=>{
  // if(action.type === CLEAR_CART){
  //   return {...state , cart:[]}
  // }
  switch(action.type){
    case CLEAR_CART:
      return {...state , cart:[]}
      break
    case INCREASE:
      let tempCart = state.cart.map((cart)=>{
        if(cart.id === action.payload.id){
          cart = {...cart,amount:cart.amount + 1 }
        }
        return cart
      })
      return {...state,cart:tempCart }
      break

    case DECREASE:
      let tempCart1 = []
      if(action.payload.amount === 1){
        tempCart1 =  state.cart.filter(cart => cart.id !== action.payload.id)
      }else{
        tempCart1 = state.cart.map((cart)=>{
        if(cart.id === action.payload.id){
          cart = {...cart,amount:cart.amount - 1 }
        }
        return cart
      })
      }
      return {...state ,cart: tempCart1}
      break
    
    case REMOVE:
      return {...state, cart:state.cart.filter((cart) => cart.id !== action.payload.id )}
      break
    default:
      break

  }
  return state
}

export default reducer 