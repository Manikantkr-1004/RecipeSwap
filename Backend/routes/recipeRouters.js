const express = require("express");
const { auth } = require("../middleware/auth.middleware");
const { RecipeModel } = require("../model/recipeModel");


const recipeRouter = express.Router();



recipeRouter.get("/", async (req, res) => {
    let recipes = null;
    const {search} = req.query;
    try {
        if(search){
            recipes = await RecipeModel.aggregate([
                {
                    $match: {
                      $or: [
                        { "recipeName": { $regex: search, $options: "i" } },
                        { "username": { $regex: search, $options: "i" } },
                        { "mealType": { $regex: search, $options: "i" } }
                      ]
                    }
                  }
            ]).exec();
        }else{
            recipes = await RecipeModel.find();
        }
        res.status(200).json({ recipes, issue: false });
    } catch (error) {
        res.status(200).json({ "error": error.message, issue: true })

    }
})

// search 
recipeRouter.get("/find/category/:value", async (req, res) => {
    const{value} = req.params;
    try {
        let recipes = await RecipeModel.find({
            $or: [
              { "cuisine": value },   
              { "mealType": value },
            
            ]
          });
        res.status(200).json({ recipes, issue: false });
    } catch (error) {
        res.status(200).json({ "error": error.message, issue: true })
    }
})
recipeRouter.get("/find/:id", async (req, res) => {
    const{id} = req.params;
    try {
        let recipes = await RecipeModel.findOne({_id : id});
        res.status(200).json({ recipes, issue: false });
    } catch (error) {
        res.status(200).json({ "error": error.message, issue: true })
    }
})
recipeRouter.get("/userrecipies", auth, async (req, res) => {
    try {

        let recipes = await RecipeModel.find({ email : req.body.email });
        
        res.status(200).json({ recipes, issue: false });
    } catch (error) {
        res.status(200).json({ "error": error.message, issue: true })

    }
})

recipeRouter.get("/users/comments", auth, async (req, res) => {
    try {

        const comment = await RecipeModel.aggregate([
            {
              $match: {
                "comments.useremail": req.body.email
              }
            }
          ]);
        
        res.status(200).json({ comments: comment, issue: false });
    } catch (error) {
        res.status(200).json({ "error": error.message, issue: true })

    }
})
recipeRouter.post("/add", auth, async (req, res) => {

    // recipeName: String,
    // username: String,
    // email: String,
    // comments: [{
    //     username: String,
    //     review: String
    // }],
    // difficulty: String,
    // prepTime: String,
    // cookTime: String,
    // totalTime: String,
    // servings: Number,
    // cuisine: String,
    // mealType: String,
    // occasion: String,
    // dietaryConsiderations: [String],
    // recipeType: String,
    // ingredients: [String],
    // instructions: [String],
    // notes: [
    //     String
    // ],
    // equipment: [
    //     String
    // ],
    // imageURL: String,
    // nutrition: Object,
    // tags: [String]

    const { email, username, recipeName, difficulty, prepTime, cookTime, totalTime, servings, cuisine, ingredients, mealType, occasion, recipeType, instructions, imageURL, tags } = req.body;

    if (!email || !username || !recipeName || !difficulty || !prepTime || !cookTime || !totalTime || !servings || !cuisine || !ingredients || !occasion || !mealType || !recipeType || !instructions || !imageURL || !tags) {
        res.status(200).json({ "error": "all the fields are requried", issue: true });

    } else {
        try {
            const recipe = new RecipeModel(req.body);
            await recipe.save();
            res.status(200).json({
                "message": "recipe added", "recipeDetails": req.body,
                issue: false
            });
        } catch (error) {
            res.status(200).json({ "error": error.message, issue: true })
        }

    }

})


recipeRouter.patch("/update/:recipeId", auth, async (req, res) => {
    const { recipeId } = req.params;

    try {
        let recipe = await RecipeModel.findOne({ _id: recipeId });
        if (recipe.email === req.body.email) {
            await RecipeModel.updateOne({ _id: recipeId }, req.body);
            res.status(200).json({ "message": "recipe has been updated", issue: false });
        } else {
            res.status(200).json({ "error": "you are not authorized to update this recipe", issue: true })
        }


    } catch (error) {
        res.status(200).json({ "error": error.message, issue: true })
    }
})

recipeRouter.patch("/update/comment/:recipeId",  async (req, res) => {
    const { recipeId } = req.params;

    try {
            await RecipeModel.updateOne( { _id: recipeId },
                { $push: { comments: req.body } });
            res.status(200).json({ "message": "Comment Updated has been updated", comment :  req.body, issue: false });


    } catch (error) {
        res.status(200).json({ "error": error.message, issue: true })
    }
})
recipeRouter.delete("/delete/:recipeId", auth, async (req, res) => {
    const { recipeId } = req.params;
    try {
        let recipe = await RecipeModel.findOne({ _id: recipeId });
        if (recipe.email === req.body.email) {
            await RecipeModel.deleteOne({ _id: recipeId });
            res.status(200).json({ "message": "recipe has been deleted", issue: false });
        } else {
            res.status(200).json({ "error": "you are not authorized to delete this recipe", issue: true })
        }

    } catch (error) {
        res.status(200).json({ "error": error.message, issue: true })
    }
})


module.exports = {
    recipeRouter
}