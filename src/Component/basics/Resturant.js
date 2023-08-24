import React, { useState } from 'react';
import './style.css';
import Menu from "./menuApi";
import  MenuCard from "./MenuCard";
import Navbar from './Navbar';

const UniqueList= [...new Set (Menu.map((curElem)=>{
  return curElem.category})),"ALL",

];
 

const Resturant = () => {
  const [menuData,setMenuData]= useState(Menu);
  const [menuList, setMenuList]=useState(UniqueList);

  const filterItem =(category)=>{
    if (category==="ALL")
    {
      setMenuData(Menu);
      return;
    }
    const updatedList = Menu.filter((curElem)=>
    {
       return curElem.category===category;
    });
    setMenuData(updatedList);

  };
  return (

   <div>
   <Navbar filterItem={filterItem} menuList={menuList}/>
      <MenuCard menuData={menuData} />
      
   </div>
  );
};

export default Resturant;
