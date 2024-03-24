import { useReducer } from "react";
import "./App.css";

function App() {
  const reducer = (state,action) => {
  switch(action.type){
    case "add":
      return {
        ProductData: state.ProductData.map((ele) => {
          if(ele.id === action.payload.id){
            return {...ele ,quantity: ele.quantity+1 }
          }else{
            return ele
         }
      }),

      
      }
      case "minus":
      return {
        ProductData: state.ProductData.map((ele) => {
          if(ele.id === action.payload.id  && ele.quantity > 0){
            return {...ele ,quantity: ele.quantity-1 }
          }else{
            return ele
         }
      }),

    }
  }

  };

  const initialstate = {
    ProductData: [
      { id: 1, name: "Product-1", quantity: 0, price: 100 },
      { id: 2, name: "Product-2", quantity: 0, price: 200 },
      { id: 3, name: "Product-3", quantity: 0, price: 300 },
    ],
  };
 
  const [state, dispatch] = useReducer(reducer, initialstate);
  let total = state.ProductData.reduce((acc ,items)=>( acc += items.price * items.quantity),0)
  return (
    <>
      <div className="main">
        <div className="left">
          <h2>Products</h2>
          {state.ProductData.map((ele, index, array) => {
            return (
              <>
                <div className="cartproduct">
                  <h3>{ele.name}</h3>
                  <h3>{ele.price}</h3>
                  <div className="button">
                    <p
                      onClick={() => {
                        dispatch({ type: "add", payload: ele });
                      }}
                    >
                      +
                    </p>
                    <p>{ele.quantity}</p>
                    <p
                      onClick={() => {
                        dispatch({ type: "minus", payload: ele });
                      }}
                    >
                      -
                    </p>
                  </div>
                </div>
              </>
            );
          })}
        </div>

        <div className="right">
          <h2>Cart</h2>
          {state.ProductData.map((ele, index, array) => {
            return (
              <>
                <div className="cartproduct">
                  <h3>{ele.name}</h3>
                  <h3>
                    {ele.price}x{ele.quantity}
                  </h3>
                </div>
              </>
            );
          })}
          <br />
          <h3>Total :{total}</h3>
        </div>
      </div>
    </>
  );
}

export default App;
