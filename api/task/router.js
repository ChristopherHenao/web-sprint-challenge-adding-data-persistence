// build your `/api/tasks` router here
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

router.post('/', (req, res, next) => {
    res.json('post tasks is working')
})

module.exports = router