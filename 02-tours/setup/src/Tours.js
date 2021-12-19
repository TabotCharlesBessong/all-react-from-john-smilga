import React from 'react';
import Tour from './Tour';
const Tours = ({tours , removeTours}) => {
  return <>
  <section>
    <div className="title">
      <h2>our tours</h2>
      <div className="underline"></div>
      <div className="">
        {tours.map((tour)=>{
          return (
            <Tour key={tour.id} removeTours={removeTours} >

            </Tour>
          )
        })}
      </div>
    </div>
  </section>
  </>;
};

export default Tours; 
