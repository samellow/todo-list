import React, { useState } from 'react'
import NavBar from '../../components/NavBar'
import Footer from '../../components/Footer'
import { Link, useNavigate } from 'react-router-dom'
import { MdOutlineDriveFileRenameOutline } from "react-icons/md";
import { MdOutlineMail } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import { signup } from './userSlice';
import { useDispatch } from 'react-redux'
 
const Signup = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('') 


    const handleSubmit = async (e) => {
        e.preventDefault();
    
        const actionResult = await dispatch(signup({ firstName, lastName, email, password, confirmPassword }));
        
        if (signup.fulfilled.match(actionResult)) {
         
          navigate('/tasks');
       
        }

    }
  return (
    <div>
        <NavBar></NavBar>
        <div className="wrapper">
            <form  onSubmit={handleSubmit}>
                <h1>Sign Up</h1>
                <div className="input-box">
                    <input type="text" placeholder='First Name' 
                     value={firstName}
                     onChange={(e) => setFirstName(e.target.value)}
                    />
                    <i><MdOutlineDriveFileRenameOutline /></i>

                </div>
                <div className='input-box'>
                    <input type="text" placeholder='Last Name' 
                        value={lastName}
                        onChange={(e)=> setLastName(e.target.value)}
                    />
                    <i><MdOutlineDriveFileRenameOutline /></i>

                </div>
                <div className='input-box'>
                    <input type="email" placeholder='Email' 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <i><MdOutlineMail /></i>
                </div>
                <div className='input-box'>
                    <input type="password" placeholder='Password'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <i><RiLockPasswordLine /></i>
                </div>
                <div className='input-box'>
                    <input type="password" placeholder='Confirm Password'
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                    />
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