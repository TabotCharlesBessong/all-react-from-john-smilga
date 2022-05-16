
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

export default reducer 