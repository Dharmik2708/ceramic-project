import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React from 'react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger);
const BestSellary = () => {
    useGSAP(()=>{
      let tl = gsap.timeline({scrollTrigger:{
        trigger:".bestsellaery",
        scroller:"body",
       
      }})
      tl.from(" .bestsellaery .card #img1",{
        x:-700,
        duration:1,
        
      })
      

      tl.from(".bestsellaery .card #img2",{
        scale:0,
        duration:1,
        opacity:0,
      }) 


     tl.from(" .bestsellaery .card #img3",{
          x:700,
          duration:1,
        })
    })
  return (
    <div className='bestsellaery'>
      <h1>BestSellary</h1>
      <div className="container-card">
        <div className="card">
          <div className='card-img' >
           <img id="img1" src="images/card1.png" alt="card1" />
           </div>
            <h4>Moon plate</h4>
            <h3>75$</h3>
        </div>
        <div className="card">
          <div className="card-img">
           <img id="img2" src="images/card2.jpg" alt="card2" />
           </div>
            <h4>Silver set</h4>
            <h3>125 zł</h3>
        </div>
        <div  id="gsaphidden"className="card">
          <div className="card-img">
           <img id="img3" src="images/card3.jpg" alt="card3" />
           </div>
            <h4>Nordic Container</h4>
            <h3>90$</h3>
        </div>
      </div>
    </div>
  )
}

export default BestSellary
