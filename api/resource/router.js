// build your `/api/resources` router here
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

router.post('/', (req, res, next) => {
    res.json('post resources is working')
})

module.exports = router