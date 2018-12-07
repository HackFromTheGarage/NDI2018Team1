const Container = require('../models').Container;
const Obj = require('../models').Obj;

module.exports = {
    create(req, res) {
        return Obj
            .create({
                nom: req.body.name,
                weight: req.body.weight,
                ContainerId: req.body.ContainerId
            })
    },
    destroy(req, res) {
        return Obj
            .findById(req.body.id)
            .then(obj => {
                if(!obj) {
                    return res.status(400).send({
                        message: 'Obj not found.',
                    });
                }
                return obj
                    .destroy()
                    .then(() => res.status(204).send())
                    .catch(error => res.status(400).send(error));
            })
            .catch(error => res.status(400).send(error));
    },
    getAll(req, res) {
        return Obj
            .findAll()
            .then(obj => res.status(400).send(obj))
            .catch(error => res.status(400).send(error))
    },
    move(req, res) {
        return Obj
            .findById(req.body.id)
            .then(obj => {
                obj.ContainerId = req.body.to;
                obj.save();
                return obj
            })
            .then(obj => res.json(obj))
    }
}