import React from 'react';

const Menu = ({items}) => {
  return (
    <article>
      {items.map((item)=>{
        const{id , title , img , price , desc} = item;
        return <div className="single-item" key={id}>
                <div className="first">
                  <img src={img} alt="" />
                </div>

                <div className="second">
                  <div className ="nameAndPrice">
                    <div className="name">{title}</div>
                    <div className="price">${price}</div>
                  </div>        

                  <div className="third">
                    <p>{desc}</p>
                  </div>
                </div>
              </div>
      })}
      
    </article>
  );
};

export default Menu;
