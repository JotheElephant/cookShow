
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';
import allRecipes from './components/allRecipesData.js'


ReactDOM.render(<App recipes={allRecipes}/>, document.getElementById('app'));