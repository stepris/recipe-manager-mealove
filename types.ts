import { ReactNode } from 'react';

export type Recipe = {
  id: string;
  title: string;
  imageUrl: string;
  description: string;
  ingredients: {
    id: string;
    quantity: number;
    unit: string;
    name: string;
  }[];
  prepTime: {
    h: number;
    min: number;
  };
  cookingTime: {
    h: number;
    min: number;
  };
  servings: number;
  tags: string[];
  instructions: {
    id: string;
    description: string;
  }[];
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

export type RecipePreviewProps = {
  recipe: Recipe;
  onToggleFavorite: (id: string) => {};
  isFavorite: boolean;
};

export type HandleToggleFavoriteFunction = (id: string) => void;

export type HeaderProps = {
  onToggleNav: () => void;
};

export type AppBaseProps = {
  favoriteRecipes?: Recipe[];
  recipes?: Recipe[];
  onToggleFavorite?: (id: string) => {};
  favoriteRecipesList?: string[];
};

export interface ChildrenLayoutProps {
  children?: ReactNode;
}

export type RecipeDetailsPageProps = {
  recipes: Recipe[];
  onToggleFavorite: (id: string) => {};
  favoriteRecipesList: string[];
};
