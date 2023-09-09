// Import Mongoose library for MongoDB schema modeling
const mongoose =  require('mongoose')

// Define the schema for the user collection
const UserSchema = new mongoose.Schema({
  // Name the user, a required string field
    name: {
        type: String,
        required: true
    },
    // Email of the user, a required string field
    email:{
        type: String,
        required: true,
        unique: true
    },
    // Password of the user, a required string field
    password:{
        type: String,
        required: true
    },
    // Avatar of the user, a string field
    avatar:{
        type: String
    },
    // Date the user was created, a date field with the value 
    date:{
        type: Date,
        default: Date.now
    }
});

// Export the user schema as a model
module.exports = User = mongoose.model('user', UserSchema);