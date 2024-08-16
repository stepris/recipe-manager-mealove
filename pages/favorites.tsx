import QuickLinks from '@/components/QuickLinks';
import RecipeList from '@/components/RecipeList';
import NoFavorite from '@/components/NoFavorite';
import { AppBaseProps } from '@/types';

export default function Favorites({
  favoriteRecipes,
  onToggleFavorite,
  favoriteRecipesList,
}: AppBaseProps) {
  return (
    <>
      <QuickLinks />
      {favoriteRecipesList.length !== 0 ? (
        <RecipeList
          recipes={favoriteRecipes || []}
          onToggleFavorite={onToggleFavorite}
          favoriteRecipesList={favoriteRecipesList || []}
        />
      ) : (
        <NoFavorite />
      )}
    </>
  );
}
