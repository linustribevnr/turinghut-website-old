import React from "react"
import { Link } from "react-router-dom"
import "../styles/global.css"

export default function NavLinks({ alignVertical }) {
  return (
    <div className={"flex" + (alignVertical && " flex-col space-y-1")}>
      <Link to="/about" className="navbar-link">
        About
      </Link>
      <Link to="/hall-of-fame" className="navbar-link">
        Hall of Fame
      </Link>
      <Link to="/timeline" className="navbar-link">
        Timeline
      </Link>
      <Link to="/turing-cup" className="navbar-link">
        Turing Cup
      </Link>
      <Link to="/archive" className="navbar-link">
        Archive
      </Link>
      <Link to="/contact" className="navbar-link">
        Contact
      </Link>
    </div>
  )
}
