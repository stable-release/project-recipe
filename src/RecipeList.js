import React from "react";
import Recipe from "./RecipeSingle";

function RecipeList({ recipes, deleteRecipe }) {
    // TODO: Display the list of recipes using the structure of table that is provided.
    // TODO: Create at least one additional component that is used by this component.
    // TODO: Each recipe row must have a delete button - <button name="delete">Delete</button> - that deletes the post when clicked
    const recipeList = recipes.map((recipe) => {
        return <Recipe key={recipe.key} recipe={recipe} deleteRecipe={deleteRecipe}/>;
    });
    return (
        <div>
            <table className="recipe-list">
                <thead>
                    <tr>
                        <th><h2>Name</h2></th>
                        <th><h2>Cuisine</h2></th>
                        <th><h2>Photo</h2></th>
                        <th><h2>Ingredients</h2></th>
                        <th><h2>Preparations</h2></th>
                        <th><h2>Actions</h2></th>
                    </tr>
                </thead>
                <tbody style={{ width: "100%" }}>{recipeList}</tbody>
            </table>
        </div>
    );
}

export default RecipeList;
