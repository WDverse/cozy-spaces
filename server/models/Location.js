const { Schema, model } = require('mongoose');

const locationSchema = new Schema({
    location: {
        type: String,
        required: true
    },
    status: {
        type: Boolean,
        required: true,
    }
})