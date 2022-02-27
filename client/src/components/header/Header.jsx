import React from 'react'
import "./header.css";
import dragon from '../../assets/images/dragon.png'
const Header = () => {
  return (
    <div className="header">
    <div className="headerTitles">
      <img className='headerDragon' src={dragon} alt="">
      </img>
      <span className="headerTitleSm">Stone Devil Team</span>
      <span className="headerTitleLg">React Blog</span>
    </div>
    <img
      className="headerImg"
      src="https://images.pexels.com/photos/459225/pexels-photo-459225.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
      alt="404 not found"
    />
  </div>
  )
}

export default Header