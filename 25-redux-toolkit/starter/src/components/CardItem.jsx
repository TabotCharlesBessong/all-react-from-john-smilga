import React from "react";
import {  useDispatch } from "react-redux";
import { ChevronDown, ChevronUp } from "../icons";
import { decrease, increase, removeItem } from "../features/card/CardSlice";

const CardItem = ({ id, img, title, price, amount }) => {
  const dispatch = useDispatch()
  return (
    <article className='cart-item'>
      <img src={img} alt={title} />
      <div>
        <h4>{title}</h4>
        <h4 className='item-price'>${price}</h4>
        {/* remove button */}
        <button onClick={()=> {
          dispatch(removeItem(id))
        } }  className='remove-btn'>remove</button>
      </div>
      <div>
        {/* increase amount */}
        <button onClick={()=> {
          dispatch(increase({id}))
        } }     className='amount-btn'>
          <ChevronUp />
        </button>
        {/* amount */}
        <p className='amount'>{amount}</p>
        {/* decrease amount */}
        <button onClick={()=> {
          if(amount === 1){
            dispatch(removeItem(id))
            return
          }
          dispatch(decrease({id}))
        } }    className='amount-btn'>
          <ChevronDown />
        </button>
      </div>
    </article>
  );
};

export default CardItem;