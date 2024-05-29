import React from 'react'
import todo from '../assets/todo.jpg'
const HomeContent = () => {
  return (
    <main className="home-content">
        <div className="content">
            <h2>Accompli Todo</h2>
            <p>Accompli helps you conquer your day by letting you easily add, manage, and check off your tasks. No more forgetting that appointment or scrambling to remember what needs to be done.</p>
        </div>
        <div className="home-img">
            <img src={todo} alt="to do list" />
        </div>
    </main>
  )
}

export default HomeContent