import React from 'react';
import RecipeEntry from './recipeEntry.jsx';

let RecipeList = ({list, handleInputChange}) => (
  <div className="recipe-list">
    {
      list.map((recipe) => {
        return <RecipeEntry recipe={recipe} handleInputChange={handleInputChange}/>
      })
    }
  </div>
);


export default RecipeList;



