import React from 'react'
import './header.css'
import { Link } from 'react-router-dom'
import { FaMountainCity } from "react-icons/fa6";
function Header() {
  return (
    <div>
<header className="header">
  <div className="logo"><FaMountainCity/><h2>Motivated</h2></div>
  <nav className="nav-links">
    <ul>
      <li><Link to={'/'}>Home</Link></li>
      <li><Link to={'/price'}>Price</Link></li>
      <li><Link to={'/features'}>Features</Link></li>
    </ul>
  </nav>
  </header>

    </div>
  )
}

export default Header
