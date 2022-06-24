import React from "react"
import Roadmap from "../components/roadmap"
import NavBar from "../components/NavBar"
import AboutTuringCup from "../components/AboutTuringCup"
import AwardsInfo from "../components/AwardsInfo"
export default function App() {
  return (
    <div>
      <NavBar/>
      <AboutTuringCup/>
      <Roadmap/>
      <AwardsInfo/>
    </div>
  )
}
