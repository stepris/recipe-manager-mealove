import { Recipe } from '@/types';

export type RecipeListPageProps = {
  recipes: Recipe[];
  onToggleFavorite: (id: string) => {};
  favoriteRecipesList: string[];
};

export type handleChangeFilterFunction = (category: string) => void;

export type Category = string | null;
