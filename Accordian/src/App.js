import React, { useState } from 'react';
import data from './data';
import SingleQuestion from './Question';
function App() {
  return (
    <main>
        <div className="title">
          <h3>Question and Answer About Login</h3>
        </div>
        <div className="ques-container">
          {data.map((ques) =>{
            const {id , title , info} = ques;
            return(
              <SingleQuestion key={id} title={title} info={info}/>
            )
          })}
        </div>
    </main>
  );
}

export default App;
