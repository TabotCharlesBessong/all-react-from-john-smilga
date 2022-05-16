
import { configureStore } from "@reduxjs/toolkit";
import cardReducer from './features/card/CardSlice'

export const store = configureStore({
  reducer:{
    card:cardReducer,
    // modal:
  }
})