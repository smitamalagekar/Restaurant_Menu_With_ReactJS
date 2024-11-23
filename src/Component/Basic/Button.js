import React from "react";

const Button=({filterItem,menuList})=>{
    return(
        <>
        <nav className="navbar">
          <div className="btn-group">
            {
                menuList.map((currElement,index)=>{
                   return (<button key={index} className="btn-group-item" onClick={()=>filterItem(currElement)}>{currElement}</button>)
                })
            }
          </div>
          
         </nav>
        </>
    )
}
export default Button;

{/* <button className="btn-group-item" onClick={()=>filterItem(currElement)}>{currElement}</button> */}