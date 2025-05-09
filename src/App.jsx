import ProgressBar from "./ProgressBar.jsx" 
import React, { useState } from "react" 
import "./App.css"

export default function App() { 
  const [progress, setProgress] = useState(0); 
  
  function handleClick() { 
    setProgress(Math.min(100, progress + 10)); 
    
  } 
  
  return ( 
    <h1> <ProgressBar progress={progress} /> 
      <button 
        className="progress-button"
        onClick={handleClick}
        style={{
          padding: `0.3em ${100 + 3*progress}px`
        }}
        >Armenta</button> 
    </h1> 
  ) 
}
