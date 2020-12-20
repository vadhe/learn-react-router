import React from "react";
import { Link } from "react-router-dom"

const Nav = () => {
    return (
      <div style={{ backgroundColor:"Red", width:"100%" }}>
        <Link to="/">Home</Link>
        <Link to="/about" style={{ marginLeft: "10px" }}>About</Link>
        <Link to="/topics" style={{ marginLeft: '10px' }}>Topics</Link>
     </div>
    )
}

export  default Nav;