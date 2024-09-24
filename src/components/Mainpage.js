import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React from 'react'





const Mainpage = () => {
    
  useGSAP(()=>{
    gsap.from(".container-box h1",{
      scale:0,
      duration:1,
      
      opacity:0,
    })
    
    gsap.from(".container-box h4",{
      x:-500,
      duration:1,
      opacity:0,
    })

    gsap.from(".container-box button",{
      y:100,
      duration:1,
      opacity:0,
    })  
  })

  return (
    
    <div className="main-container">
    <div className="main-cover">
      <div className="container-box">
        <h1>Ceramics studio</h1>
        <h4>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec orci
          massa, dapibus quis molestie sit amet, pharetra vitae dolor.
          Praesent auctor, dui id maximus sagittis, lectus enim pharetra quam,
          ut laoreet tortor metus ut ipsum.
        </h4>
        <button>Show More</button>
      </div>
    </div>
  </div>
  
  )
}

export default Mainpage
