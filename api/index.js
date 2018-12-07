const { Router } = require('express')

const router = Router()

router.post('/bot/sendMessage', function (req, res, next) {
    const { message } = req.body;

    return res.json({
        "message": message
    })
})

router.get('/', function (req, res, next) {
    return res.json({
        "name": "ndihackfromthegarage1",
        "version": "1.0.0"
    })
})

module.exports = router
