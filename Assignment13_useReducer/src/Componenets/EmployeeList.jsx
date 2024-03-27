import React from "react";
import "../App.css";
function EmployeeList({ state, dispatch }) {
  function addTeamMem(id){
    dispatch({type:"ADD_MEMBER", payload:id})
  }
  // console.log(state);
  return (
    <>
      <div className="emp">
        <p>
          {state.first_name} {state.last_name}
        </p>
        <p>{state.age}</p>
        <button onClick={()=>{
         addTeamMem(state)
        }}>add</button>
      </div>
    </>
  );
}

export default EmployeeList;
