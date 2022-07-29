const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const movieSchema = new Schema({
  id: { type: Number, required: true, unique: true },
  title: { type: String, required: true },
  released:{type:Date, required:true},
  director: { type: [String], required: true },
  genres:{ type: [String], required: true },
  link: { type: String, required: true },
  description: { type: String, required: true },
  image: { type: String, required: true }
});

const movie = mongoose.model("Movie", movieSchema);

module.exports = movie;