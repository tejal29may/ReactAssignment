import React, { useState } from 'react'
import "./planner.css"
function CourseCard(props) {
    const[courseHourse,setcourseHours]=useState(props.hour)
  return (
    <div className="displayData">
          <p>{props.name}- </p>
          <p>{courseHourse}</p>
          <button onClick={()=>{
            setcourseHours(courseHourse+1)
          }}>➕</button>
          <button onClick={()=>{
            setcourseHours(courseHourse-1)
          }}>➖</button>
           <button >❌</button>
    </div>

    
  )
}

export default CourseCard