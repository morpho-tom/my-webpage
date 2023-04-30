// import React, { useState, useEffect} from "react";
import React from "react";
import {BrowserRouter as Router} from "react-router-dom"
// import Preloader from "./Components/Pre.js"
import "./style.css";
import "./App.css"
import Navbar from "./Components/Navbar/Navbar.jsx";
import Home from "./Components/Home/Home";

function App() {
  // const [load, updateLoad] = useState(true);

  // useEffect(()=>{
  //   const timer = setTimeout(()=>{
  //     updateLoad(false); 
  //   },1200); 
  // },[]);

  return (
    <div className="App">
      <Router>
        {/* <Preloader load={load}/> */}
        <Navbar/>
        <Home/>
      </Router>
    </div>
  );
}

export default App;
