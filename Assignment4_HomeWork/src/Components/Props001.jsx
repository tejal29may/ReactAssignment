import React, { useState } from 'react'
import "./props001.css"
import ColorCardDiv from './colorCardDiv'
function Props001() {
   
    let colorInfo=
    [
        {
           bgcolor:'#FF6663',
            hexColor:"#FF6663",
            textColor:"PINK"

        },
        {
            bgcolor:"#000000",
            hexColor:"#333333",
            textColor:"GRAY"
        },
        {
            bgcolor:"#000000",
            hexColor:"#000000",
            textColor:"BLACK"
        },
        {
            bgcolor:"#38BB14",
            hexColor:"#38BB14",
            textColor:"GREEN"
        },
        {
            bgcolor:"#C90B0B",
            hexColor:"#C90B0B",
            textColor:"RED"
        },
        {
            bgcolor:"#FF8000",
            hexColor:"#FF8000",
            textColor:"ORANGE"
        },
        {
            bgcolor:"#FFF500",
            hexColor:"#FFF500",
            textColor:"YELLOW"
        },
        {
            bgcolor:"#00FFFF",
            hexColor:"#00FFFF",
            textColor:"CYAN"
        },
        {
            bgcolor:"#7E41A2",
            hexColor:"#7E41A2",
            textColor:"PURPLE"
        },
        {
            bgcolor:"#c14911",
            hexColor:"#c14911",
            textColor:"BROWN"
        }
    
        
    ]
  return (
    <>
  
    <div className='colorcards'>
  
{/* <ColorCardDiv backColor="green" hexColor="#1548" textColor="pink"/>
<ColorCardDiv backColor="green" hexColor="#0005" textColor="green"/> */}
{
    colorInfo.map((ele, index,) => {
        return <ColorCardDiv bgcolor={ele.bgcolor} hexColor={ele.hexColor} textColor={ele.textColor}/>

    })
}

    </div>
   

    </>
  )
}

export default Props001