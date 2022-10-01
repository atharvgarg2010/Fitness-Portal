import React from 'react'
function PackageBox(props) {
    const {h,p1,p2,p3,p4,i,pr,c} = props
  return (
    <div className={`packageBox ${c}`}>
        <img src={i} alt="" />      
        <div className="contenntt">
            <h1>{h}</h1>
            <p>{p1}</p>
            <p>{p2}</p>
            <p>{p3}</p>
            <p>{p4}</p>
            <h3>{pr}</h3>
            <button className="btn">Join Us Now</button>
        </div>
    </div>
  )
}

export default PackageBox
