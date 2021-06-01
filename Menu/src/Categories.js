import React from 'react';

const Categories = ({allCategories , filterItems}) => {
 
  // yeh manually kiya hai matlab DB mai jitni bhi categories hai un sabke liye hum manually button banana padega or agar future mai add karte hai to uske firse naya button banana padega for that reason we have to make button dyanmically means whenever a new category add in DB it will automatically shows on screen 
  
  // return (
  //   <section>
  //     <div className="categorie-navbar">
  //       <button onClick={()=>filterItems('all')}>All</button>
  //       <button onClick={()=>filterItems('breakfast')}>Breakfast</button>
  //       <button onClick={()=>filterItems('lunch')}>Lunch</button>
  //       <button onClick={()=>filterItems('shakes')}>Shakes</button>
  //     </div>
  //   </section>
  // );

  // Dynamic Approach
  return(
      <div className="categories-cntnr">
        {allCategories.map((category , index)=>{
            return(
              <button type="button" key={index}onClick={()=>{filterItems(category)}}> {category}</button>
            )
        })}
      </div>
  );

};

export default Categories;
