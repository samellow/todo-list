import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <nav className="navbar">
        <Link to='/'>
            <h2 className='logo'>Accompli</h2>
        </Link>
        <ul>
            <li>log out</li>

            <Link to='/login'>
                  <li>log in</li>
            </Link>
            
            <Link to ='/signup'>
                 <li>Sign up</li>
            </Link>
            
        </ul>
    </nav>
  )
}

export default NavBar