import React from 'react'
import {Link} from "react-router-dom";


export default function Navbar(props) {
  return (
    <>
    <nav className={`navbar navbar-expand-lg`} style={{backgroundColor: props.currentMode==="light" ? "#adb5bd" : "black"}}>
  <div className="container-fluid">
    <Link className="navbar-brand" to="/" style={{color: props.currentMode==="light" ? "black" : "white"}}>TextUtils</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        <Link className="nav-link active" aria-current="page" to="/" style={{color: props.currentMode==="light" ? "black" : "white"}}>Home</Link>
        <Link className="nav-link" to="/about" style={{color: props.currentMode==="light" ? "black" : "white"}}>About</Link>
        <button type="button" class="btn" style={{backgroundColor: "#343a40", color:"white"}} onClick={props.changeModeD}>Dark</button>
        &nbsp; <button type="button" class="btn" style={{backgroundColor:"white"}} onClick={props.changeModeL}>Light</button>
        &nbsp; <button type="button" class="btn" style={{backgroundColor:"#3a5a40", color: "white"}} onClick={props.changeModeDG}>Dark Green</button>



      </div>
    </div>
  </div>
</nav>
    </>
      )
}
