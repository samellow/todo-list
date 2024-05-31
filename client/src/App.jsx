import React from 'react'
import Home from './pages/Home'
import { Routes, Route} from 'react-router-dom'
import Signup from './features/user/Signup'
import Login from './features/user/Login'
import { Toaster } from'react-hot-toast'
import Task from './pages/Task'

const App = () => {
  return (
    <div>
      <Toaster position = "bottom-right" toastOptions={{duration: 3000}}/>    <Routes>
      <Route path='/' element = {<Home></Home>}></Route>
      <Route path='/signup' element = { <Signup/> }></Route>
      <Route path='/login' element = { <Login/> }></Route>
      <Route path='/tasks' element={<Task/>}></Route>
    </Routes>
      

    </div>
  )
}

export default App