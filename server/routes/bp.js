const express = require('express')
const router = express.Router()

const Bp = require('../models/Bp')

router.route('/:id')
  .get((req, res) => {
    Bp.findById(req.params.id)
      .then(bp => res.send(bp))
      .catch(err => res.status(400).send(err))
  })
  .put((req, res) => {
    Bp.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true })
      .then(bp => res.send(bp))
      .catch(err => res.status(400).send(err))
  })
  .delete((req, res) => {
    Bp.findByIdAndRemove(req.params.id)
      .then(bps => bps.save())
      .then(
        Bp.find()
          .then(bps => res.send(bps))
      )
      .catch(err => res.status(400).send(err))
  })

router.route('/')
  .get((req, res) => {
    Bp.find()
      .then(bps => res.send(bps))
      .catch(err => res.status(400).send(err))
  })
  .post((req, res) => {
    Bp.create(req.body)
      .then(bp => res.send(bp))
      .catch(err => res.status(400).send(err))
  })

module.exports = router
