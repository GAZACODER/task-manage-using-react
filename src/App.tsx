
import './App.css';
import { BrowserRouter, Route , Routes } from "react-router-dom";

import Home from './Screens/Home';
import Boards from './Screens/Boards/Boards';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
          <Routes>
             <Route path="/" element={<Home />} />
 <Route path="/boards" element={<Boards/>} />
          
          
          </Routes>
        </div>
      </BrowserRouter>
  );
}

export default App;
