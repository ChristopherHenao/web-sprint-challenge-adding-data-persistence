// build your `/api/tasks` router here
const express = require('express')

const router = express.Router()

router.get('/', (req, res, next) => {
    res.json('get tasks is working')
})

router.post('/', (req, res, next) => {
    res.json('post tasks is working')
})

module.exports = router