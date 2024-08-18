import mongoose from 'mongoose';

const { Schema } = mongoose;

const recipeSchema = new Schema({
  category: { type: String, required: true },
  cookingTime: Number,
  description: String,
  difficulty: String,
  imageUrl: String,
  ingredients: [{ id: String, name: String, quantity: String, unit: String }],
  instructions: [
    {
      id: { type: String, required: true },
      description: { type: String, required: true },
    },
  ],
  prepTime: Number,
  servings: Number,
  tags: [String],
  title: { type: String, required: true },
});

const Recipe = mongoose.models.Recipe || mongoose.model('Recipe', recipeSchema);

export default Recipe;
