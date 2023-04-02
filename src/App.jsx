import React from "react"
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import './app.css';



function App() {


  return (
    <div className="app">
      <Navbar/>
      <Hero/>
      <Footer/>
      
    </div>
    
  )
}

export default App
