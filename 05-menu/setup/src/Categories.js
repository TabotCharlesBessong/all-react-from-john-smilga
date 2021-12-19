import React from 'react';

const Categories = ({filterItems,categories}) => {
  return <>
    <div className="btn-container">
      {/* manual work  */}
      {/* <button className="filter-btn" onClick={()=> filterItems('breakfast')} > */}
        {/* breakfast */}
      {/* </button> */}

      {/* <button className="filter-btn" onClick={()=> filterItems */}
      {/* ('lunch')}  */}
        {/* lunch */}
      {/* </button> */}

      {/* <button className="filter-btn" onClick={()=> filterItems */}
      {/* // ('shakes')} > */}
        {/* shakes */}
      {/* </button> */}

      {/* <button className="filter-btn" onClick={()=> filterItems */}
      {/* // ('all')} > */}
        {/* all */}
      {/* </button> */}

      {/* dynamic work  */}
      {categories.map((category,index)=>{
        return (
          <button className='filter-btn' type='button' key={index} onClick={()=> filterItems(category)}>
            {category}
          </button>
        )
      })}
    </div>
  </>;
}; 

export default Categories;
