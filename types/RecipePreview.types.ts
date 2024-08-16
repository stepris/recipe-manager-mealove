import { Recipe } from '@/types';

export type RecipePreviewProps = {
  recipe: Recipe;
  onToggleFavorite: (id: string) => {};
  isFavorite: boolean;
};

export type StyledRecipeTitleProps = {
  $recipeColor: string | undefined;
};
