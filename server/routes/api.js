const express = require('express')
const router = express.Router()

const jewelryController = require('../controller/jewelry')

router.post('/jewelry', jewelryController.createJewelry)

router.get('/similarJewelries', jewelryController.getSimilarJewelries)

router.post('/calculatePrice', jewelryController.calculateJewelryPrice)

router.post('/diamond', jewelryController.uploadDiamond)

module.exports = router