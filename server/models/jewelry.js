const mongoose = require('mongoose');




const jewelrySchema = mongoose.Schema({
    type: {
        type: String,
        default: "DIAMOND"
    },
    carat: {
        type: Number,
        min: 0
    },
    weight: {
        type: Number,
        min: 0
    },
    cut: {
        enum: ['Round', 'Princess', 'Marquise', 'Cushion', 'Emerald', 'Radiant', 'Pear', 'Oval', 'Asscher', 'Heart'],
    },
    color: {
        color: { type: String }

    },
    clarity: {
        type: Number,
        min: 1,
        max: 8
    },




})

module.exports = mongoose.model('jewelry', jewelrySchema)