import React from 'react'
import NavBar from '../../components/NavBar'
import Footer from '../../components/Footer'
import { Link } from 'react-router-dom'
import { MdOutlineMail } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";


const Login = () => {
  return (
    <div>
        <NavBar></NavBar>
        <div className="wrapper wrapper-login">
            <form action="">
                <h1>Log In</h1>
                <div className='input-box'>
                    <input type="email" placeholder='Email' />
                    <i><MdOutlineMail /></i>
                </div>
                <div className='input-box'>
                    <input type="password" placeholder='Password' />
                    <i><RiLockPasswordLine /></i>
                </div>
                <button type='submit' className='btn'> Log In</button>
                <div className="register-link">
                    <p>Don't have an account
                     <Link to='/signup'>
                       Sign Up
                    </Link></p>
                </div>
            </form>
        </div>
        <Footer></Footer>
    </div>
  )
}

export default Login