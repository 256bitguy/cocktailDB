import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../logo.svg'
import { FaCartPlus } from "react-icons/fa";
import SearchForm from "./SearchForm"
import { useSelector } from 'react-redux';

const Navbar = () => {
  const cartItems = useSelector((state) => state.cartState.cartItems);

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
        <li className='nav-item'>
              <Link to = "/cart" className='nav-link text-uppercase text-white fs-22 fw-6 ls-1'><FaCartPlus /> <span>{cartItems.length}</span></Link>
            </li>

      </ul>
    
    </div>

   </nav>
  )
}

export default Navbar
