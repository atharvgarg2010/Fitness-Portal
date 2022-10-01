import React, { useEffect, useState } from 'react'
import "swiper/css/pagination";
import "swiper/css";
import "swiper/css/navigation";
import ScrollReveal from 'scrollreveal'

function JoinUs() {
  const se = ScrollReveal({
    "origin": "top",
    "distance": "60px",
    "duration": 2500,
    "delay": 400
  })
  useEffect(() => {
    se.reveal(`.p1`, { origin: "bottom" })
    se.reveal(`.sgs`)
    se.reveal(".aboutt", { interval: 7000 })
    se.reveal(".serviceBox", { interval: 100, origin: "bottom" })
    se.reveal(".left", { interval: 200, origin: "left" })
    se.reveal(".right", { interval: 10, origin: "right" })
    se.reveal(".top", { interval: 200, origin: "top" })
    se.reveal(".bottom", { interval: 10, origin: "bottom" })
    se.reveal(".top", { interval: 200, origin: "top" })
    se.reveal(".bottom", { interval: 10, origin: "bottom" })
  })
  const [data, setData] = useState({
    Name: "",
    Phone: 0,
    Email: "",
    package: "",
  })
  const onchange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value })
    console.log(data);
  }
  const handleSubmit = async (e) => {
    e.preventDefault()
    // try {
      // const response = await fetch('https://v1.nocodeapi.com/atharv_garg/google_sheets/KfCSCPfJCpPAQNjg',{
      //   method:"POST",
      //   headers:{
      //     "Content-Type":"application/json",
      //     "tabId":"Member"

      //   },
      //   body:JSON.stringify([
      //     data.Name,data.Email,data.Phone,data.package
      //   ])
      // })
      // const a = await response.json()
      // setData({"Phone":"","email":"","name":"","package":""})
      if (data.Email==="") {
        alert("Error: Enter A Valid Email")
      }else if(data.Phone<999999999){
        alert("Error: Enter A Valid Phone Number")

      }
      else if(data.Name===""){
        alert("Error: Enter your Name")

      }
      else if(data.package===""){
        alert("Error: Choose Your Package")

      }else{
      var myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");
      // myHeaders.append("tablId", "Member");
      var requestOptions = {
        method: "post",
        headers: myHeaders,
        redirect: "follow",
        body: JSON.stringify([[data.Name, data.Phone ,data.Email, data.package]])
      };
      const a = "Sheet1"
      fetch(`https://v1.nocodeapi.com/atharv_garg/google_sheets/KfCSCPfJCpPAQNjg?tabId=${a}`, requestOptions)
        .then(response => response.text())
        .then(result => console.log(result) ,
        alert("Your Verification And Payment QR Code Will Come On Your Whatsapp Number and Email")
        )
        .catch(error => console.log('error', error));
    }
    }
  return (
      <div className='join'>

        <div className='services'>
          <h1>
            <span>J</span>
            <span>O</span>
            <span>I</span>
            <span>N</span>
            {/* <span> </span> */}
            &nbsp;
            <span>U</span>
            <span>S</span>

          </h1>
        </div>
        <div className="dd">
          <div className="map" style={{ color: "white" }}>
            <iframe title='3W' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3500.7789672774156!2d77.12489321500979!3d28.666336182404468!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d03fe598b8c33%3A0x6b0d545f3245740f!2sUFC%20GYM%2C%20Punjabi%20Bagh!5e0!3m2!1sen!2sin!4v1664541883805!5m2!1sen!2sin" height="450" style={{ "border": "0px" }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            {/* <img src={Img} alt="" /> */}
          </div>
          <form onSubmit={handleSubmit} className="contact">
            <div className="inpp">
              <label>Name</label>
              <input onChange={onchange} type="text" name="Name" id="Name" placeholder='Name' className="inp" />
            </div>
            <div className="inpp">
              <label>Phone</label>
              <input onChange={onchange} type={"number"} name="Phone" id="Phone" placeholder='Phone' className="inp" />
            </div>
            <div className="inpp">
              <label>Email</label>
              <input onChange={onchange} type="email" name="Email" id="Email" placeholder='Email' className="inp" />
            </div>
            <div className="inpp">
              <label>Package</label>

              <select onChange={onchange} id="cars" name='package' className='inp'>
                <option value="">Chose The Pack</option>

                <option value="Normi">Normi</option>
                <option value="Supreme">Supreme</option>
                <option value="Luxury">Luxury</option>
              </select>
            </div>
            <button className="btn">Submit</button>
          </form>
        </div>
      </div>
    )
  }

  export default JoinUs

