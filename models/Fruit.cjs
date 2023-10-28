import { Int32 } from 'mongodb';

const mongoose = require('mongoose');


const fruitSchema = new mongoose.Schema(
    {
        name: String,
        color: String,
        ready: Boolean,
        age: Number
    },
    {
        timestamps: true
    }
    )


const Fruit = mongoose.model("Fruit",         fruitSchema);

module.exports = Fruit;