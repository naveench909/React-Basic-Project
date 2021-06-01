import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
const Question = ({id, title , info}) => {
  const [show , setShow] = useState(false);
  const setState = ()=>{
    setShow(!show);
  }
  return (
    <section className="section">
      <div className="first">
        <h4>{title}</h4>
        <button onClick={()=>setState()}>
          {show ? <AiOutlineMinus/> : < AiOutlinePlus/>}
        </button>
      </div>
      <div className="second"><p> {show ? info : ''} </p></div>
    </section>
  );
};

export default Question;
