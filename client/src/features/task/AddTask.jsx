import React, { useState } from 'react'
import { IoMdAdd } from "react-icons/io";
import DatePicker from 'react-date-picker'
import 'react-date-picker/dist/DatePicker.css';
import 'react-datePicker/dist/react-Datepicker.css';

import 'react-calendar/dist/Calendar.css';
import { useDispatch } from 'react-redux';
import { createTask } from './taskSlice';

const AddTask = () => {
  const dispatch = useDispatch()
  const [modal, setModal] = useState(false)
  const [description, setDescription] = useState('')
  const [dueDate, setDueDate] = useState(null)
  const [priority, setPriority] = useState('')
  const [category, setCategory] = useState('')
  const [notes, setNotes] = useState('')

  
  const toggleModal = () => {
    setModal(!modal)
  }



  if(modal) {
    document.body.classList.add('active-modal')
  } else {
    document.body.classList.remove('active-modal')
  }


  const handleSubmit = (e) => {
    e.preventDefault()

    dispatch(createTask({description, dueDate, priority, category, notes}))

    toggleModal()
  }

  return (
    <section className="addTask">
      <div className="add-task-header">
      <h3>Add task</h3>
      <div className="add-task-btn" id='btn' onClick={toggleModal}>
        <IoMdAdd />
      </div>

      </div>
    

      {modal && 
          <div className="modal"><div 
          onClick={toggleModal}
          className="overlay"></div>
          <div className="modal-content">
              <form onSubmit={handleSubmit}>
                  <input type="text"
                    placeholder="Task Description"
                    className='task-input' 
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    />
                    <div className="due-date">
                      <label>Due Date</label>
                      <DatePicker  
                      selected={dueDate} 
                      onChange={date => setDueDate(date)}
                      dateFormat="dd/MM/yyyy"
                      minDate={new Date()}
                      isClearable
                      showYearDropdown
                  

                      ></DatePicker>
                    </div>
                    <div className="priority">
                      <label htmlFor="">Priority</label>
                      <select 
                        value={priority}
                        onChange={(e)=> setPriority(e.target.value)}
                      >
                        <option value="">Set priority</option>
                        <option value="low">low</option>
                        <option value="medium">medium</option>
                        <option value="high">high</option>
                      </select>
                    </div>
                    <div className="category">
                      <label htmlFor="">Category</label>
                      <select 
                       value={category}
                       onChange={(e) => setCategory(e.target.value)}
                      >
                        <option value="">Set category</option>
                        <option value="work">work</option>
                        <option value="personal">personal</option>
                        <option value="other">other</option>
                      </select>
                    </div>
                  <textarea name="" id="" cols="30" rows="5"
                    placeholder="Notes(optional)" 
                    className='task-input'
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                     >

                  </textarea>
                    
                  <button className='add-task-btn' type='submit'>Add Task</button>
              </form>
          </div>
        </div>  
      }

          
    </section>
  )
}

export default AddTask