import React from 'react'

const Navbar = () => {
  return (
   <div className="container">
    <div className="navbar-logo">
     <img src="https://tz47gb.yourbrand.studio/files/dynamicContent/sites/tz47gb/images/en/layout_2/ls0lj9t5/element_203/rwdMode_1/118x94/logo.webp" alt="" />
    </div>
    <div className="navbar-menu">
        <a href="/">SHOP</a>
        <a href="/">WORKSHOP</a>
        <a href="/">BLOG</a>
        <a href="/">CONTACT</a>
        <i className="fa-solid fa-cart-shopping"></i>
    </div>
   </div>
  )
}

export default Navbar
