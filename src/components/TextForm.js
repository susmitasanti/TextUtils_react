import React from 'react'
import { useState } from 'react'

export default function TextForm(props) {
    

    const [text, setText] = useState("")

    const Upper = () =>{
        let newText=text.toUpperCase()
        setText(newText)
    }

    const Lower = () => {
        let newText = text.toLowerCase()
        setText(newText)

    }

    const Clear = () => {
        let newText= "" 
        setText(newText)
    }

     // THE FOLLOWING FUNCTION ENABLES THE USER TO TYPE IN THE TEXTBOX
     const Changing = (event) =>{
        setText(event.target.value)
   
    }


  return (
    <>

<br />   
<h3 style={{color: props.currentMode==="light"?"black" : "white"}}> Enter Text to Analyze: </h3>
     <input class="form-control form-control-lg" type="text" aria-label=".form-control-lg example" value={text} onChange={Changing} />
     <button type="button" class="btn" style={{backgroundColor: props.currentMode==="light"?"#adb5bd" :"black", color: props.currentMode==="light"? "black": "white" }} onClick={Upper}>UpperCase</button>
     &nbsp;<button type="button" class="btn" style={{backgroundColor: props.currentMode==="light"?"#adb5bd" :"black", color: props.currentMode==="light"? "black": "white" }} onClick={Lower}>LowerCase</button>
     &nbsp;<button type="button" class="btn" style={{backgroundColor: props.currentMode==="light"?"#adb5bd" :"black", color: props.currentMode==="light"? "black": "white" }} onClick={Clear}>Clear</button>

    <br />
    <br />    
    <div style={{color: props.currentMode==="light"?"black" : "white"}}>
    <h2> Preview: </h2>
    <p>{text===""?"Enter Text to Preview":text}</p>
     </div>
     

    
    </>
  )
}
