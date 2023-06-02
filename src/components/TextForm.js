import React from 'react'
import { useState } from 'react'

export default function TextForm(props) {
    

    const [text, setText] = useState("")
    const [isItalic, setItalic]= useState(false);
    const[isBold, setBold]= useState(false);

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

    const Copy = () =>{
        //select the element with the id "exampleFormControlTextarea1", must be a text box
     var textToCopy = document.getElementById("exampleFormControlTextarea1");
     //select the text in the text box
     textToCopy.select();
     //copy the text to the clipboard
     document.execCommand("copy");
    }

    const Italic = () =>{
        if(isItalic===false){
            setItalic(true);
        }
        else if(isItalic===true){
            setItalic(false);
        }    
    }

    const Bold = () =>{
        if(isBold===false){
            setBold(true);
        }
        else if(isBold===true){
            setBold(false);
        }
    }


  return (
    <>

<br />   
<h3 style={{color: props.currentMode==="light"?"black" : "white"}}> Enter Text to Analyze: </h3>
<textarea className="form-control my-2" id="exampleFormControlTextarea1" rows="8" value={text} onChange={Changing} style={{fontStyle:isItalic?"italic":"normal", fontWeight:isBold?"bold":"normal"}}></textarea>
     <br />
     <button type="button" class="btn" style={{backgroundColor: props.currentMode==="light"?"#adb5bd" :"black", color: props.currentMode==="light"? "black": "white" }} onClick={Upper}>UpperCase</button>
     &nbsp;<button type="button" class="btn" style={{backgroundColor: props.currentMode==="light"?"#adb5bd" :"black", color: props.currentMode==="light"? "black": "white" }} onClick={Lower}>LowerCase</button>
     &nbsp;<button type="button" class="btn" style={{backgroundColor: props.currentMode==="light"?"#adb5bd" :"black", color: props.currentMode==="light"? "black": "white" }} onClick={Copy}>Copy</button>
     &nbsp;<button type="button" class="btn" style={{backgroundColor: props.currentMode==="light"?"#adb5bd" :"black", color: props.currentMode==="light"? "black": "white", fontStyle:"italic" }} onClick={Italic}>Italics</button>
     &nbsp;<button type="button" class="btn" style={{backgroundColor: props.currentMode==="light"?"#adb5bd" :"black", color: props.currentMode==="light"? "black": "white", fontWeight:"bold"}} onClick={Bold}>Bold</button>
     &nbsp;<button type="button" class="btn" style={{backgroundColor: props.currentMode==="light"?"#adb5bd" :"black", color: props.currentMode==="light"? "black": "white"}} onClick={Clear}>Clear</button>
     

    <br />
    <br />   
    <h3 style={{color:props.currentMode==="light"?"black":"white"}}>Your Text Summary: </h3>
    <p style={{color:props.currentMode==="light"?"black":"white"}}>{text.split(" ").length-1} words and {text.length} characters</p>
    <div style={{color: props.currentMode==="light"?"black" : "white"}}>
    <h2> Preview: </h2>
    <p>{text===""?"Enter Text to Preview":text}</p>
     </div>
     

    
    </>
  )
}
