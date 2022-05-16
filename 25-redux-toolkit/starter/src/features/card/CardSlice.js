
import {createSlice} from '@reduxjs/toolkit'
import cardItems from '../../cardItems'

const initialState = {
  cardItems:cardItems,
  amount:2,
  total:0,
  isLoading:true
}

const cardSlice = createSlice({
  name:'card',
  initialState
})

// console.log(cartSlice)

export default cardSlice.reducer