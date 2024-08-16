import { Recipe } from '@/types';
import { OnEditRecipeType } from '@/types';

export type RecipeEditPageProps = {
  recipes: Recipe[];
  onEditRecipe: OnEditRecipeType;
};
