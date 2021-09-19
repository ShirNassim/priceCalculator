let jewelryService = require('../service/jewelry')

const createJewelry = async(req, res) => {

    let body = req.body
    let jewelry = await jewelryService.createJewelry(body)
    res.status(201).send(jewelry)
}

const getSimilarJewelries = async(req, res) => {
    let jewelryId = req.query.id
    let jewelries = await jewelryService.getSimilarJewelries(jewelryId)
    res.send(jewelries)
}

const calculateJewelryPrice = async(req, res) => {
    try {
        let body = req.body
        let price = 0;
        price = await jewelryService.calculateJewelryPrice(body)
        res.json({ "price": price })

    } catch (error) {
        res.send(error)
    }

}

const uploadDiamond = async(req, res) => {
    let body = req.body
    let jewelry = await jewelryService.uploadDiamond(body)
    res.status(201).send(jewelry)
}
module.exports = { createJewelry, getSimilarJewelries, calculateJewelryPrice, uploadDiamond }