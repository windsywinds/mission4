const mongoose = require('mongoose');

const carSchema = mongoose.Schema({
    imgUrl: {type: String},
    carType: {type: String},
    carColor: {type: String},
    carBrand: {type: String},
    carPrice: {type: String}
});

module.exports = carSchema