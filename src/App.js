import { Route, Routes, Link } from "react-router-dom"; 
import { About } from "./components/about";
import { Home } from "./components/Home";
import { Weather } from "./components/Weather";

import React from 'react';


export function App() {
  return (
    <>
   <nav>
  <Link to="/" style={{ marginRight: '20px' }}>About Me</Link>
  <Link to="/Home" style={{ marginLeft: '20px' }}>Home</Link>
</nav>


      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/Home" element={<Home />} />

      </Routes>
    </>
  );
}


export default App;
