const express = require('express')

const MovieCtrl = require('../controllers/movie-ctrl')

const router = express.Router()

router.post('/tv', MovieCtrl.createTV)

router.delete('/tv/:id', MovieCtrl.deleteTV)
router.get('/tv/:id', MovieCtrl.getTVById)
router.get('/tvs', MovieCtrl.getTV)

module.exports = router
