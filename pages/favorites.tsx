import QuickLinks from '@/components/QuickLinks';
import RecipeList from '@/components/RecipeList';
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
          recipes={favoriteRecipes}
          onToggleFavorite={onToggleFavorite}
          favoriteRecipesList={favoriteRecipesList}
        />
      ) : (
        <>
          <p>Sorry :( There are no recipes in your favorite-list.</p>
          <p>
            You can add recipes by clicking the heart icon in the right upper
            corner.
          </p>
        </>
      )}
    </>
  );
}
