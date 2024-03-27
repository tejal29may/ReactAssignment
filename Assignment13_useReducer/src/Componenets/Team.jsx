import React from 'react'

function Team({state,dispatch}) {

    const remove = (data)=>{
        dispatch({
          type: "REM_MEMBER",
          payload: data
        })
      }
    // console.log("state",state);
  return (
    <>
  <div className="emp">
        <p>
          {state.first_name} {state.last_name}
        </p>
        <p>teja</p>
        <button  onClick={()=>remove(items)}>Remove</button>
      </div>
    </>
  )
}

export default Team