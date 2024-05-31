import React from 'react'
import { useSelector } from 'react-redux'
import { selectAllTasks } from './taskSlice'

const TaskList = () => {
  const tasks = useSelector(selectAllTasks)
  return (
    <section className="task-list">
      <div className="pending-tasks">
      <h3>{tasks && tasks}</h3>

      </div>
      <div className="completed-tasks">
        <h3>Completed tasks</h3>
      </div>
    </section>
  )
}

export default TaskList