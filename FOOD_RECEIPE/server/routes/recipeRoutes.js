const express = require('express');
const router = express.Router();
const { getAllRecipes, addRecipe } = require('../controllers/recipeController'); // Adjust the path if necessary
const protect = require('../middleware/authMiddleware'); // Middleware for protecting routes

// Get all recipes
router.get('/', protect, getAllRecipes); // Protect the route

// Add a new recipe
router.post('/', protect, addRecipe); // Protect the route

module.exports = router;
