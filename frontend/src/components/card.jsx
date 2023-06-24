import React from "react";
import "./card.css";

 export const Card=({image})=>{
    return (
        <div className="card">
            <img src={image} alt="" style={{height:"80%",width:"80%",top:"20px"}}/>
        </div>
    )
};