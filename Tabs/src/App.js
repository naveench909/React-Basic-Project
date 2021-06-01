import React, { useState, useEffect } from 'react'
import { FaAngleDoubleRight } from 'react-icons/fa'
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tabs-project'
function App() {
  const [loading , setLoading] = useState(true);
  const [jobs , setJobs] = useState([]);
  const [value, setValue] = useState(0);

  const getJobs= async ()=>{
    const response = await fetch(url);
    const newJobs = await response.json();
    setJobs(newJobs); 
    setLoading(false);
    console.log(newJobs);
    return;
  }

  useEffect(()=>{
   getJobs(); 
  },[])

  if(loading){
    return(
      <div className="loading">
        <h2>Loading...</h2>
      </div>
    )
  }
  
  const {company ,dates , duties , title} = jobs[value];

  const showMe = (val)=>{
    setValue(val);
    return;
  }
  return (
    <main>
      <div className="first">
        <h2>Experience</h2>
        <div className="underline"></div>
      </div>

      <div className="second">

          <div className="btn-cntr">
            <button className="btn" onClick={()=>showMe(0)}>Tommy</button>
            <button className="btn" onClick={()=>showMe(1)}>BigDrop</button>
            <button className="btn" onClick={()=>showMe(2)}>Cuker</button>
          </div>


          <div className="info-cntr">
              <h3>{title}</h3>
              <div className="company">{company}</div>
              <div className="dates">{dates}</div>
              <div className="duties-info">
                {duties.map((duty , index)=>{
                  return(
                    <div key={index} className="job-desc">
                      <div className="icon-div">
                        <FaAngleDoubleRight className="icon"></FaAngleDoubleRight>
                      </div>
                      <div className="duty">
                        <p>{duty}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
          </div>
      </div>
      
    </main>

  );
}

export default App
