import React from "react"
import NavBar from "../components/NavBar"
import { BrowserRouter as Router } from 'react-router-dom';

export default function Home() {
  return (
    <Router>
      <NavBar/>
    </Router>
  )
}
