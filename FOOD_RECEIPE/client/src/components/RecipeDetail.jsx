import { useLocation, Link } from "react-router-dom";
import { useState } from "react";
import "./RecipeDetail.css";

const RecipeDetail = () => {
    const location = useLocation();
    const { recipe } = location.state || {};

    const [servings, setServings] = useState(1);

    const temperatureFactor = 1.75; // Temperature multiplier

    if (!recipe) {
        return (
            <div className="no-recipe">
                <p>No recipe selected. Go back to the <Link to="/">Home page</Link>.</p>
            </div>
        );
    }

    // Function to handle serving size change
    const handleServingChange = (event) => {
        setServings(event.target.value);
    };

    // Function to scale ingredient quantities and round to nearest whole number
    const scaleIngredient = (ingredient) => {
        const regex = /(\d+(\.\d+)?|\d+\s*\/\s*\d+)\s*(.*)/; // Regex to match numbers (including fractions) and units
        const match = ingredient.match(regex);
        
        if (match) {
            let quantity = match[1];
            const unit = match[3];

            // If quantity is a fraction (e.g., "1/2"), convert it to a decimal
            if (quantity.includes("/")) {
                const [numerator, denominator] = quantity.split("/").map(Number);
                quantity = numerator / denominator;
            }

            // Scale the quantity based on servings and temperature, rounding to the nearest whole number
            quantity = Math.round(parseFloat(quantity) * servings * temperatureFactor);

            return `${quantity} ${unit} ${match[3]}`;
        } else {
            return ingredient;
        }
    };

    return (
        <div className="recipe-detail">
            <div className="recipe-image">
                <img src={recipe.image} alt={recipe.label} />
            </div>
            <div className="recipe-info">
                <h1>{recipe.label}</h1>
                <p>Calories (for {servings} person{servings > 1 ? 's' : ''} and temperature factor of {temperatureFactor}): {Math.round(recipe.calories / recipe.servings * servings * temperatureFactor)}</p>

                <div className="servings-dropdown">
                    <label htmlFor="servings">Number of servings:</label>
                    <select id="servings" value={servings} onChange={handleServingChange}>
                        {[1, 2, 3, 4, 5, 6].map(num => (
                            <option key={num} value={num}>
                                {num} person{num > 1 ? 's' : ''}
                            </option>
                        ))}
                    </select>
                </div>

                <h4>Ingredients:</h4>
                <ul>
                    {recipe.ingredientLines.map((ingredient, index) => (
                        <li key={index}>{scaleIngredient(ingredient)}</li>
                    ))}
                </ul>

                <a href={recipe.url} target="_blank" rel="noopener noreferrer" className="original-link">
                    Link
                </a>
                <Link to="/" className="back-button">Go Back</Link>
            </div>
        </div>
    );
};

export default RecipeDetail;
