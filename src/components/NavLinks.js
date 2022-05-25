import React from "react"
import "../styles/global.css"

export default function NavLinks({ alignVertical }) {
  return (
    <div className={"flex" + (alignVertical && " flex-col space-y-1")}>
      <a href="/" className="navbar-link">
        Home
      </a>
      <a href="/hall-of-fame" className="navbar-link">
        Hall of Fame
      </a>
      <a href="/turingcup" className="navbar-link">
        Turing Cup
      </a>
      {/* <a href="/archive" className="navbar-link">
        Archive
      </a> */}
    </div>
  )
}
