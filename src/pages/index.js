import React from "react"
import NavBar from "../components/NavBar"
import Home from "./home"
import Contact from "./contact"
import Team from "./team"
import About from "./about"
import Timeline from "./timeline"
import HallOfFame from "./hall-of-fame"

export default function App() {
  return (
    <div>
      <NavBar />
      <Home />
      <About />
      <hr className="bg-gray-300  h-0.8" />
      <HallOfFame />
      <Timeline />
      {/* <Archive /> */}
      <Team />
      <Contact />
    </div>
  )
}
