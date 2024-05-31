import React from 'react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import TaskList from '../features/task/TaskList'
import AddTask from '../features/task/AddTask'

const Task = () => {
  return (
    <div>
        <NavBar></NavBar>
        <AddTask></AddTask>
        <TaskList/>
        <Footer></Footer>
    </div>
  )
}

export default Task