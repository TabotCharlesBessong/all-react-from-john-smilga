import React, { useState, useEffect } from 'react'
import List from './List'
import Alert from './Alert'

const getLocalStorage = ()=>{
  let list = localStorage.getItem('list')
  if(list){
    return JSON.parse(localStorage.getItem('list'))
  }
  else{
    return []
  }
}

function App() {
  const [name,setName] = useState('')
  const [list,setList] = useState(getLocalStorage)
  const [isEdit,setIsEdit] = useState(false)
  const [editId,setEditId] = useState(null)
  const [alert,setAlert] = useState({show:false,msg:'',type:''})

  const handleSubmit = (e)=>{
    e.preventDefault()
    // alert('hello')
    if(!name  ){
      // alet display
      showAlert(true,'danger','please enter value')
    }
    else if(name && isEdit ){
      // editing 
      setList(list.map((item)=>{
        if(item.id === editId){
          return {...item  , title:name }
        }
        return item
      }))
      setName('')
      setEditId(null)
      setIsEdit(false)
      showAlert(true,'success','value changed')
    }
    else{
      // add item to the list 
      showAlert(true,'success','item added to the list succesfully ')
      // show allert
      const newItem = {id:new Date().getTime().toString(),title:name}
      setList([...list,newItem])
      setName('')
    }
  }

  const showAlert = (show=false,type='',msg='')=>{
    setAlert({show,type,msg})
  }

  const clearList = ()=>{
    showAlert(true,'danger','empty list')
    setList([])
  }

  const removeItem = (id)=>{
    showAlert(true,'danger','item removed ')
    setList(list.filter((item)=> item.id !== id))
  }

  const editItem = (id)=>{
    const spesificItem = list.find((item)=> item.id === id )
    setIsEdit(true)
    setEditId(id)
    setName(spesificItem.title)
  }

  useEffect(()=>{
    localStorage.setItem('list',JSON.stringify(list))
  },[list])

  return <>
    <section className="section-center">
      <form className='grocery-form' onSubmit={handleSubmit} >
        {alert.show && <Alert {...alert} removeAlert={showAlert} list={list}/> }
        <h3>grocery bud</h3>
        <div className="form-control">
          <input type="text" className='grocery' placeholder='e.g egg' value={name} onChange={(e)=> setName(e.target.value)} />
          <button type="submit" className='submit-btn'>
            {isEdit ? 'edit' : 'submit'}
          </button>
        </div>
      </form>
      {list.length > 0 &&  
      <div className="grocery-container">
        <List  items={list} removeItem={removeItem} editItem={editItem} />
        <button className="clear-btn" onClick={clearList} >clear items value</button>
      </div>
      }
    </section>
  </>
}
 
export default App
 