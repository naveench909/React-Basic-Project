import React, { useState } from 'react';

const Tour = ({id, image, info, name, price, removeTour}) => {
  const [readMore ,setReadMore] = useState(false);
  
  return(
    <article className="article">
        <img  className="img" src={image} alt={name}/>
        <div className="footer">
          <div className="nameAndPrice">
          <div className="name">{name}</div>
          <div className="price">Rs.{price}</div>
        </div>
        <div className="paraDiv">
          <p>
            {readMore ? info : `${info.substring(0,200)}...`}
            <button className="showHideBtn"onClick={()=>setReadMore(!readMore)}>
              {readMore ? 'Show less' : 'Read more'}
            </button>
          </p> 
          <button  className="dltbtn" onClick={()=>removeTour(id)}> Not Interested</button>
        </div>
        </div>
    </article>   
  );
};

export default Tour;
