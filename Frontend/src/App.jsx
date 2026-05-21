import React from 'react'
import Header from "./components/Header";
import Home from "./Pages/Home";
import about from "./Pages/About";
import Contact from "./Pages/Contact";
import service from "./Pages/Service";
import Parent from "./components/Parent";
import Counter from "./components/Counter";
import  UseEffect from "./components/hooks/UseEffect";
import Navbar from "./components/Navbar";
import { Route } from 'react-router-dom';
import Login from './auth/Login';
const App=()=>{
  return(
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} 
        <Route path="/about" element={<about />}/>
        <Route path="/contact" element={<Contact />}/>
        <Route path="/service" element={<service />}/>
        <Route path="/counter" element={<Counter />}/>
        <Route path="/useEffect" element={<UseEffect />}/>
        <Route path="/login" element={<Login />}/>    
      </Routes />
    </>
  )
}

export default App;
