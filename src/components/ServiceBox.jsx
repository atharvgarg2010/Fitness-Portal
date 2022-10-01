import React from 'react'

function ServiceBox(props) {
    const {h,p,i,c}=props
  return (
    <div className={`serviceBox ${c}`}>
      <img src={i} alt="" />
      <div className="contents">
        <h1>{h}</h1>
        <p>{p}</p>
        <button className="btn">Join Us Now</button>
      </div>
    </div>
  )
}

export default ServiceBox
