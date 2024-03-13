import React, { useEffect, useState } from "react";
import "./Grosary.css";
import Item from "./Item";


// import Snackbar from '@mui/material/Snackbar';
// import Alert from '@mui/material/Alert';

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Grosary() {
  const [items, setItems] = useState([]);
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    let result = localStorage.getItem("Groceryitems");
    if (result) {
      setItems(JSON.parse(result));
    }
  }, []);

  
  const addItem = () => {
    if (inputValue.trim() === "") {
      toast.error('Please enter a valid item.');
      return;
    }else{
      const newData = {
        Gitem: inputValue,
      };
  
      const newDataUpdate = [...items, newData];
      setItems(newDataUpdate);
      localStorage.setItem("Groceryitems", JSON.stringify(newDataUpdate));
      setInputValue("");
      toast.success('Item added successfully.');
    }

  };
  
  return (
    <>
      <div className="mainDiv">
        <br />
        <h2>Grocery Bud</h2>
        <div className="input">
          <input
            type="text"
            className="groceryItem"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          &nbsp;&nbsp;
          <button
            onClick={addItem}
          >
            Add Item
          </button>
        
        </div>
        {items.map((ele, index) => (
          <Item
            name={ele.Gitem}
            key={index}
            items={items}
            idx={index}
            setItems={setItems}
          />
        ))}
      </div>
      <ToastContainer
        position="top-center"
        
      />
    </>
  );
}

export default Grosary;
