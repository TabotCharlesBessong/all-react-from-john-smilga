
import { configureStore } from "@reduxjs/toolkit";
import cardReducer from './features/card/CardSlice'
import modalReducer from './features/modal/ModalSlice'

export const store = configureStore({
  reducer:{
    card:cardReducer,
    modal:modalReducer
  }
})