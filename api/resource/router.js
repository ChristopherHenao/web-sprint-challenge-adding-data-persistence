const express = require('express')
const Resources = require('./model')

const router = express.Router()

router.get('/', async (req, res, next) => {
    try {
        const resources = await Resources.getResources()
        res.json(resources)
    }
    catch (error) {
        next(error)
    }
})

router.post('/', async (req, res, next) => {
    try {
        const newResource = await Resources.insertResource(req.body)
        res.json(newResource)
    }
    catch (error) {
        next(error)
    }
})

module.exports = router
