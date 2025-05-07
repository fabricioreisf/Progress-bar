import ProgressBar from "./ProgressBar.jsx" 
import React, { useState } from "react" 

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
        ></button> 
    </h1> 
  ) 
}
