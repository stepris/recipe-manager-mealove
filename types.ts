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

export type QuickLinksProps = {
  $isExplore?: boolean;
  $isFavoritesPage?: boolean;
};

export interface LinkProps {
  readonly $isExplore?: boolean;
  readonly $isFavoritesPage?: boolean;
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
