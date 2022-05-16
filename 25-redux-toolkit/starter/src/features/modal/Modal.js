
import React from 'react'
import { closeModal } from './ModalSlice'
import { clearCard } from '../card/CardSlice'
import { useDispatch } from 'react-redux'

const Modal = () => {
  const dispatch = useDispatch()
  return (
    <aside className='modal-container'>
      <div className='modal'>
        <h4>Remove all items from your shopping cart?</h4>
        <div className='btn-container'>
          <button onClick={()=>{
            dispatch(clearCard())
          }}  type='button' className='btn confirm-btn'>
            confirm
          </button>
          <button onClick={()=>{
            dispatch(closeModal())
          }}   type='button' className='btn clear-btn'>
            cancel
          </button>
        </div>
      </div>
    </aside>
  )
}

export default Modal