import { Recipe } from '@/types';

export type RecipeDetailsPageProps = {
  recipes: Recipe[];
  onToggleFavorite: (id: string | undefined) => {};
  onDeleteRecipe: (id: string) => {};
  favoriteRecipesList: string[];
};

export type RecipeDetailsProps = {
  recipe: Recipe;
  onToggleFavorite: (id: string | undefined) => {};
  onDeleteRecipe: (id: string) => {};
  isFavorite: boolean;
  onModalClose?: () => void;
};

export type ConfirmationModalProps = {
  onModalClose: () => void;
  onDeleteRecipe: (id: string) => {};
  recipeId: string | undefined;
};
