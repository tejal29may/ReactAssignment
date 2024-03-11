import React, { useEffect, useState } from "react";
import "./Grosary.css";
import Item from "./Item";
function Grosary() {

    const[items,setItems]=useState([])
    const[inputValue,setInputValue]=useState("")

    // useEffect(()=>{
    //   let result=localStorage.getItem("Groceryitems")
    //   if(result){
    //        setItems(result)
    //   }
    // })

    const addItems=()=>{
       
        const newData={
            Gitem:inputValue
        }

        const newDataUpdate=[...items,newData]
        setItems(newDataUpdate)
        localStorage.setItem("Groceryitems",JSON.stringify(newDataUpdate))
      
        console.log(newDataUpdate);
        setInputValue("")
    }
    // console.log(items);

  return (
    <>
      <div className="mainDiv">
        <h2>Grocery Bud</h2>
        <div className="input">
          <input type="text" className="groceryItem" value={inputValue} onChange={(e)=>{
                 setInputValue(e.target.value)
          }}/>
          &nbsp;&nbsp;
          <button onClick={addItems}>Add Item</button>
        </div>
        {
            items.map((ele, index, array) =>
            <Item name={ele.Gitem} inputValue={inputValue} key={index} items={items} idx={index} setItems={setItems}/>
            )
        }
       
      </div>
    </>
  );
}

export default Grosary;
