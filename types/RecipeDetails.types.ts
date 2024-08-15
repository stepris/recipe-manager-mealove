import { Recipe } from '@/types';

export type RecipeDetailsPageProps = {
  recipes: Recipe[];
  onToggleFavorite: (id: string) => {};
  onDeleteRecipe: (id: string) => {};
  favoriteRecipesList: string[];
};

export type RecipeDetailsProps = {
  recipe: Recipe;
  onToggleFavorite: (id: string) => {};
  onDeleteRecipe: (id: string) => {};
  isFavorite: boolean;
};
