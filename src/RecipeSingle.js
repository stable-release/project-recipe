import React, { useState } from "react";
import "./RecipeSingle.css";

function RecipeSingle({ recipe, deleteRecipe }) {
    const handleDelete = () => {
        deleteRecipe(recipe.key);
    }
    return (
        <tr>
            <td>{recipe.name}</td>
            <td>{recipe.cuisine}</td>
            <td>
                <img
                    src={recipe.photo}
                    style={{
                        objectFit: "scale-down",
                        width: "100%",
                        height: "100%",
                    }}
                />
            </td>
            <td className="content_td"><p>{recipe.ingredients}</p></td>
            <td className="content_td"><p>{recipe.preparation}</p></td>
            <td><button name="delete" type="button" onClick={handleDelete}>Delete</button></td>
        </tr>
    );
}

export default RecipeSingle;
