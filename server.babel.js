var  express = require('express');
var bodyParser = require('body-parser');


const app = express();

var data = [{name: 'Paprika Chicken', description: 'While this is a pretty straightforward grilled chicken recipe, the vinaigrette at the end was a last minute touch that worked out nicely. I really like oil and vinegar-based sauces on grilled meats. They work beautifully with the smoky, caramelized exterior.', recipeUrl: 'http://allrecipes.com/recipe/221093/good-frickin-paprika-chicken/print/?recipeType=Recipe&servings=6', photoUrl: 'http://kingofwallpapers.com/chicken/chicken-011.jpg'}];

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/', express.static('public'));

app.get('/recipes', function(req, res) {
  //redirected from post to render
  //console.log(data);
  res.send(data);
});

app.get('/addrecipe', function(req, res) {
  //add entry to data
  // console.log(req.body);
  // data.push(req.body);
  // Promise.promisify(fs.readFile).then
  res.redirect('/');
})

app.post('/addrecipe', function(req, res) {
  console.log("post received", req)
  //add entry to data
  //console.log(req.body.description);
  data.push(req.body);
  res.redirect('/');
  // res.sendStatus(201);
})

app.get('*', function (request, response){
  response.sendFile(path.resolve(__dirname, 'public', 'index.html'))
})

app.listen(process.env.PORT || 8000);

