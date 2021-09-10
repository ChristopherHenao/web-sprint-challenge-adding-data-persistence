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

router.post('/', async (req, res, next) => {
    try {
        const newProject = await Projects.insertProject(req.body)
        res.json(newProject)
    }
    catch (error) {
        next(error)
    }
})

module.exports = router
