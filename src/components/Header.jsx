import React from 'react'
import "../style/components/header.scss"
import logo from "../images/Icon_logo_coin.svg"

const Header = () => {
  return (
    <div className='header'>
  
      <img src= {logo} alt="logo" />
      <nav>
        <ul className = "navigation">
          <li><a href="">Home</a></li>
          <li><a href="">About</a></li>
          <li><a href="">Shop</a></li>
          <li><a href="">Catalog</a></li>
          <li><a href="">Socials</a></li>
        </ul>
      </nav>
    </div>
  )
}

export default Header