import React, { useState, useEffect } from 'react'
import List from './List'
import Alert from './Alert'


const getLocalStorage = ()=>{
  const allItem = localStorage.getItem('allItem');
  if(allItem){
    return JSON.parse(localStorage.getItem('allItem'))
  }else{
    return []
  }
}
function App() {
  const[name , setName] = useState('');
  const[allItem , setAllItem] = useState(getLocalStorage());
  const[isEditing , setIsEditing] = useState(false);
  const[editId , setEditId] = useState(null);
  const[alert , setAlert] = useState({show:false , msg:'' , type:''});

  
  
  const handleSubmit = (e)=>{
    e.preventDefault();
    console.log("hi");
    if(!name){
      setAlert({
        show:true,
        msg:'please enter some value',
        type:'danger'
      })
      
      //display alert
    }else if(name && isEditing){
      // shange something
      setAllItem(allItem.map((item)=>{
        if(item.id===editId){
          return {...item , title:name}
        }
        return item
      }))

      setName('');
      setEditId(null);
      setIsEditing(false);
      setAlert({
        show:true,
        msg:'Item Updated',
        type:'success'
      })
    }else{
      // additem in List
      const newItem = {id: new Date().getTime().toString() , title:name}
      setAllItem([...allItem,newItem])
      setName('');
      setAlert({
        show:true,
        msg:'Item Added',
        type:'success'
      })
    }
  }

  const removeAlert = ()=>{
      setAlert({show:false});
  }

  const clearList = ()=>{
    setAlert({
        show:true,
        msg:'List is Empty',
        type:'danger'
      })

      setAllItem([]);
  }

  const removeItem = (id)=>{
    setAlert({
        show:true,
        msg:'Deleted',
        type:'danger'
      })
    const newItem =  allItem.filter((item)=>item.id != id);
    setAllItem(newItem);
  }

  const editItem = (id)=>{
    const clickedItem = allItem.find((item)=>item.id===id);
    setIsEditing(true);
    setEditId(id);
    setName(clickedItem.title);
  }

  useEffect(()=>{
    localStorage.setItem('allItem' , JSON.stringify(allItem))
  },[allItem])

  return (
    <section className="section-cntr">
      <form className="form-cntr" onSubmit={handleSubmit}>
        {alert.show && <Alert msg={alert.msg} type={alert.type} removeAlert={removeAlert} list={allItem} />}
        <h3>Grocery List</h3>
        <div className="form-cntrl">
          <input type="text" 
          className="input-cntr"          
          placeholder='eg: eggs' 
          value={name} 
          onChange={(e)=>{setName(e.target.value)}}/> 

          <button className="submit-btn">
            {isEditing? 'Edit' : 'Submit'}
          </button>
        </div>
      </form>

      {allItem.length > 0 && (
        <div className="grocery-cntr">
          <List items={allItem} removeItem={removeItem} editItem={editItem}/>
          <button onClick={()=>clearList()}className="clear-btn">Clear Item</button>
        </div>
      )}
    </section>
  );
}

export default App
