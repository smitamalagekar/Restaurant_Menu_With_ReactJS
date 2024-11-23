import React from "react";
import { useState } from "react";
import MenuCard from "./MenuCard";
import Menu from './MenuApi';
import "./Style.css";
import Button from "./Button";

const UniqueList=[...new Set(Menu.map((currElement)=>{
    return currElement.category;
})
),
"All"
]



const Restaurant=()=>{
    const [menuData,setmenuData]=useState(Menu);
    const [menuList,setmenuList]=useState(UniqueList);


    const filterItem=(category)=>{
        if (category==="All") {
           return setmenuData(Menu)
        }

         const updateItem=Menu.filter((currElement)=>{
               return currElement.category===category;
               
         });
         setmenuData(updateItem);
        
    };
 
   
    
    
   return(
     <>
     
        <Button filterItem={filterItem} menuList={menuList}/> 
        <MenuCard menuData={menuData}/>
     </>
   )
}
export default Restaurant;