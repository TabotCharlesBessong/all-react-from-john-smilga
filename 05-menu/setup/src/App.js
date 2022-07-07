import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';
import { useTranslation } from 'react-i18next';

const allCategories =['all',...new Set(items.map((item)=> item.category))]
// console.log(allCategories);


function App() {
  const [menu,setMenu] = useState(items)
  const [categories,setCategories] = useState(allCategories)
  const {t} = useTranslation(["translation"])

  const filterItems = (category)=>{
    if(category === 'all'){
      setMenu(items)
      return
    }
    const newItems = items.filter((item)=> item.category === category)
    setMenu(newItems)
  }
  return <>
    <main>
      <section className="menu section">
        <div className="title">
          <h2>{t('title')}</h2>
          <div className="underline">

          </div>
        </div>
        <Categories categories={categories} filterItems={filterItems} />
        <Menu items={menu} />
      </section>
    </main>
  </>;
} 

export default App;
