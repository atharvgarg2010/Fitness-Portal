import React from 'react'
import { useNavigate } from 'react-router-dom';
import homeimage from './home-img.png'
function Home() {
  let Navigate = useNavigate()
  const Book = () => {
    setTimeout(() => {
      Navigate("/book")
    }, 120);
  }
  return (
    <div className="Saga">
      <h1 className='head2 sgs'>Build Your</h1>
      <h1 className='head sgs'>Perfect Body With Us</h1>
      <p className='p1 sgs'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus eveniet in, facere atque eum dolorem pariatur asperiores ea quisquam nesciunt commodi aut impedit at fuga recusandae soluta necessitatibus architecto temporibus culpa rerum voluptate reiciendis delectus. Corporis numquam dolorem illo sapiente?
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
