import React, { useState } from 'react'
import yoga from './boy.png'
function Bmi() {
    const [Height,setHeight] = useState()
    const [Weight,setWeight] = useState()
    const [bmi,setBmi] = useState()

    const height = Height/100
    const Bmi = Math.round(Weight / (height*height))
    const calculate = ()=>{
      if (Bmi<=18.5) {
        setBmi("Under Weight");
      }else if (Bmi< 24.9 ){
        setBmi("Normal");
      }else if (Bmi< 29.9) {
        setBmi("Over Weight ");
      }else if (30<=Bmi) {
        setBmi("Obesity");
      }
      // setBmi(Bmi)
    }
  return (

    <>
    <div className="containerflexx">
        <div className="calcu">
            <h1 className='blank'>Calculate</h1> &nbsp; <h1 style={{color:'white', display:'inline', fontSize:'50px'}}>Your BMI</h1>
            <h2 style={{color:'#acc2ff'}}>The calculator calculates your Body Mass Index (BMI) from your Height and Weight</h2>
            <h1 style={{color:'#acc2ff'}}>{bmi}</h1>
            <div className="inputs">
              <div className="height">
              <label style={{color:'#acc2ff', margin:'10px', fontSize:'20px'}}>Height (cm)</label>
              
              <input type="number" className='inp' style={{background:'#00000000', border:'2px solid #acc2ff', width:'250px', color:"white"}} placeholder='Height in cm' onChange={(event)=>{
                setHeight(event.target.value)
              }} />
              </div>
              <div className="Weight">
              <label style={{color:'#acc2ff', margin:'10px', fontSize:'20px'}}>Weight (kg)</label>
              
              <input type="number" className='inp' style={{background:'#00000000', border:'2px solid #acc2ff', width:'250px', color:'white'}} placeholder='Weight in kg' onChange={(event)=>{
                setWeight(event.target.value)
              }} />
              </div>
            </div>
              <button className="btnn" onClick={calculate}>Check Now</button>
              

        </div>
        
    </div>
    </>
  )
}

export default Bmi