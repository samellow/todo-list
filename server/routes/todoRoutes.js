const express = require("express")
const { createTask, getTasks, updateTask, deleteTask } = require("../controllers/taskController")

const router = express.Router()

router.get('/tasks', getTasks)

router.post('/task/create', createTask)

router.put('/task/update/:id', updateTask)

router.delete('/task/delete/:id', deleteTask)

module.exports = router