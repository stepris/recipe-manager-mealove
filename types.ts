import { ReactNode } from 'react';

export type Recipe = {
  category: string;
  cookingTime: number;
  description: string;
  difficulty: string;
  id: string;
  imageUrl: string;
  ingredients: {
    id: string;
    name: string;
    quantity: number;
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

export type Ingredient = {
  id: string;
  name: string;
  quantity: number;
  unit: string;
};

export interface StyledFormComponentProps {
  readonly $leftAlign?: boolean;
  readonly $isMedium?: boolean;
  readonly $isLarge?: boolean;
}

export type TimeInputPros = {
  time: number;
  onTimeChange: (newPrepTime: number) => void;
  what: 'prep' | 'cooking';
};

export type IngredientInputProps = {
  ingredient: Ingredient;
  onIngredientChange: (newIngredient: Ingredient) => void;
};
