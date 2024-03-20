import { useCallback, useState ,useRef} from "react"
import "./App.css"

function App() {
  const passwordRef = useRef(null);
  const[pass,setPass]=useState("")
  const[length,setLength]=useState(8)
  const[number,setNumber]=useState(false)
  const[Character,setCharacter]=useState(false)
  const[symbol,setSymbol]=useState(false)
  const copyToClipboard = () => {
    
    if (passwordRef.current) {
      passwordRef.current.select();
      document.execCommand("copy");
    }
  }
 const geenratePassowrd=useCallback(()=>{
  
  let charset = "";
    let newpassword = "";
    if (Character) {
      charset += "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    }
  
    if (number) {
      charset += "0123456789";
    }
    if (symbol) {
      charset += "!@#$%^&*(){}[]";
    }

    for (let i = 0; i < length; i++) {
      newpassword += charset.charAt(Math.floor(Math.random() * charset.length));
      // console.log(newpassword);
    }

    setPass(newpassword);
    console.log("pass changed");

 },[length,number,Character])



  return (
    <>
    <div className="main">
      <h3 style={{textAlign:"center"}}>Password Generator</h3>
      <div className="inputfield">
        <input type="number" placeholder="Enter length of password" value={length} onChange={(e)=>setLength(e.target.value)}/>
        <button onClick={()=>{
          geenratePassowrd()
        }}>Generate password</button>
      </div>
      <div className="checks">
        <input type="checkbox" checked={number} onChange={()=>setNumber(!number)}/>
        <label htmlFor="">Include Numbers</label><br />
        <input type="checkbox" checked={Character} onChange={()=>setCharacter(!Character)} />
        <label htmlFor="">Include Characters</label><br />
        <input type="checkbox" checked={symbol} onChange={()=>setSymbol(!symbol)} />
        <label htmlFor="">Include Symbol</label>
      </div>
      <p>Generarted password : {pass}</p>
      {pass && (
        <>
          <textarea ref={passwordRef} value={pass} readOnly />
          <button onClick={copyToClipboard}>Copy to Clipboard</button>
        </>
      )}
    </div>
    </>
  )
}

export default App
