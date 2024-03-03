import React,{useState} from "react";
import "./colorCardDiv.css";

function ColorCardDiv(props) {
    const[bgcolorr,setbgcolor]=useState(props.bgcolor)
    const[color,setcolor]=useState(props.textColor)

  return (
    <div className="card">
      <div className="backColor"  style={{backgroundColor:bgcolorr}}></div>
      <div style={{paddingLeft:"20px"}}>
        <h3>{props.hexColor}</h3>
        <h3 style={{color:color}}>{props.textColor}</h3>
      </div>
    </div>
  );
}

export default ColorCardDiv;
