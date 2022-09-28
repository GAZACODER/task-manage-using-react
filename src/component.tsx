
import './App.css';
import { BrowserRouter, Route , Routes } from "react-router-dom";

import Home from './Screens/Home';
import Boards from './Screens/Boards/Boards';
import { useState } from 'react';

let id=0
interface IState {
  id:number;
  title:string
}
const App : React.FC<any> =({title})=> {
  const [state,setState]= useState<IState[]>([])
const [text,setText]= useState('')
  const handleSubmit= (e:any)=>{
    e.preventDefault()
    setState([...state,{title:text,id:id++}])
  }
  const handleChange = (e:any)=> setText(e.target.value)

  return (
    <div className='container'>
        {title}
      <form onSubmit={handleSubmit}>
      <input onChange={handleChange}/>
      </form>
      <div>
        {state?.map(({id,title})=>(
          <div key={id} className='card'>
            {title}
            </div>
        ))}

      </div>
    </div>
//     <BrowserRouter>
//       <div className="App">
//           <Routes>
//              <Route path="/" element={<Home />} />
//  <Route path="/boards" element={<Boards/>} />
          
          
//           </Routes>
//         </div>
//       </BrowserRouter>
  );
}

export default App;
