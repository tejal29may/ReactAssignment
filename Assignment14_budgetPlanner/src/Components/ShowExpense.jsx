import React, { useContext } from "react";
import { Context } from "./Context";
import "../App.css"
function ShowExpense() {
  const { expense, showExpense, setShowExpense } = useContext(Context);
  return (
    <>
      <h3>Expenses:</h3>
      {showExpense.length > 0 ? (
        <div style={{display:"flex",gap:"5%"}}>
          {
showExpense.map((ele, index, array) => {
    return (
        <div key={index} className="card">
                <h3>{ele.title}</h3>
                <h3>{ele.price}</h3>
              </div>
    )
})
          }
          
          
        </div>
      ) : (
        <h3>Add data to list</h3>
      )}
    </>
  );
}

export default ShowExpense;
