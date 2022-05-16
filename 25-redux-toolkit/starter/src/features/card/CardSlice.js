
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
  initialState,
  reducers:{
    clearCard:(state)=>{
      state.cardItems = []
    },
    removeItem: (state, action) => {
      const itemId = action.payload;
      state.cardItems = state.cardItems.filter((item) => item.id !== itemId);
    },
    increase: (state, { payload }) => {
      const cardItem = state.cardItems.find((item) => item.id === payload.id);
      cardItem.amount = cardItem.amount + 1;
    },
    decrease: (state, { payload }) => {
      const cardItem = state.cardItems.find((item) => item.id === payload.id);
      cardItem.amount = cardItem.amount - 1;
    },
    calculateTotals: (state) => {
      let amount = 0;
      let total = 0;
      state.cardItems.forEach((item) => {
        amount += item.amount;
        total += item.amount * item.price;
      });
      state.amount = amount;
      state.total = total;
    },
  }
})

// console.log(cardSlice)
export const {clearCard , decrease , increase , removeItem , calculateTotals} = cardSlice.actions
export default cardSlice.reducer