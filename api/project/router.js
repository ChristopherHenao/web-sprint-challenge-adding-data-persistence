// build your `/api/projects` router here
const express = require('express')

const router = express.Router()

router.get('/', (req, res, next) => {
    res.json('get projects is working')
})

router.post('/', (req, res, next) => {
    res.json('post projects is working')
})

module.exports = router