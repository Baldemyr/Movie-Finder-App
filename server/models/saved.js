const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const savedMoviesSchema = new Schema({
    id: {
        type: Number,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    rottenScore: {
        type: Number,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    username:{
        type:String,
        required:true
    },
    releaseDate: {
        type: Date,
        default: Date.now
    },

    // `user` object stores a User id
    // The ref property links the ObjectId to the User model
    // This allows us to populate the saved game with an associated user
    user: {
        type: Schema.Types.ObjectId,
        ref: "User"
    }

});

const SavedMovies = mongoose.model("SavedMovies", savedMoviesSchema);

module.exports = SavedMovies;