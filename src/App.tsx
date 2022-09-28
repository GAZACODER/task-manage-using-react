
import './App.css';
import { BrowserRouter, Route , Routes } from "react-router-dom";

 import Component from './component'
import { useState } from 'react';

let id=0
 
function App() {
  const [state,setState]= useState<string[]>([])
  const [header,setHeader]=useState("")
 
  const handleClick=()=>{
  setState([...state,header])

 }
  return (
    <div className='containers'>
    {state?.map((title,index)=>(
     <Component title={title} key={index} />      
      ))}
         <div style={{margin:"1rem"}}>
         <input onChange={(e)=>setHeader(e?.target?.value)} />
         <button onClick={handleClick}>+</button>
         </div>
      </div>
  );
}

export default App;
