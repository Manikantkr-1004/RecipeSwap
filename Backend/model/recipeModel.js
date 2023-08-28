
const mongoose = require('mongoose');

const recipeSchema = mongoose.Schema({
    userId: String,
    recipeName: String,
    username: String,
    email: String,
    comments: [],
    difficulty: String,
    prepTime: String,
    cookTime: String,
    totalTime: String,
    servings: Number,
    cuisine: String,
    mealType: String,
    occasion: String,
    dietaryConsiderations: [String],
    recipeType: String,
    ingredients: [String],
    instructions: [String],
    notes: [
        String
    ],
    equipment: [
        String
    ],
    imageURL: String,
    nutrition: Object,
    tags: [String]


})

const RecipeModel = mongoose.model("recipe", recipeSchema);

module.exports = {
    RecipeModel
}


