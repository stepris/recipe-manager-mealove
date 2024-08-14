import { ChangeEvent } from 'react';
import { OnEditRecipeType, Recipe } from '@/types';
import { OnAddRecipeType } from '@/types';

type HandleChangeParams =
  | ChangeEvent<HTMLInputElement>
  | ChangeEvent<HTMLSelectElement>;

type RecipeFormProps = {
  onAddRecipe?: (recipe: Recipe) => void;
  onEditRecipe?: OnEditRecipeType;
  isEditMode?: boolean;
  recipe?: Recipe;
};

type Ingredient = {
  id: string;
  name: string;
  quantity: number;
  unit: string;
};

export type { HandleChangeParams, RecipeFormProps, Ingredient };
