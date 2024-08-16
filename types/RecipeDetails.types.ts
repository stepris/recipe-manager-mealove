import { Recipe } from '@/types';
export type RecipeDetailsPageProps = {
  recipes: Recipe[];
  onToggleFavorite: (id: string) => {};
  favoriteRecipesList: string[];
};
