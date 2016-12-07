import React from 'react';
import RecipeList from './recipeList.jsx';
import AddRecipe from './AddRecipe.jsx';
import './styles.css';
//import allRecipes from './allRecipesData.js';


class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      recipes: [],
      showRecipes: true,
      showForm: false
    }
  }

  componentDidMount() {
    this.handleInputChange();
  }

  handleInputChange () {
    //get request and reset this.state.recipes to be all new recipes
    fetch('/recipes', {
      method: 'get'
    }).then(function(data) {
      return data.json();
    }).then(function(body) {
      this.setState({recipes: body});
    }.bind(this)).catch(function(err) {
      console.log(err);
    });
  }

  onClickRecipes () {
    this.setState({showRecipes: true, showForm: false});
  }

  onClickAdd () {
    this.setState({showRecipes: false, showForm: true});
  }

  render() {
    return (
      <div className="App container-fluid">

        <div className="jumbotron text-center background">
          <h1>Welcome to CookShow</h1>
          <h4>"Where all your recipes stay in one Kitchen... if I wasn't clear I meant this Kitchen"</h4>
        </div>

        <div class='navigation'>

            <a onClick={this.onClickRecipes.bind(this)} href='#' className='btn btn-primary'>Your Recipes</a>
            <a onClick={this.onClickAdd.bind(this)} href='#' className='btn btn-primary'>Add a Recipe</a>

            {this.state.showRecipes ?
              <RecipeList list={this.state.recipes} handleInputChange={this.handleInputChange.bind(this)}/> : <AddRecipe handleInputChange={this.handleInputChange.bind(this)}/>}
        </div>
      </div>
    );
  }
}

export default App;




