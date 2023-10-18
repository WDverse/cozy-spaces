// Importing necessary dependencies from mongoose
const { Schema, model } = require('mongoose');

// Creating a schema for the 'Location' model
const locationSchema = new Schema({
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
        // Configuration for the schema's JSON representation
        toJSON: {
            virtuals: true, // Include virtual properties
            getters: true, // Apply getters
        }
    });

// Adding a virtual property called 'LocationStatus' to the schema
locationSchema
    .virtual('LocationStatus')
    .get(function () {
        return `${this.location} ${this.price} ${this.status}`;
    });

// Creating the 'Location' model from the schema
const Location = model('Location', locationSchema);

// Exporting the 'Location' model
module.exports = Location;
