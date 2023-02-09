import React from 'react';
import Tour from './Tour';

type ToursProps = {
  tours:[],
  removeTours:()=> void
}

const Tours = ({tours , removeTours}) => {
  return <>
  <section>
    <div className="title">
      <h2>our tours</h2>
      <div className="underline"></div>
      <div className="">
        {tours.map((tour:Object)=>{
          return (
            <Tour key={tour.id} removeTours={removeTours} />
          )
        })}
      </div>
    </div>
  </section>
  </>;
};

export default Tours; 