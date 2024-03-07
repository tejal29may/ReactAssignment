import React, { useState } from "react";
import "./cart.css";
import { SlArrowUp } from "react-icons/sl";
import { SlArrowDown } from "react-icons/sl";
const Cart = ({ products, setProducts, quantity, setQuantity }) => {
  const [total, setTotal] = useState(0);
  

  function Increase(id) {
    products.map((product) => {
      if (product.id === id) {
        product.quantity += 1;
        setQuantity(quantity + 1);
        setTotal(total + product.price);
      }
      return product;
    });
    setProducts(products);
  }

  function Decrease(id) {
    let temp = [...products];
    temp.map((product) => {
      if (product.id === id) {
        product.quantity -= 1;
        setQuantity(quantity - 1);
        setTotal(total - product.price);
      }
      return product;
    });
    setProducts(temp);
  }

  function Remove(id) {
    let tempProducts = [...products]; // here we are using taking value from products array and storing in temoProducts using spred operation
    let arr = tempProducts.filter((product) => {
      if (product.id === id) {
        setTotal(total - product.quantity * product.price);
        setQuantity(quantity - product.quantity);
      }
      return product.id !== id;
    });
    setProducts(arr);
  }

  return (
    <>
      {products.length <= 0 && (
        <h3 style={{ textAlign: "center"}}>
          
          Your bag is Currently Empty
        </h3>
       
      )
      
      
      }

      {products.map((ele) => {
        return (
          <div className="mainCart" key={ele.id}>
            <div className="innerCart">
              <div className="img">
                <img src={ele.img} alt="" width={100} />
              </div>
              <div className="imgData">
                <h3>{ele.model}</h3>
                <h5>${ele.price}</h5>
                <p
                  onClick={() => {
                    Remove(ele.id);
                  }}
                >
                  Remove
                </p>
                <p>{}</p>
              </div>
            </div>

            <div className="buttons">
              <button
                onClick={() => {
                  Increase(ele.id);
                }}
              >
                <SlArrowUp />
              </button>
              <p>{ele.quantity}</p>
              <button
                onClick={() => {
                  Decrease(ele.id);
                }}
              >
                <SlArrowDown />
              </button>
            </div>
          </div>
        );
      })}

      <div>
        {" "}
        <div className="totalSum">
          <p>Total :</p>
          <p>${total}</p>
        </div>
        <div className="clear">
          <button
            onClick={() => {
              setTotal(0);
              setProducts([]);
              setQuantity(0);
            
            }}
          >
            Clear Cart
          </button>
        </div>
      </div>
    </>
  );
};

export default Cart;
