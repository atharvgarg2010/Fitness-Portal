import React from 'react'
import { Link } from 'react-router-dom'

function ServiceBox(props) {
    const {h,p,i,c}=props
  return (
    <div className={`serviceBox ${c}`}>
      <img src={i} alt="" />
      <div className="contents">
        <h1>{h}</h1>
        <p>{p}</p>
        <br/>
        <Link to={"/contact"} className="btn">Join Us Now</Link>
      </div>
    </div>
  )
}

export default ServiceBox
