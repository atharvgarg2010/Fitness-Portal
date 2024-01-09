import React from 'react'
import { useNavigate } from 'react-router-dom';
import homeimage from './home-img.png'
function Home() {
  let Navigate = useNavigate()

  // window.location.reload();
  const Book = () => {
    setTimeout(() => {
      Navigate("/book")
    }, 120);
  }
  return (
    <div className="Saga">
      <h1 className='head2 sgs'>Build Your</h1>
      <h1 className='head sgs'>Perfect Body With Us</h1>
      <p className='p1 sgs' width="300px">
Transform your physique and redefine your strength with our comprehensive fitness programs. Join us on the journey to build your perfect body, achieving optimal health, and unlocking your full potential.
        <br />
        <button className="btn sgs" onClick={Book}>Join Us Now</button>
        
      </p>
      {/* <div className="triangle">d</div> */}

      <div className='home'>
        <img src={homeimage} alt="" />


      </div>


    </div>
  )
}

export default Home
