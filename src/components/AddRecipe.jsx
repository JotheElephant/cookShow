import React from 'react';
import allRecipes from './allRecipesData.js';


class AddRecipe extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      name: '',
      description: '',
      recipeUrl: '',
      photoUrl: ''
    }
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
    this.handleRecipeChange = this.handleRecipeChange.bind(this);
    this.handlePhotoChange = this.handlePhotoChange.bind(this);

  }

  handleNameChange(e) {
    this.setState({ name: e.target.value })
  }
  handleDescriptionChange(e) {
    this.setState({ description: e.target.value })
  }
  handleRecipeChange(e) {
    this.setState({ recipeUrl: e.target.value })
  }
  handlePhotoChange(e) {
    this.setState({ photoUrl: e.target.value })
  }



  onSubmit() {
    allRecipes.push(self.state);
    //lATER use ajax call for a post req
  }


  render() {
    return (
      <form className='form'>
        <div className="form-group row">
          <label className="col-sm-2 col-form-label">Recipe Name: </label>
          <div className="col-sm-10">
            <input
              className='form-control'
              type="text"
              value={this.state.name}
              onChange={this.handleNameChange}
            />
          </div>
        </div>

        <div className="form-group row">
          <label className="col-sm-2 col-form-label">Description: </label>
          <div className="col-sm-10">
            <input
              className="form-control"
              type="text"
              value={this.state.description}
              onChange={this.handleDescriptionChange}
            />
          </div>
        </div>

        <div className="form-group row">
          <label className="col-sm-2 col-form-label">Recipe Url: </label>
          <div className="col-sm-10">
            <input
              className="form-control"
              type="text"
              value={this.state.recipeUrl}
              onChange={this.handleRecipeChange}
            />
          </div>
        </div>

        <div className="form-group row">
          <label className="col-sm-2 col-form-label">Recipe Url: </label>
          <div className="col-sm-10">
            <input
              className="form-control"
              type="text"
              value={this.state.photoUrl}
              onChange={this.handlePhotoChange}
            />
          </div>
        </div>

        <button className="btn text-right" type="submit" onClick={this.onSubmit} >Submit</button>
      </form>
    )
  }
}

export default AddRecipe;