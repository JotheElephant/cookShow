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
    this.onSubmit = this.onSubmit.bind(this);

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
    this.props.handleInputChange();
    alert('A recipe was submitted: ' + this.state.name, "Keep adding those recipes!");
    event.preventDefault();
  }


  render() {
    return (
      <form className='form' action="/addrecipe" method="post" onSubmit={this.onSubmit}>
        <div className="form-group row">
          <label className="col-sm-2 col-form-label">Recipe Name: </label>
          <div className="col-sm-10">
            <input
              className='form-control'
              type="text"
              name="name"
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
              name="description"
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
              name="recipeUrl"
              value={this.state.recipeUrl}
              onChange={this.handleRecipeChange}
            />
          </div>
        </div>

        <div className="form-group row">
          <label className="col-sm-2 col-form-label">Photo Url: </label>
          <div className="col-sm-10">
            <input
              className="form-control"
              type="text"
              name="photoUrl"
              value={this.state.photoUrl}
              onChange={this.handlePhotoChange}
            />
          </div>
        </div>

        <button className="btn text-right" type="submit">Submit</button>
      </form>
    )
  }
}

export default AddRecipe;