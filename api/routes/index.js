const { Router } = require('express')

const router = Router()

/* GET users listing. */
router.get('/', function (req, res, next) {
    return res.json({
        "name": "ndihackfromthegarage1",
        "version": "1.0.0"
    })
})

module.exports = router
