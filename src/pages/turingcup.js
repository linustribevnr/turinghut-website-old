import React from "react"
import Roadmap from "../components/roadmap"
import NavBar from "../components/NavBar"
import AboutTuringCup from "../components/AboutTuringCup"
export default function App() {
  return (
    <div>
      <NavBar/>
      <AboutTuringCup/>
      <Roadmap/>
    </div>
  )
}
