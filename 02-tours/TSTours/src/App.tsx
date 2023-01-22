import React,{useState} from 'react'
import {Wrapper,Button} from './App.styles'
import { useQuery } from 'react-query';
import { LinearProgress, Grid } from '@material-ui/core';

export type TourType = {
  id: number;
  image: string;
  info:string;
  price:number;
  name: string;
};

const getTours = async (): Promise<TourType> => await(await fetch('https://course-api.com/react-tours-project')).json()

const App = () => {
  const [loading,setLoading] = useState(true)
  const [tours,setTours] = useState([] as TourType[])
  const {data,isLoading,error} = useQuery<TourType[]>(
    'tours',
    getTours
  )
  console.log(data)

  const removeTours = (id:number)=>{
    const newTours = tours.filter((tour)=>
      tour.id !== id
    )
    setTours(newTours)
  }
  return (
    <Wrapper>
      <h1>Hello my world</h1>
    </Wrapper>
  )
}

export default App
