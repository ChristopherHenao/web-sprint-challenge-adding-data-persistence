// build your `/api/resources` router here
const express = require('express')

const router = express.Router()

router.get('/', (req, res, next) => {
    res.json('get resources is working')
})

router.post('/', (req, res, next) => {
    res.json('post resources is working')
})

module.exports = router