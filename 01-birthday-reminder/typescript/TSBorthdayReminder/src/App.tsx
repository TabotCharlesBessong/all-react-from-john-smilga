import React,{useState} from 'react'
import data from './constant/data'
import List from './List'
import {Wrapper,Button} from './App.styles'

export type BirthdayType = {
  id: number;
  name: string;
  age:number;
  image: string;
};

const App = () => {
  const [people,setPeople] = useState(data as BirthdayType[])
  return (
    <Wrapper>
      <div className='container'>
        <h3>{people.length} Birthday Today</h3>
        <List people={people} />
        <Button onClick={()=> setPeople([])} >Clear All</Button>
      </div>
    </Wrapper>
  )
}

export default App
