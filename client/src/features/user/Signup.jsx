import React from 'react'
import NavBar from '../../components/NavBar'
import Footer from '../../components/Footer'
import { Link } from 'react-router-dom'
import { MdOutlineDriveFileRenameOutline } from "react-icons/md";
import { MdOutlineMail } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";

const Signup = () => {
  return (
    <div>
        <NavBar></NavBar>
        <div className="wrapper">
            <form action="">
                <h1>Sign Up</h1>
                <div className="input-box">
                    <input type="text" placeholder='First Name'/>
                    <i><MdOutlineDriveFileRenameOutline /></i>
                </div>
                <div className='input-box'>
                    <input type="text" placeholder='Last Name' />
                    <i><MdOutlineDriveFileRenameOutline /></i>

                </div>
                <div className='input-box'>
                    <input type="email" placeholder='Email' />
                    <i><MdOutlineMail /></i>
                </div>
                <div className='input-box'>
                    <input type="password" placeholder='Password' />
                    <i><RiLockPasswordLine /></i>
                </div>
                <div className='input-box'>
                    <input type="password" placeholder='Confirm Password' />
                    <i><RiLockPasswordLine /></i>

                </div>

                <button type='submit' className='btn'> Sign Up</button>
                <div className="register-link">
                    <p>Already have an account?
                     <Link to='/login'>
                       Login
                    </Link></p>
                </div>
            </form>
        </div>
        <Footer></Footer>
    </div>
  )
}

export default Signup