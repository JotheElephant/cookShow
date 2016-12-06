import React from 'react';
import RecipeEntry from './recipeEntry.jsx';

let RecipeList = ({list}) => (
  <div className="recipe-list">
    {
      list.map((recipe) => {
        return <RecipeEntry recipe={recipe} />
      })
    }
  </div>
);


export default RecipeList;



