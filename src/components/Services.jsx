import React from 'react'
import ServiceBox from './ServiceBox'
import Service1 from "./crikcet.png"
import Service3 from "./Football.png"
import Service2 from "./badminton.png"

function Services() {
  return (<>
  
    <div className='services'>
      <h1>
        <span>S</span>
        <span>P</span>
        <span>O</span>
        <span>R</span>
        <span>T</span>
        <span>S</span>
        &nbsp;        &nbsp;
        &nbsp;

        <span>T</span>
        <span>I</span>
        <span>P</span>
        <span>S</span>

        </h1>
    </div>
    <div className="servicee">
    <ServiceBox c="bottom"  h="Cricket" p="Always start with a thorough warm-up to prevent injuries. Keep your eyes on the ball and your weight evenly distributed. Focus on accuracy over sheer speed. Work on accurate throwing techniques." i={Service1}/>
    <ServiceBox c="top" h="Badminton" p="Focus on quick and precise foot movements to navigate the court efficiently. Develop a strong foundation by honing basic strokes like the clear, drop shot, smash, and net shot. " i={Service2}/>
    <ServiceBox c="bottom" h="Best Trainers" p="Regular practice is crucial for improvement. Work on your endurance, strength, and technique consistently. Focus on mastering fundamental skills such as passing, dribbling, and shooting." i={Service3}/>
    </div>
    </>
  )
}

export default Services
