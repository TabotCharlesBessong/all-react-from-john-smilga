import React ,{useState,useEffect} from 'react'
import Loading from './Loading'
import Tours from './Tour'

const url:String = 'https://course-api.com/react-tours-project'

const App:React.FC = () => {
  const [loading,setLoading] = useState(true)
  const [tours,setTours] = useState([])

  const removeTours = (id:Number)=>{
    const newTours = tours.filter((tour:Object)=>
      tour.id !== id
    )
    setTours(newTours)
  }
  const fetchTours = async () =>{
    setLoading(true)
    try {
      const response = await fetch(url)
      const tours = await response.json()
      setLoading(false)
      setTours(tours)
    } catch (error) {
      setLoading(false)

      console.log(error);
    }
    console.log(tours);
  }

  useEffect(()=>{
    fetchTours()
  },[])

  if(loading){
    return (
      <main>
        <Loading />
      </main>
    )
  }
  if(tours.length === 0 ){
    return (
      <main>
        <div className="title">
          <h2>No tours left</h2>
          <button className='btn' onClick={()=> fetchTours()} > refresh</button>
        </div>
      </main>
    )
  }
  return <>
  <main>
    <Tours tours={tours} removeTours={removeTours} />
  </main>
  </>
}

export default App