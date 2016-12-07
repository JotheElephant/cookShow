var db = require('./config');
var mongoose = require('mongoose');

var recipeSchema = mongoose.Schema({
  name: String,
  description: String,
  recipeUrl: String,
  photoUrl: String,
  user: String
});

var Recipe = mongoose.model('Recipe', recipeSchema);

module.exports = Recipe;