import React from "react";


const MenuCard=({menuData})=>{
    return(
       <>
         {
             menuData.map((currElement)=>{
                const {name,image,category,discription,id}=currElement;
                  return(
                     <div className="card-container " >
                        <div className="card">
                            <div className="card-body">
                                <span className="card-number subtle">{id}</span>
                                <span className="card-author subtle" >{category}</span>
                                <h2 className="card-title subtle">{name}</h2>
                                <p className="card-discription">{discription}
                                </p>
                                <div className="card-line"></div>
                                <div className="card-read">READ</div>
                               
                                <img src={image} alt="" className="card-media"/>
                                <div className="card-button">
                                      
                                     {/* <span className="card-tag subtle">Order Now</span> */}
                                     <button type="submit" className="card-tag">Order Now</button>
                                </div>
                            </div>
                        </div>
                   </div>
                  )
                    })
           
        }
    
    
       </>
    )
}
export default MenuCard;