import React from 'react'
import Logo from './logo.png'
// import { useNavigate } from 'react-router-dom';
import {Link} from 'react-router-dom'

function Footer() {

  return (
    <div className='dd2'>
    <footer className='footer'>
      <div className="box1">
        <img src={Logo} alt="" />
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, voluptatum natus ex et harum expedita veritatis ea consectetur, delectus perferendis aliquid nam, quos dolorem similique repudiandae quia accusamus facilis iure?</p>
      </div>
      {/* <div className=""> */}
      <div >
      <Link to={"/"}><button className='btn' >Home</button></Link>
      <br />
      <Link to={"/about"}><button className='btn' >About</button></Link>
      <br />

      <Link to={"/gallery"}><button className='btn' >Gallery</button></Link>
      <br />

      <Link to={"/contact"}><button className='btn' >Join Us</button></Link>
      {/* </div> */}
      </div>

    </footer>
<h1>All Rights Reserved By The Fitness Factory</h1>

    </div>
  )
}

export default Footer
