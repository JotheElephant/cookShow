import React from 'react';

class RecipeEntry extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="row well">
        <div className="col-sm-3">
          <img className="img-responsive col-md-12 margin-center" src={this.props.recipe.photoUrl} alt="" />
        </div>
        <div className="recipe-body col-md-8">
          <h4 className="recipe-name">{this.props.recipe.name}</h4>
          <div className="recipe-description"><strong>Description: </strong>{this.props.recipe.description}</div>
          <div className="recipe-recipe">
            <a href={this.props.recipe.recipeUrl}>Go to Recipe</a>
          </div>
        </div>
      </div>
    )
  }
}

export default RecipeEntry;


  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     isDone : false
  //   }
  // }

  // handleClick(entry) {
  //   this.setState({ isDone : !this.state.isDone })
  // }

  // render() {
  //   return (
  //     <li className={this.state.isDone ? "item" : ""} onClick={() => this.handleClick(this.props.entry)}>{this.props.entry}</li>
  //   )
  // }