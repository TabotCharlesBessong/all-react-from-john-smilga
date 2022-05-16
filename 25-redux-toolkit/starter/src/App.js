import React, { useEffect } from 'react'
import CardContainer from './components/CardContainer'
import Navbar from './components/Navbar'
import { useDispatch , useSelector } from 'react-redux'
import { calculateTotals } from './features/card/CardSlice'
import cardItems from './cardItems'

const App = () => {
  const {cardItems} = useSelector((store) => store.card )
  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(calculateTotals())
  },[cardItems])
  return (
    <main>
      <Navbar/>
      <CardContainer/>
    </main>
  )
}

export default App