import React from "react";
import './Employeecard.css'

const EmployeeCard = ({ name, age, isAdded, btnType, btnAction, id }) => {

  function clickHandler() {
    btnAction(id);
  }

  return (
    <div className="employee-card-container">
      <p>{name}</p>
      <p>{age}</p>
      {btnType === "add" ? (
        isAdded === false && <button onClick={clickHandler}>{btnType}</button>
      ) : (
        <button onClick={clickHandler}>{btnType}</button>
      )}

      {/* <button>add</button> */}
    </div>
  );
};

export default EmployeeCard;