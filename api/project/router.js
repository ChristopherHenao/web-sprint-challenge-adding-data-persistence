// build your `/api/projects` router here
const express = require('express')
const Projects = require('./model')

const router = express.Router()

router.get('/', async (req, res, next) => {
    try {
        const projects = await Projects.getProjects()
        res.json(projects)
    }
    catch (error) {
        next(error)
    }
})

router.post('/', (req, res, next) => {
    res.json('post projects is working')
})

module.exports = router