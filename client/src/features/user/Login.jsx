import React, { useState } from 'react'
import NavBar from '../../components/NavBar'
import Footer from '../../components/Footer'
import { Link, useNavigate } from 'react-router-dom'
import { MdOutlineMail } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import { login } from './userSlice';
import { useDispatch } from 'react-redux';


const Login = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const[email, setEmail] = useState('')
    const[password, setPassword] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        const actionResult = await dispatch(login({email, password }));
        
        if (login.fulfilled.match(actionResult)) {
         
          navigate('/tasks');
       
        }

    }
  return (
    <div>
        <NavBar></NavBar>
        <div className="wrapper wrapper-login">
            <form onSubmit={handleSubmit}>
                <h1>Log In</h1>
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