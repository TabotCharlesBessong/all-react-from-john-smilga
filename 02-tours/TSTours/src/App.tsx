import React,{useState} from 'react'
import {Wrapper,Button} from './App.styles'

export type BirthdayType = {
  id: number;
  name: string;
  age:number;
  image: string;
};

const App = () => {
  return (
    <Wrapper>
      <h1>Hello my world</h1>
    </Wrapper>
  )
}

export default App
