import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useEffect, useRef } from "react";

const NewCollection = () => {
  const headingRef = useRef(null);

  useEffect(() => {
    const h1 = headingRef.current;
    const h1Text = h1.textContent;

    const splitedText = h1Text.split("");
    let clutter = "";

    splitedText.forEach((elem) => {
      clutter += `<span>${elem}</span>`;
    });

    h1.innerHTML = clutter;

    gsap.from("h1 span", {
      x: -500,
      duration: 0.5,
      opacity: 0,
      stagger: 0.1,
      scrollTrigger: {
        trigger: "h1 span",
        scroller: "body",
        start: 50,
      },
    });
  }, []);

  useGSAP(() => {
    gsap.from(".new-collection .new-container .content p", {
      x: -500,
      duration: 1,
      scrollTrigger: {
        trigger: ".new-collection .new-container .content p",
        scroller: "body",
      },
    });
    gsap.from(".new-collection .new-container .content button", {
      scale: 0,
      opacity: 0,
      duration: 1,
      scrollTrigger: {
        trigger: ".new-collection .new-container .content button",
        scroller: "body",
      },
    });
    gsap.from(".new-collection .collectio-image .image-2 .image img ", {
      y: -200,
      duration: 1,
      scrollTrigger: {
        trigger: ".new-collection .collectio-image .image-2 .image img ",
        scroller: "body",
      },
    });
    gsap.from(".new-collection .collectio-image .image-2  #gsapimg2", {
      y: 200,
      duration: 1,
      scrollTrigger: {
        trigger: ".new-collection .collectio-image .image-2 #gsapimg2",
        scroller: "body",
      },
    });
    gsap.from(".new-collection .collectio-image .image-1 .image-sub1 img", {
      x: 200,
      duration: 1,
      opacity: 0,
      scrollTrigger: {
        trigger: ".new-collection .collectio-image .image-1 .image-sub1 img",
        scroller: "body",
      },
    });
  });

  return (
    <>
      <div className="new-collection">
        <div className="new-container">
          <div className="content">
            <h1 ref={headingRef}>New collection</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
              ipsum debitis possimus repellat blanditiis voluptatem optio
              architecto quis quae reprehenderit?
            </p>
            <button>More</button>
          </div>
          <div className="collectio-image">
            <div className="image-2">
              <div id="gsapimg1" className="image">
                <img src="images/new-coll-first-img.webp" alt="firstimg" />
              </div>
              <div id="gsapimg2" className="image">
                <img src="images/new-coll-sec-img.webp" alt="secimg" />
              </div>
            </div>
            <div className="image-1">
              <div className="image-sub1">
                <img src="images/new-coll-thard-img.webp" alt="three" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewCollection;
