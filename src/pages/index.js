import React from "react"
import NavBar from "../components/NavBar"
import Landing from "../components/landing"
import Contact from "../components/contact"
import Team from "../components/team"
import About from "../components/about"
import Timeline from "../components/timeline"

export default function App() {
  return (
    <div>
      <NavBar />
      <Landing />
      <About />
      <Timeline />
      <Team />
      <Contact />
    </div>
  )
}
