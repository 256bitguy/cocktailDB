import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../logo.svg'
import SearchForm from "./SearchForm"
const Navbar = () => {
  return (
   <nav className='navbar'>
    <div className='nav-center'>
     <Link to='/'>
      <img src={logo} alt='cocktail db logo'
      className='logo'></img>
      </Link>
      <div style={{
        height:"100%"
      }}>
        <SearchForm/>
      </div>
      <ul className='nav-links'>
        <li>
          <Link to='/'>
            Home
          </Link>
        </li>
        <li>
          <Link to='/about'>
            About
          </Link>
        </li>
        <li>
          <Link to='/cart'>
            Cart
          </Link>
        </li>

      </ul>
    
    </div>

   </nav>
  )
}

export default Navbar
