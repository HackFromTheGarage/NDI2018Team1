const { Router } = require('express')

const generateAnswer = require('./utils/bot')

const router = Router()

router.post('/bot/sendMessage', function (req, res, next) {
    const { message } = req.body

    return res.json({
        "message": generateAnswer(message)
    })
})

router.get('/', function (req, res, next) {
    return res.json({
        "name": "ndihackfromthegarage1",
        "version": "1.0.0"
    })
})

module.exports = router
