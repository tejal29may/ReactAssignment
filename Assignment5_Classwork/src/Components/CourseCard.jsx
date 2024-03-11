import React, { useState } from "react";
import "./planner.css";
function CourseCard({ name, course, setcourse, hours }) {
  console.log();
  const remove=(id)=>{
    let newListTodo = [...course];
    newListTodo.splice(id,1)
    setcourse([...newListTodo])
   
    // setcourse(newListTodo);
    console.log(setcourse);
  }
  return course.map((value, index) => {
    return (
      <div className="displayData" key={index}>
        <p>{value.name}- </p>
        <p>{value.hours}</p>
        <button
          onClick={() => {
            setcourseHours(value.courseHourse + 1);
          }}
        >
          ➕
        </button>
        <button
          onClick={() => {
            setcourseHours(value.courseHourse - 1);
          }}
        >
          ➖
        </button>
        <button onClick={() => {
          remove(index)
        }}>❌</button>
      </div>
    );
  });
}

export default CourseCard;
