import { Recipe } from '@/types';
import { OnEditRecipeType } from '@/types';

type RecipeEditPageProps = {
  recipes: Recipe[];
  onEditRecipe: OnEditRecipeType;
};

export type { RecipeEditPageProps };
