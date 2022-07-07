import React, { useEffect } from 'react';
import i18next from 'i18next';
import { useTranslation } from 'react-i18next';

const Categories = ({filterItems,categories}) => {
  const {i18n,t} = useTranslation(["translation"])

  useEffect(() => {
		if (localStorage.getItem("i18nextLng")?.length > 2) {
			i18next.changeLanguage("en");
		}
	}, []);

  const handleLanguageChange = (e) => {
		i18n.changeLanguage(e.target.value);
	};

  return <>
    <div className="btn-container">
      {/* manual work  */}
      <button className="filter-btn" onClick={()=> filterItems('all')} >
         {t('all')}
       </button>
      <button className="filter-btn" onClick={()=> filterItems('breakfast')} >
        {t('breakfast')}
      </button>

      <button className="filter-btn" onClick={()=> filterItems
       ('lunch')} >
         {t('lunch')}
       </button>

      <button className="filter-btn" onClick={()=> filterItems
      ('shakes')} >
         {t('shakes')}
       </button>

       
       <button className="filter-btn" onClick={()=> filterItems('dinner')} >
         {t('dinner')}
       </button>

       <div className="" id="navbarNav">
						<select
							className="nav-link bg-dark border-0 ml-1 mr-2"
							value={localStorage.getItem("i18nextLng")}
							onChange={handleLanguageChange}
						>
							<option value="en">English</option>
							<option value="fr">Français</option>
							<option value="de">Deutch</option>
						</select>
					
			</div>

      {/* dynamic work  */}
      {/* {categories.map((category,index)=>{
        return (
          <button className='filter-btn' type='button' key={index} onClick={()=> filterItems(category)}>
            {category}
          </button>
        )
      })} */}
    </div>
  </>;
}; 

export default Categories;
