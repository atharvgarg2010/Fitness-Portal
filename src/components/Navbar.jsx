import React from 'react'
import Logo from './Logog.png'
import "./style.css"
import {
    Link
  } from "react-router-dom";
function Navbar() {
  return (
    <div className='navbar'>
      <img src={Logo} alt="" />
      <div className="tabs">
    <Link to="/">Home</Link>
    <Link to="/about">About</Link>
    <Link to="/gallery">Gallery</Link>
    <Link to="/contact">Join Us</Link>
      </div>
    </div>
  )
}

export default Navbar
