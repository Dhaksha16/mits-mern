import React from 'react'
import Header from "./components/Header";
import Home from "./Pages/Home";
import about from "./Pages/About";
import Contact from "./Pages/Contact";
import service from "./Pages/Service";
import Parent from "./components/Parent";
const App=()=>{
  return(
    <>
      <h1> Hello React</h1>
      <p> This is a simple React app </p>     
      <h1> MERN</h1>
      <h2>React js </h2>
      <Header /> 
      <Home />
      <about />
      <Contact />
      <service />
      <Parent /> 
    </>
  )
}

export default App;
