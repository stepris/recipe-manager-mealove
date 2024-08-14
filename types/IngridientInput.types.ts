import { Ingredient } from './RecipeForm.types';

type IngredientInputProps = {
  ingredient: Ingredient;
  onIngredientChange: (newIngredient: Ingredient) => void;
};

export type { IngredientInputProps };
