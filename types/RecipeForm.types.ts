import { ChangeEvent } from 'react';
import { OnEditRecipeType, Recipe } from '@/types';

export type HandleChangeParams =
  | ChangeEvent<HTMLInputElement>
  | ChangeEvent<HTMLSelectElement>;

export type RecipeFormProps = {
  onAddRecipe?: (recipe: Recipe) => void;
  onEditRecipe?: OnEditRecipeType;
  isEditMode?: boolean;
  recipe?: Recipe;
};

export type Ingredient = {
  id: string;
  name: string;
  quantity: string;
  unit: string;
};
