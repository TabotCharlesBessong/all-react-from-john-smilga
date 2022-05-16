
import React from 'react'
import CardItem from './CardItem'
import { useSelector , useDispatch } from 'react-redux'
import { clearCard } from '../features/card/CardSlice'

const CardContainer = () => {
  const dispatch = useDispatch()
  const {cardItems,total , amount} = useSelector((store)=> store.card )

  if(amount < 1){
    return (
      <section className="cart">
        <header>
          <h2>your bag</h2>
          <h4 className="empty-cart">is currently empty</h4>
        </header>
      </section>
    )
  }
  return (
    <section className='cart' >
      <header>
        <h2>your bag</h2>
      </header>
      <div>
        {cardItems.map((item)=>{
          return (
          <CardItem key={item.id} {...item}  />
            
          )
        })}
      </div>
      <footer>
        <hr />
        <div className="cart-total">
          <h4>total <span> ${total.toFixed(2)} </span> </h4>
          
        </div>
        <button onClick={()=> dispatch(clearCard()) } className="btn clear-btn">clear cart</button>
      </footer>
    </section>
  )
}

export default CardContainer