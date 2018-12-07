const Container = require('../models').Container;
const Obj = require('../models').Object;

module.exports = {
    create(req, res) {
        return Container
            .create({
                nom: req.body.name,
                volume: req.body.volume
            })
            .then(() => res.status(200).send('Done'))
    },
    destroy(req, res) {
        return Container
            .findById(req.body.id)
            .then(container => {
                if(!container) {
                    return res.status(400).send({
                        message: 'Container not found.',
                    });
                }
                return container
                    .destroy()
                    .then(() => res.status(204).send())
                    .catch(error => res.status(400).send(error));
            })
            .catch(error => res.status(400).send(error));
    },
    getAll(req, res) {
        return Container
            .all()
            .then(containers => res.status(400).send(containers))
            .catch(error => res.status(400).send(error))
    },
    move(req, res) {
        let obj;
        Obj
            .findById(req.body.id)
            .then(o => obj = o)
        Container
            .findById(req.body.from)
            .then(container => container.setObjs(container.getObjs().filter(obj != obj)))
        return Container
            .findById(req.body.to)
            .then(container => container.addObj(obj))
    }
}