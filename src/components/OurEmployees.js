import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React from "react";

const OurEmployees = () => {
  useGSAP(()=>{
    let tl = gsap.timeline({scrollTrigger:{
      trigger:".Our-employee",
      scroller:"body",
    }})
    tl.from(".Our-employee h1",{
      scale:0,
      duration:1,
      
    })
  })
  return (
    <div className="Our-employee">
        <h1>Our employees</h1>
        <div className="our-employee-detail">
      <div className="employee">
        <img src="images/our-emp-1.webp" alt="mary" />
        <h4>Mary Smith</h4>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
          elementum sapien ac sapien vestibulum posuere. Praesent congue dui nec
          lectus tincidunt elementum.
        </p>
      </div>
      <div className="employee">
        <img src="images/our-emp-2.webp" alt="jeams" />
        <h4>James Jones</h4>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
          elementum sapien ac sapien vestibulum posuere. Praesent congue dui nec
          lectus tincidunt elementum.
        </p>
      </div>
      <div className="employee">
        <img src="images/our-emp-3.webp" alt="Emily" />
        <h4>Emily Murphy</h4>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
          elementum sapien ac sapien vestibulum posuere. Praesent congue dui nec
          lectus tincidunt elementum.
        </p>
      </div>
      </div>
    </div>
  );
};

export default OurEmployees;
