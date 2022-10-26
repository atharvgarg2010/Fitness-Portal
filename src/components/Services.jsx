import React from 'react'
import ServiceBox from './ServiceBox'
import Service1 from "./Service1.png"
import Service3 from "./Service3.png"
function Services() {
  return (<>
  
    <div className='services'>
      <h1>
        <span>S</span>
        <span>E</span>
        <span>R</span>
        <span>V</span>
        <span>I</span>
        <span>C</span>
        <span>E</span>
        <span>S</span>
        </h1>
    </div>
    <div className="servicee">
    <ServiceBox c="bottom"  h="Best Equipment" p="You Will Find Best Equipment in our Gym. There are latest technology of best equipment." i={Service1}/>
    <ServiceBox c="top" h="Best Diet Plan" p="You Will Find Best dietitian in our Gym. We will give you diet plan according to you." i="https://images.unsplash.com/photo-1463740839922-2d3b7e426a56?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1250&q=80"/>
    <ServiceBox c="bottom" h="Best Trainers" p="You Will Find Best Trainers in our Gym. There are many trainers in the gym for your Sake." i={Service3}/>
    </div>
    </>
  )
}

export default Services
