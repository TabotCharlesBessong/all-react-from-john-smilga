
import {BirthdayType} from './App'

type Props = {
  people:BirthdayType[];
}

const List: React.FC<Props> = ({people}) => {
  return(
    <>
      {people.map((person)=>{
        const {id,name,age,image} = person
        return (
          <article key={id} className='person'>
            <img src={image} alt={name} />
            <div className="">
              <h4>{name}</h4>
              <p>{age}</p>
            </div>
          </article>
        )
      })}
    </>
  )
}

export default List