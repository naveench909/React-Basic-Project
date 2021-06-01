import React, { useState, useEffect } from 'react'
import Loading from './Loading'
import Tours from './Tours'

// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tours-project'
function App() {
  const [tours , setTours] = useState([]);
  const [loading, setLoading] = useState(false);

  const getTours = async()=>{
    setLoading(true);
    try{
      const response = await fetch(url);
      const tours = await response.json();
      setLoading(false); 
      setTours(tours);
    }catch(error){
      setLoading(false);
      console.log(error);
    }

  }
  const removeTour = (id)=>{
    // console.log("hi")
    const newTours = tours.filter((tour)=> tour.id !== id);       
    setTours(newTours);
  }
  
  useEffect(()=>{
    getTours();
  },[]); 

  if(loading){
    return < Loading />;
  }

  if(tours.length === 0){
    return (<>
      <div className="noTours">
        <h2>No Tours Left</h2>
        <button className='refreshBtn' onClick={()=>getTours()}>Refresh</button>
      </div>
      </>
      )
  }

  return(
    <main className="main">
      <ul>
        <Tours tours={tours} removeTour={removeTour}/>
      </ul>
    </main>
  );
}

export default App
