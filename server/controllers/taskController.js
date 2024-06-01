const Task = require("../models/tasksModel")
const handleTaskErrors = require("../utils/handleTaskErrors")

const createTask = async(req,res)  => {
    try {
        const { description, dueDate, priority, category, notes} = req.body

        const userId = req.user._id

        const task = await Task.create({description, dueDate, priority, category, notes, user: userId})
        res.status(200).json(task)
    } catch (error) {
        const errors = handleTaskErrors(error)
        res.status(400).json({errors})
    }
}

const getTasks = async(req,res) => {
    try {
      const tasks = await Task.find()
      if(tasks.length === 0 ) {
        return res.status(200).json('No tasks yet')
      }
      res.status(200).json(tasks)
    } catch (error) {
       const errors = handleTaskErrors(error)
    }
}


const updateTask = async(req,res) => {
    try {
            const id = req.params.id
            const { description, dueDate, priority, category, notes} = req.body
            await Task.findByIdAndUpdate(id, {description, dueDate, priority, category, notes})
            const updatedTask = await Task.findById(id)
            res.status(200).json(updatedTask)
        } catch (error) {
            const errors = handleTaskErrors(error)
            res.status(400).json({errors})
        }
}

const deleteTask = async(req,res) => {
    try {
        const id = req.params.id
        const task = await Task.findByIdAndDelete(id)

        res.status(200).json('Task deleted successfully')
    } catch (error) {
        const errors = handleTaskErrors(error)
    }
}


module.exports= { 
    createTask,
    getTasks,
    updateTask,
    deleteTask
}