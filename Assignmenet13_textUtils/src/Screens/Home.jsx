import React from "react";
import Nav from "../Components/Nav";
import "./Home.css";
import { useReducer } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "change":
      return { text: action.payload };
    case "uppercase":
      return { text: state.text.toUpperCase() };
    case "lowercase":
      return { text: state.text.toLowerCase() };
    case "clear":
      return { text: "" };
    case "removeExtra":
      return { text: state.text.trim() };
    case "copy":
      return { text: document.execCommand("copy", state.text) };
    case "darkmode":
      return {...state,darkmode:state.darkmode}

    default:
      return "";
  }
};
function Home() {
  const initialState = {
    inputText: "",
    darkmode:false
  };

  const [state, dispatch] = useReducer(reducer, initialState);
  const countWords = () => {
    dispatch({ type: "wordCount" });
  };
  return (
    <>
      <Nav dispatch={dispatch} state={state}/>
      <div className="homeContent" style={{backgroundColor:state.darkmode?"black":"white"}}>
        <h3>TextUtis - Word Counter, Charecter Counter, Remove Extra Space</h3>
        <br />
        <h3 htmlFor="">Enter Your text here</h3>
        <textarea
          name=""
          id=""
          cols="30"
          rows="10"
          value={state.text}
          onChange={(e) => {
            dispatch({ type: "change", payload: e.target.value });
          }}
        ></textarea>
        <br />
        <div className="buttons">
          <button
            onClick={() => {
              dispatch({ type: "uppercase" });
            }}
          >
            Convert Uppercase
          </button>
          <button
            onClick={() => {
              dispatch({ type: "lowercase" });
            }}
          >
            Convert Lowercase
          </button>
          <button
            onClick={() => {
              dispatch({ type: "clear" });
            }}
          >
            Clear Text{" "}
          </button>
          <button
            onClick={() => {
              dispatch({ type: "copy" });
            }}
          >
            Copy to Clipboard
          </button>
          <button
            onClick={() => {
              dispatch({ type: "removeExtra" });
            }}
          >
            Remove Extra spaces
          </button>
        </div>
        <br />
        <br />
        <h5>Summary Of Your text</h5>
        <br />
        <p>
          Number of Words : {state.text ? state.text.split(" ").length : "0"}
        </p>
        <p>Number of charecters : {state.text ? state.text.length : "0"} </p>
        <p>Reading time : {state.text ? state.text.length * 0.008 : "0"}</p>
        <br />
        <h2>stateiew Documents</h2>
        <div className="stateiew">
          <p>{state.text}</p>
        </div>
      </div>
    </>
  );
}

export default Home;
