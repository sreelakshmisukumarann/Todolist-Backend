//here is the path to resolv request from clint
const express = require('express')

//import all controllers
const todoController = require('../Controller/todoController')

const router = new express.Router()

//here is the path to solve addtolist
router.post('/todo/add-todolist',todoController.addTodoList)

//to get all todolist
router.get('/todo/all-todo',todoController.getAllTodolist)


module.exports = router