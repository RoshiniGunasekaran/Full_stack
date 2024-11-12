import React, { useState } from 'react';
import './RecipeForm.css';

function DonationForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [recipeName, setRecipeName] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [instructions, setInstructions] = useState('');
  const [prepTime, setPrepTime] = useState('');
  const [cookTime, setCookTime] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = () => {
    if (!name || !email || !recipeName || !ingredients || !instructions || !prepTime || !cookTime) {
      setError('All fields must be filled out!');
    } else {
      setError('');
      alert('Form Submitted');
    }
  };

  return (
    <div className="donation-form-container">
      <div className="form-row">
        <div className="form-field">
          <label>Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name"
          />
        </div>
        <div className="form-field">
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
          />
        </div>
      </div>

      <div className="form-row">
        <div className="form-field">
          <label>Recipe Name</label>
          <input
            type="text"
            value={recipeName}
            onChange={(e) => setRecipeName(e.target.value)}
            placeholder="Enter the recipe name"
          />
        </div>
        <div className="form-field">
          <label>Ingredients</label>
          <textarea
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
            placeholder="List the ingredients"
            rows="4"
          ></textarea>
        </div>
      </div>

      <div className="form-row">
        <div className="form-field">
          <label>Cooking Instructions</label>
          <textarea
            value={instructions}
            onChange={(e) => setInstructions(e.target.value)}
            placeholder="Describe the cooking instructions"
            rows="4"
          ></textarea>
        </div>
        <div className="form-field">
          <label>Preparation Time (minutes)</label>
          <input
            type="number"
            value={prepTime}
            onChange={(e) => setPrepTime(e.target.value)}
            placeholder="Enter preparation time"
          />
        </div>
      </div>

      <div className="form-row">
        <div className="form-field">
          <label>Cooking Time (minutes)</label>
          <input
            type="number"
            value={cookTime}
            onChange={(e) => setCookTime(e.target.value)}
            placeholder="Enter cooking time"
          />
        </div>
      </div>

      {error && <p className="error-message">{error}</p>}

      <button className="submit-button" onClick={handleSubmit}>
        Submit
      </button>
    </div>
  );
}

export default DonationForm;
