import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getTasks, selectAllTasks, selectTaskStatus } from './taskSlice'

const TaskList = () => {
  const dispatch = useDispatch()
  const tasks = useSelector(selectAllTasks)
  const status = useSelector(selectTaskStatus)
  
  useEffect(()=>{
    if(status === 'idle') {
      dispatch((getTasks()))
    }
  },[status, dispatch])
  
  console.log(tasks)

  return (
    <section className="task-list">
      <div className="pending-tasks">
      <h3>Pending tasks</h3>
        <div>
          {tasks && tasks.map((task) => (
            <div key={task.id} className="task">
              <p>{tasks && task.description}</p>
            </div>
          ))}
        </div>

      </div>
      <div className="completed-tasks">
        <h3>Completed tasks</h3>
      </div>
    </section>
  )
}

export default TaskList