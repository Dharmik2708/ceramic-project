import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React from "react";

const ProductImg = () => {
  useGSAP(()=>{
    let tl = gsap.timeline({scrollTrigger:{
      trigger:".container-img",
      scroller:"body",
    }})
    tl.from(".container-img .product-img .img1 ",{
      scale:0,
      duration:1,
      opacity:0,
      
    })
    tl.from(".container-img .product-img .img2 .part1",{
      y:-500,
      duration:1,
      opacity:0,
      
    })
    tl.from(".container-img .product-img .img2 .part2",{
      y:500,
      duration:1,
      opacity:0,
     
    })
  })
  return (
    <div className="container-img">
    <div className="product-img">
      <div className="img1">
        <img src="images/jug.png" alt="pro1" />
      </div>
      <div className="img2">
        <div className="part1">
          <img src="images/dish.png" alt="pro2" />
        </div>
        <div className="part2">
          <img src="images/mug.png" alt="pro3"/>
          <img className="part2-sec-img"src="images/loto.png" alt="pro4"/> 
        </div>
      </div>
    </div>
    </div>
  );
};

export default ProductImg;
