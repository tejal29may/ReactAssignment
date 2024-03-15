import React from "react";
import "./static.css";
function ExerciseList({ data, setData,img,bodyPart,target ,name}) {
  return (
    <>
      

    
       
        
            <div className="singleDiv">
              <img src={img} alt="" /><br />
              <div style={{textAlign:"center"}}>
              <h2>{name}</h2>
              <p>{bodyPart}</p>
              <p>{target}</p>
              </div>
            </div>
          
 
    </>
  );
}

export default ExerciseList;
