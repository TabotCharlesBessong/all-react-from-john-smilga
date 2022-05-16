
import {createSlice} from '@reduxjs/toolkit'

const initialState = {
  cartItem:[],
  amount:5,
  total:0,
  isLoading:true
}

const cardSlice = createSlice({
  name:'card',
  initialState
})

// console.log(cartSlice)

export default cardSlice.reducer