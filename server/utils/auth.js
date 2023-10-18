const jwt = require('jsonwebtoken'); // Import the 'jsonwebtoken' module
const secret = 'finalproject'; // Secret key for signing the token
const expiration = '2h'; // Expiration time for the token (2 hours)

module.exports = {
    signToken: function({ email, username, _id }) {
        // Create a payload containing user information
        const payload = { email, username, _id };

        // Sign the token with the payload, secret key, and expiration time
        return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
        // The returned token will contain user information and be signed with the secret key,
        // and it will expire after the specified time (2 hours).
    }
}
