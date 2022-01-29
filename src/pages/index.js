import React from "react"
import NavBar from "../components/NavBar"
import { BrowserRouter as Router } from "react-router-dom"
import Home from "./home"
import Contact from "./contact"
import Team from "./team"
import About from "./about"
import Timeline from "./timeline"
import HallOfFame from "./hall-of-fame"
import Archive from "./archive"

export default function App() {
  return (
    <Router>
      <NavBar />
      <Home />
      <About />
      <HallOfFame />
      <Timeline />
      <Archive />
      <Team />
      <Contact />
    </Router>
  )
}
