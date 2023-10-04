const { Schema, model } = require('mongoose');

const locationSchema = new Schema({
    location: {
        type: String,
        required: true
    },
    price:{
        type: Number,
        required :true,


    },
    status: {
        type: Boolean,
        required: true,
    }
},
    {
        toJSON: {
            virtuals: true,
            getters: true,
        }
    });

locationSchema
    .virtual('LocationStatus')
    .get(function () {
        return `${this.location} ${this.status}`;
    })


const Location = model('Location', locationSchema);

module.exports = Location;