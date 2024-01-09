import React from 'react'
import Logo from './logo.png'
import "./style.css"
import { useState } from "react";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import {
    Link
  } from "react-router-dom";
function Navbar() {
  const [isAuth, setIsAuth] = useState(localStorage.getItem("isAuth"));

  const signUserOut = () => {
    signOut(auth).then(() => {
      localStorage.clear();
      setIsAuth(false);
      window.location.pathname = "/login";
    });
  };
  return (
    <div className='navbar'>
      <img src={Logo} alt="" />
      <div className="tabs">
      <a href="/">Home</a>
    <Link to="/about">About</Link>
    <Link to="/gallery">Gallery</Link>
    <Link to="/bmi"> BMI </Link>
    {/* <Link to="/Review"> Review </Link> */}

    {!isAuth ? (
          <Link to="/Login"> Login </Link>
        ) : (
          <>
            <Link to="/createpost"> Create Post </Link>
            {/* <Link to="/Review"> Write Review </Link> */}


            <button className='link' onClick={signUserOut}>Log Out</button>
          </>
          
        )}
      </div>
    </div>
  )
}

export default Navbar
