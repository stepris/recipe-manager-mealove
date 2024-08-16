import { Ingredient } from './RecipeForm.types';

export type IngredientInputProps = {
  ingredient: Ingredient;
  onIngredientChange: (newIngredient: Ingredient) => void;
};
