import React, { useState } from "react";
import "./Item.css";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// https://the-trivia-api.com/v2/questions quiz api

function Item({ name, inputvalue, items, idx, setItems }) {
  const [line, setline] = useState(false);

  
  const deleteHandler = (id) => {
   
    const data = [...items];
    data.splice(idx, 1);
    setItems(data);
    localStorage.setItem("Groceryitems", JSON.stringify(data));
   
    toast.error("Item Deleted successfully!");
    
    
  };

  return (
    <>
      <div className="main_Container">
        <div className="left">
          <input
            type="checkbox"
            onChange={() => {
              setline(true);
            }}
          />
          <p style={{ textDecoration: line ? "line-through" : "none" }}>
            {name}
          </p>
        </div>
        <div className="right">
          <button
            onClick={() => {
              deleteHandler()
           
            }}
          >
            Delete
          </button>
        </div>
        
      </div>
    </>
  );
}

export default Item;
