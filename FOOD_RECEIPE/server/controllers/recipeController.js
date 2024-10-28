// server/controllers/recipeController.js
const Recipe = require('../models/Recipe');

exports.getAllRecipes = async (req, res) => {
  try {
    const recipes = await Recipe.find();
    res.json(recipes);
  } catch (error) {
    console.error('Error retrieving recipes:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

exports.addRecipe = async (req, res) => {
  const { title, ingredients, instructions, createdBy } = req.body;

  try {
    const newRecipe = new Recipe({ title, ingredients, instructions, createdBy });
    await newRecipe.save();
    res.status(201).json({ message: 'Recipe added successfully', recipe: newRecipe });
  } catch (error) {
    console.error('Error adding recipe:', error);
    res.status(500).json({ message: 'Server error' });
  }
};
