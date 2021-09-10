const express = require('express')
const Tasks = require('./model')

const router = express.Router()

router.get('/', async (req, res, next) => {
    try {
        const tasks = await Tasks.getTasks()
        res.json(tasks)
    }
    catch (error) {
        next(error)
    }
})

router.post('/', async (req, res, next) => {
    try {
        const newTask = await Tasks.insertTask(req.body)
        res.json(newTask)
    }
    catch (error) {
        next(error)
    }
})

module.exports = router
