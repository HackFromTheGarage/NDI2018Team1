const { Router } = require('express')
const containerController = require('../controllers').container;
const objController = require('../controllers').obj;

const router = Router()

router.post('/bot/sendMessage', function (req, res, next) {
    const { message } = req.body;

    return res.json({
        "message": message
    })
})

router.post('/container/create', containerController.create)

router.post('/container/destroy', containerController.destroy)

router.get('/container/getAll', containerController.getAll)

router.post('/object/create', objController.create)

router.post('/object/destroy', objController.destroy)

router.get('/object/getAll', objController.getAll)

router.post('/object/move', objController.move)

router.get('/', function (req, res, next) {
    return res.json({
        "name": "ndihackfromthegarage1",
        "version": "1.0.0"
    })
})

module.exports = router
