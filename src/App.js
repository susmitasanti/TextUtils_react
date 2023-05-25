import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import { useState } from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";


function App() {
  const [mode, setMode]=useState("light")

  const modeFuncD = () => {
    setMode("dark")
   document.body.style.backgroundColor="#343a40"
  }

  const modeFuncL = () => {
    setMode("light")
    document.body.style.backgroundColor="white"
  }

  const modeFuncDG = () => {
    setMode("darkGreen")
    document.body.style.backgroundColor="#3a5a40"
  }
  return (
   <>
     <BrowserRouter>
    <Navbar currentMode={mode} changeModeD={modeFuncD} changeModeL={modeFuncL} changeModeDG={modeFuncDG}/> 

    <div className="container">
      <Routes>
      <Route exact path="/" element={<TextForm currentMode={mode} />}></Route>
      <Route exact path="/about" element={<About currentMode={mode} changeModeD={modeFuncD} changeModeL={modeFuncL} changeModeDG={modeFuncDG}/>
}></Route>

    </Routes>
    </div>

    </BrowserRouter>

   </>
  );
}

export default App;
