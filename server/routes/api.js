const express = require('express')
const router = express.Router()

router.use('/bp', require('./bp'))

module.exports = router
