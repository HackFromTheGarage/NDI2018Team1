const { Router } = require('express')

const router = Router()

const indexHandler = require('./routes/index.js')

router.use('/', indexHandler)

module.exports = router
