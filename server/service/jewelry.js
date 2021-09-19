let data_access = require('../data_access/crud')
let Diamond = require('../models/diamond')
let Jewelry = require('../models/jewelry')

const createJewelry = (jewelry) => {
    return new Promise(async(resolve, reject) => {
        try {
            let savedJewelry = await data_access.createObject(Jewelry, jewelry)
            if (savedJewelry)
                return resolve(savedJewelry)
        } catch (error) {
            reject(error)
        }

    })
}
const getSimilarJewelries = (id) => {
    return new Promise(async(resolve, reject) => {
        let similarJewelries = []
        try {
            let jewelry = await data_access.getJewelry(Diamond, id)
            if (jewelry) {

                similarJewelries = await data_access.getSimilarJewelries(Diamond, jewelry, id)
                return resolve(similarJewelries)
            }

        } catch (error) {
            reject(error)
        }

    })
}



const calculateJewelryPrice = async(jewelry) => {

    const type = jewelry.type;
    let finalPrice = 0;
    try {
        switch (type) {
            case 'DIAMOND':
                finalPrice = await diamondPriceAndTagCalculation(jewelry)
                return (finalPrice)
            default:
                return (`Sorry, we are out of ${type}.`);
        }


    } catch (error) {
        return (error)
    }



}


const diamondPriceAndTagCalculation = (diamond) => {
    return new Promise((resolve, reject) => {

        let { carat, weight, clarity, cut, color } = diamond
        console.log(carat, weight, clarity, cut, color)
        let tag = `${cut}`
        let caratPrice = {
            amount: 1,
            price: 1000
        }
        let weightPrice = {
            amount: 1,
            price: 500
        }
        let clarityPrice = {
            level: 1,
            price: 1500
        }

        let calculatedCutPrice = 0;
        let calculatedColorPrice = 0;
        let calculatedClarityPrice = 0;

        let price = 0;
        switch (cut) {
            case "Round":
            case "Marquise":
            case "Emerald":
                calculatedShapePrice = 50
                break;
            case "Cushion":
                calculatedShapePrice = 70
                break;
            case "Princess":
            case "Radiant":
            case "Oval":
            case "Asscher":
                calculatedShapePrice = 100
                break;
            case "Pear":
            case "Heart":

                calculatedShapePrice = 150
                break;
            default:
                reject('sorry, shape is not recognize, try again')

        }
        switch (clarity) {
            case "FL":
                calculatedClarityPrice = 1500
                break;
            case "IF":
                calculatedClarityPrice += 3000
                break;
            case "VVS1":
            case "VVS2":
                calculatedClarityPrice += 4500
                console.log(calculatedClarityPrice);
                break;
            case "VS1":
            case "VS2":
                calculatedClarityPrice += 6000
                break;
            case "SI1":
                calculatedClarityPrice += 7500
                break;
            default:
                reject('sorry, clarity level is not recognize, try again')
        }

        switch (color) {
            case "D":
            case "E":
            case "F":
                calculatedColorPrice = 0
                tag += "DEF"
                break;
            case "G":
            case "H":
            case "I":
                calculatedColorPrice = 100
                tag += "GHI"
                break;
            case "J":
            case "K":
                calculatedColorPrice = 150
                tag += "JK"
                break;
            default:
                reject('sorry, color is not recognize, try again')
        }

        let calculatedCaratPrice = carat * caratPrice.amount * caratPrice.price
        let calculatedweightPrice = weight * weightPrice.amount * weightPrice.price
        price = calculatedCaratPrice + calculatedweightPrice + calculatedCutPrice + calculatedColorPrice + calculatedClarityPrice
        console.log("price", price)
        resolve({ price, tag })
    })
}

const uploadDiamond = (diamond) => {
    return new Promise(async(resolve, reject) => {
        try {
            let { tag, price } = diamondPriceAndTagCalculation(diamond)
            let savedDiamond = await data_access.createObject(Diamond, {...diamond, price, tag, })
            if (savedDiamond)
                return resolve(savedDiamond)
        } catch (error) {
            reject(error)
        }

    })
}


module.exports = { createJewelry, getSimilarJewelries, calculateJewelryPrice, uploadDiamond }