var express = require('express');
var bodyParser = require('body-parser');
var db = require('./data/config.js');
var Recipe = require('./data/recipeModel.js');


const app = express();

//sample data
// var data = [{name: 'Paprika Chicken', description: 'While this is a pretty straightforward grilled chicken recipe, the vinaigrette at the end was a last minute touch that worked out nicely. I really like oil and vinegar-based sauces on grilled meats. They work beautifully with the smoky, caramelized exterior.', recipeUrl: 'http://allrecipes.com/recipe/221093/good-frickin-paprika-chicken/print/?recipeType=Recipe&servings=6', photoUrl: 'http://kingofwallpapers.com/chicken/chicken-011.jpg'}];

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/', express.static('public'));

//retrieves all recipes from database
app.get('/recipes', function(req, res) {
  Recipe.find({}).exec(function(err, recipes) {
    res.status(200).send(recipes);
  })
});

//recipe is added to the list
app.post('/addrecipe', function(req, res) {
  var newRecipe = new Recipe({
    name: req.body.name,
    description: req.body.description,
    recipeUrl: req.body.recipeUrl,
    photoUrl: req.body.photoUrl
  });
  newRecipe.save(function(err, updatedRecipe) {
    res.redirect('/');
  });
})

//removes recipe from list
app.post('/remove', function(req, res) {
  console.log(req.body.name);
  Recipe.remove({name: req.body.name}, function (err) {
    console.log('Disappeared!');
      // if no error, your model is removed
  });
})

app.get('*', function (request, response){
  response.sendFile(path.resolve(__dirname, 'public', 'index.html'))
})

app.listen(process.env.PORT || 8000);

