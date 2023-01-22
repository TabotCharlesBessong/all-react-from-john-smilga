import React,{useState} from 'react'
import data from './constant/data'
import List from './List'

export type BirthdayType = {
  id: number;
  name: string;
  age:number;
  image: string;
};

const App = () => {
  const [people,setPeople] = useState(data as BirthdayType[])
  return (
    <main>
      <section>
        <h3>{people.length} Birthday Today</h3>
        <List people={people} />
        <button onClick={()=> setPeople([])} >Clear All</button>
      </section>
    </main>
  )
}

export default App
