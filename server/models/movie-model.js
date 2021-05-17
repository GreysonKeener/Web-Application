const mongoose = require('mongoose')
const Schema = mongoose.Schema
const Schema1 = mongoose.Schema
const movie = new Schema(
    {
        name: { type: String, required: true },
        time: { type: [String], required: true },
        rating: { type: Number, required: false },
    },
    { timestamps: true },
)
const tv = new Schema1(
    {
        UserName: { type: String, required: true },
        Password: { type: [String], required: true },
        rating: { type: Number, required: false },
    },
    { timestamps: true },
)
module.exports = mongoose.model('Movies', movie)

