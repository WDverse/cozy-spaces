const { Schema, model } = require('mongoose');
// requires tool from mongoose.
const locationSchema = new Schema({ //creates a schema for location data
    location: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true,


    },
    status: {
        type: String,
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
        return `${this.location} ${this.price} ${this.status}`;
    })


const Location = model('Location', locationSchema);
//exports the Location Schema.
module.exports = Location;