import React, { useState } from "react";
import "./planner.css";
import CourseCard from "./CourseCard";
function Planner() {
  const [course, setcourse] = useState([]);


  const onclickHandler = () => {
    let courseName = document.getElementById("CourseName").value;
    let courseHours = document.getElementById("CourseHours").value;
    

   

    let newData = {
      name: courseName,
      hours: parseInt(courseHours),
    };

    const data = JSON.parse(JSON.stringify(course));
    
    data.push(newData);
    console.log(newData);
    localStorage.setItem("data",newData)
    if(!courseName=="" && !courseHours==""){
      setcourse(data);
      document.getElementById("CourseName").value=""
      document.getElementById("CourseHours").value=""
    }else{
      alert("add a valid data")
    }
  
  };
  // console.log(course);

  return (
    <div>
      <div className="main_card">
        <h3>Geekster Educational Plannner</h3>
        <div className="fields">
          <input type="text" placeholder="subject" id="CourseName" />
          <input type="number" placeholder="Hours" id="CourseHours" />
          <button onClick={onclickHandler}>Add Data</button>
        </div>

        {course.map((course, index) => (
          <CourseCard name={course.name} hour={course.hours} key={index} />
        ))}
        {/* <CourseCard/> */}
      </div>
    </div>
  );
}

export default Planner;
