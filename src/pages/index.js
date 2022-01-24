import React from "react"
import NavBar from "../components/NavBar"
import { BrowserRouter as Router } from 'react-router-dom';
import Home from "./home";
import Team from "./team";

export default function App() {    
  return (
    <Router>
      <NavBar/>
      <Home/>
      <Team/>
    </Router>
  )
}
