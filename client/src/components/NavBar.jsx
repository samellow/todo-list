import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { logout, selectUser } from '../features/user/userSlice'

const NavBar = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const user = useSelector(selectUser)
  
const handleLogOut = () => {
  dispatch(logout())
  navigate('/')

}


  return (
    <nav className="navbar">

        <Link to='/'>
            <h2 className='logo'>Accompli</h2>
        </Link>
        {user&& <p className='greetings'>Welcome <span> {user.firstName.toUpperCase()}</span> </p>}
        <ul>
          {user && <li onClick={handleLogOut}>log out</li>}
          
          
            <Link to='/login'>
            {!user &&  <li>log in</li>}
            </Link>
            
            <Link to ='/signup'>
              {!user &&  <li>Sign up</li>}   
            </Link>
            
        </ul>
    </nav>
  )
}

export default NavBar