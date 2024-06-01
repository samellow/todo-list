const express = require("express")
const { createTask, getTasks, updateTask, deleteTask } = require("../controllers/taskController")
const { requireAuth } = require("../middleware/authMiddleware")

const router = express.Router()

router.get('/tasks',requireAuth, getTasks)

router.post('/task/create',requireAuth, createTask)

router.put('/task/update/:id',requireAuth, updateTask)

router.delete('/task/delete/:id',requireAuth, deleteTask)

module.exports = router