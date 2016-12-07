import React from 'react';

class RecipeEntry extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.recipe.name,
      description: this.props.recipe.description,
      recipeUrl: this.props.recipe.recipeUrl,
      photoUrl: this.props.recipe.recipeUrl
    }
    this.handleRemoveClick = this.handleRemoveClick.bind(this);
  }

  handleRemoveClick() {
    this.props.handleInputChange();
    // fetch('/remove', {
    //   method: 'post',
    //   body: JSON.stringify({name: this.state.name})
    // }).then(function(data) {
    //   return data.json();
    // }).catch(function(err) {
    //   console.log(err);
    // })
    fetch("/remove",
      {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        method: "POST",
        body: JSON.stringify({name: this.state.name})
    }).then(function(res){
      console.log(res);
    }).catch(function(res){
      console.log(res);
    })
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
            <a href={this.props.recipe.recipeUrl} className="btn btn-info">Go to Recipe</a>
          </div>
          <div className="recipe-remove">
            <button className="btn btn-danger pull-right" onClick={this.handleRemoveClick}>remove</button>
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