import { ReactNode } from 'react';

export type Recipe = {
  category: string;
  cookingTime: number;
  description: string;
  difficulty: string;
  _id?: string;
  imageUrl: string;
  ingredients: {
    id: string;
    name: string;
    quantity: string;
    unit: string;
  }[];
  instructions: {
    id: string;
    description: string;
  }[];
  prepTime: number;
  servings: number;
  tags: string[];
  title: string;
};

export interface LinkProps {
  readonly $isActive?: boolean;
}

export type FavoriteButtonProps = {
  $isDetailPage?: boolean;
  onToggleFavorite: () => {};
  isFavorite: boolean;
};

export interface FavoriteButtonLinkProps {
  readonly $isDetailPage?: boolean;
  readonly $isFavorite?: boolean;
}

export type RecipeDetailsProps = {
  recipe: Recipe;
  onToggleFavorite: (id: string) => {};
  isFavorite: boolean;
};

export type HandleToggleFavoriteFunction = (id: string) => void;

export type HeaderProps = {
  onToggleNav: () => void;
};

export type AppBaseProps = {
  favoriteRecipes: Recipe[] | [];
  recipes: Recipe[] | [];
  onToggleFavorite: (id: string) => {};
  favoriteRecipesList: string[];
};

export interface ChildrenLayoutProps {
  children?: ReactNode;
}

export type OnEditRecipeType = (recipe: Recipe) => void;
