 import React, { useState } from 'react';
import data from './data';
function App() {
  
  const [count , setCount] = useState(0);
  const [para , setPara] = useState([]);
  
  const handleSubmit = (e)=>{
    e.preventDefault();
    const amount = parseInt(count);
    if(amount < 0){
      amount=1;
    }
    if(amount > data.length - 1){
      amount=data.length-1;
    }
    setPara(data.slice(0,amount));
  }
  return (
    <main>
        <h2>TIRED OF BORING LOREM IPSUM?</h2>
        <form className="form-cntr" onSubmit={handleSubmit}>
          <label htmlFor="amount">Paragraph :</label>
          <input type="number" name="amount" value={count} onChange={(e)=>setCount(e.target.value)} />
          <button>GENERATE</button>
        </form>
        <section className="para-section">
          {para.map((text)=>{
            return(
              <p>{text}</p>
            );
          })}
        </section>
    </main>
  );
}

export default App;
