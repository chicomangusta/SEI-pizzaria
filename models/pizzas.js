const mongoose = require('mongoose');


// CREATE SCHEMA
const pizzaSchema = new mongoose.Schema({
    brook: Boolean,
    hand: Boolean,
    crunch: Boolean,
    small: Boolean,
    medium: Boolean,
    large: Boolean,
    xl: Boolean,
    pepperoni: Boolean,
    bacon: Boolean,
    beef: Boolean,
    salami: Boolean,
    chicken: Boolean,
    Olives: Boolean,
    onions: Boolean,
    tomatos: Boolean,
    jalapenos: Boolean,
    delivery: Boolean,
}, {timestamps: true });

// CREATE MODEL FROM OUR SCHEMA
const Pizza = mongoose.model('Pizza', pizzaSchema);

// EXPORT Pizza SCHEMA
module.exports = Pizza;

