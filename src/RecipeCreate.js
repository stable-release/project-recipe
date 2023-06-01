import React, { useState } from "react";

function RecipeCreate({ createRecipe }) {
    // TODO: When the form is submitted, a new recipe should be created, and the form contents cleared.
    const [formData, setFormData] = useState({
        name: "",
        cuisine: "",
        photo: "",
        ingredients: "",
        preparation: "",
    });
    // TODO: Add the required input and textarea form elements.
    // TODO: Add the required submit and change handlers
    const handleChange = ({ target }) => {
        setFormData({
            ...formData,
            [target.name]: target.value,
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        createRecipe(formData);
        setFormData((formData) => ({
            name: "",
            cuisine: "",
            photo: "",
            ingredients: "",
            preparation: "",
        }))
    };

    return (
        <form name="create" onSubmit={handleSubmit}>
            <table>
                <tbody>
                    <tr>
                        <td>
                            <input
                                name="name"
                                id="name"
                                type="text"
                                onChange={handleChange}
                                value={formData.name}
                                placeholder="name"
                            />
                        </td>
                        <td>
                            <input
                                name="cuisine"
                                id="cuisine"
                                type="text"
                                onChange={handleChange}
                                value={formData.cuisine}
                                placeholder="cuisine"
                            />
                        </td>
                        <td>
                            <input
                                name="photo"
                                id="photo"
                                type="url"
                                onChange={handleChange}
                                value={formData.photo}
                                placeholder="photo"
                            />
                        </td>
                        <td>
                            <textarea
                                name="ingredients"
                                id="ingredients"
                                onChange={handleChange}
                                value={formData.ingredients}
                                placeholder="ingredients"
                            />
                        </td>
                        <td>
                            <textarea
                                name="preparation"
                                id="preparation"
                                onChange={handleChange}
                                value={formData.preparation}
                                placeholder="preparation"
                            />
                        </td>
                        <td>
                            <button type="submit">Create</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </form>
    );
}

export default RecipeCreate;
