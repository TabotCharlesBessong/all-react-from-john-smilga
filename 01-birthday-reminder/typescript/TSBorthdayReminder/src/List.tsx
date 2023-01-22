
import {BirthdayType} from './App'
import {Person} from './App.styles'

type Props = {
  people:BirthdayType[];
}

const List: React.FC<Props> = ({people}) => {
  return(
    <>
      {people.map((person)=>{
        const {id,name,age,image} = person
        return (
          <Person key={id} className='person'>
            <img src={image} alt={name} />
            <div className="">
              <h4>{name}</h4>
              <p>{age}</p>
            </div>
          </Person>
        )
      })}
    </>
  )
}

export default List