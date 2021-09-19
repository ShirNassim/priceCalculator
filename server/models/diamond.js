const mongoose = require('mongoose');

const diamondSchema = mongoose.Schema({

    carat: {
        type: Number,
        min: 0
    },
    weight: {
        type: Number,
        min: 0
    },
    cut: {
        type: String,
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
    photo: { type: String },
    tag: { type: String },
    price: { type: Number }

})

module.exports = mongoose.model('diamond', diamondSchema)