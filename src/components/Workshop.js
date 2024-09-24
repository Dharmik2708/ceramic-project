import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React from "react";

const Workshop = () => {
  useGSAP(()=>{
    gsap.from(".workshop .workshop-img",{
      scale:0,
      duration:1,
      opacity:0,
      scrollTrigger:{
        trigger:".workshop .workshop-img",
        scroller:"body",
      }
    })
    gsap.from(".workshop-dec h1",{
      y:-300,
      duration:1,
      opacity:0,
      
      scrollTrigger:{
        trigger:".workshop-dec h1",
        scroller:"body",
      }
    })
    gsap.from(".workshop-dec p",{
      x:300,
      duration:1,
      opacity:0,
      scrollTrigger:{
        trigger:".workshop-dec p",
        scroller:"body",
      }
    })
    gsap.from(".workshop-dec button",{
      scale:0,
      duration:1,
      opacity:0,
      
      scrollTrigger:{
        trigger:".workshop-dec buttton",
        scroller:"body",
      }
    })
  })
  return (
    <div className="workshop">
      <div className="workshop-img">
        <img src="images/Workshop_img.webp" alt="workshop" />
      </div>
      <div className="workshop-dec">
        <h1>Workshops</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
          elementum sapien ac sapien vestibulum posuere. Praesent congue dui nec
          lectus tincidunt elementum. Donec viverra a neque vel egestas. Ut quis
          urna orci. Nullam sollicitudin est et quam rhoncus, nec imperdiet sem
          efficitur. Etiam aliquam posuere hendrerit. Curabitur egestas sed nisl
          rhoncus finibus.
        </p>
        <button>Subscribe</button>
      </div>
    </div>
  );
};

export default Workshop;
