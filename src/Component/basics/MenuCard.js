import React from 'react'

const MenuCard = ({menuData}) => {
   
  return (
    <>
    <section className="main-card--cointainer">
    { menuData.map((curElem)=>{
      const {id,image,Name,category,description}= curElem;
      return(
        
      <>
      
        <div className='card-container' key={id}>
        <div className='card'>
            <div className='card-body'>
                <span className='card-number card-circle subtle'>{id}</span>
                <span className='card-author subtle'> {category}</span>
                <h1 classnName='card-title'>{Name}</h1>
                <span className='card-description subtle'>
                    Lorem ipsum dolor sit amet consectetur, 
                    adipisicing elit. Aperiam, quam voluptates animi ad assumenda incidunt?
                </span>
                <div className='card-read'> Read</div>
            </div>
            <img src={image} alt="images" className='card-media' />
        </div>
     
    </div>
   
    </>
    ); })}
     </section>
</>
       
  );
};

export default MenuCard;