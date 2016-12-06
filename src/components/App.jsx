import React from 'react';
import RecipeList from './recipeList.jsx';
import AddRecipe from './AddRecipe.jsx';

class App extends React.Component {

  constructor(props) {
    super(props);
  }


  render() {
    return (
      <div className="App container-fluid">
        <div className="jumbotron text-center">
          <h1>Welcome to CookShow</h1>
          <h4>"Where all your recipes stay in one Kitchen... if I wasn't clear I meant this Kitchen"</h4>
        </div>
        <div className="form-group">
          <AddRecipe />
        </div>
        <div className="row">
          <RecipeList list={this.props.recipes}/>
        </div>
      </div>
    );
  }
}

export default App;

