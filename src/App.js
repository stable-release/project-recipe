import React, { useState } from "react";
import "./App.css";
import RecipeCreate from "./RecipeCreate";
import RecipeList from "./RecipeList";
import RecipeData from "./RecipeData"

const keyedRecipeData = RecipeData.map((recipe) => {
  recipe.key = RecipeData.indexOf(recipe);
  return recipe;
})

function App() {
  const [recipes, setRecipes] = useState(keyedRecipeData);
  const [identityKey, setIdentityKey] = useState(RecipeData.length);

  // TODO: Add the ability for the <RecipeList /> component to list and delete an existing recipe.
  // TODO: Add the ability for the <RecipeCreate /> component to create new recipes.

  const createRecipe = (content) => {
    const recipe = {
      ...content,
      key:identityKey,
    }
    setIdentityKey((id) => id + 1);
    setRecipes((keyedRecipeData) => [...keyedRecipeData, recipe]);
  }

  const deleteRecipe = (identifier) => {
    setRecipes((recipes) => [...recipes.filter((obj) => obj.key != identifier)]);
  }
  
  return (
    <div className="App">
      <header><h1>Delicious Food Recipes</h1></header>
      <RecipeList recipes={recipes} deleteRecipe={deleteRecipe}/>
      <RecipeCreate createRecipe={createRecipe}/>
    </div>
  );
}

export default App;
