import React, { useState } from 'react'

export default function Player({name,symbol}) {
    const [isEditing,setIsEditing] =useState(false);
    


    const handleEditClick=()=>{
        setIsEditing(()=>!isEditing);
        console.log(isEditing)
    }

    let playerName=<span className="player-name">{name}</span>;
    // let btncaption="Edit";

    if(isEditing){
        playerName=<input type="text" required  />;
        // btncaption= "save";
    }
    
  return (
    <li>
    <span className="player">
        {playerName}
      <span className="player-symbol">{symbol}</span>
    </span>
    <button onClick={handleEditClick}>{isEditing? "save" : "Edit"}</button> 
  </li>
  )
}
