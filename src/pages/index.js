import React from "react"
import NavBar from "../components/NavBar"
import { BrowserRouter as Router } from "react-router-dom"
import Home from "./home"
import Contact from "./contact"
import Team from "./team"
import About from "./about"

export default function App() {
  return (
    <Router>
      <NavBar />
      <Home />
      <About />
      <hr className="bg-gray-300  h-0.8" />
      <Team />
      <Contact />
    </Router>
  )
}
