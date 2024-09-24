import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const OurStory = () => {
  useEffect(() => {
  
    gsap.to(".ourStory-dec h1", {
      scrollTrigger: {
        trigger: ".ourStory-dec h1",
        scrub: 1,
        end: "bottom top",
      },
      y: -30, 
      ease: "none",
    });
    gsap.to(".ourStory-dec p", {
      scrollTrigger: {
        trigger: ".ourStory-dec p",
        scrub: 1,
        start: "top 90%",
        end: "bottom top",
      },
      y: -50, 
      ease: "none",
    });
  }, []);

  return (
    
    <div className="story-container">
      <div className="ourStory-dec">
        <h1>Our Story</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
          elementum sapien ac sapien vestibulum posuere. Praesent congue dui nec
          lectus tincidunt elementum. Donec viverra a neque vel egestas. Ut quis
          urna orci. Nullam sollicitudin est et quam rhoncus, nec imperdiet sem
          efficitur. Etiam aliquam posuere hendrerit. Curabitur egestas sed nisl
          rhoncus finibus.
        </p>
      </div>
    </div>
  );
};

export default OurStory;
