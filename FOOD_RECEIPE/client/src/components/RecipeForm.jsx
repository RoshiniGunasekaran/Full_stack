import { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const RecipeForm = () => {
    const [title, setTitle] = useState('');
    const [ingredients, setIngredients] = useState('');
    const [instructions, setInstructions] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate(); // Initialize useNavigate

    const handleSubmit = async (e) => {
        e.preventDefault();

        const token = localStorage.getItem('token'); // Assuming token is stored in localStorage

        if (!token) {
            setErrorMessage('No token, authorization denied');
            navigate('/login'); // Redirect to login page
            return;
        }

        try {
            const response = await fetch('http://localhost:5000/api/recipes', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`, // Include token in Authorization header
                },
                body: JSON.stringify({
                    title,
                    ingredients: ingredients.split(','), // Convert ingredients string to array
                    instructions,
                    createdBy: 'testuser@example.com', // Replace with actual user from token, if applicable
                }),
            });

            if (response.ok) {
                setTitle('');
                setIngredients('');
                setInstructions('');
                alert('Recipe added successfully!');
            } else {
                const data = await response.json();
                setErrorMessage(data.message || 'Error adding recipe');
            }
        } catch (error) {
            console.error('Error:', error);
            setErrorMessage('An error occurred. Please try again.');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Recipe Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
            />
            <textarea
                placeholder="Ingredients (comma-separated)"
                value={ingredients}
                onChange={(e) => setIngredients(e.target.value)}
                required
            />
            <textarea
                placeholder="Instructions"
                value={instructions}
                onChange={(e) => setInstructions(e.target.value)}
                required
            />
            <button type="submit">Add Recipe</button>
            {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
        </form>
    );
};

export default RecipeForm;
