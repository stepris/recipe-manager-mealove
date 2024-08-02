import QuickLinks from '@/components/QuickLinks';
import RecipeList from '@/components/RecipeList';

export default function Favorites({ favoriteRecipes, onToggleFavorite }) {
  return (
    <>
      <QuickLinks $isFavorites />
      <RecipeList
        recipes={favoriteRecipes}
        onToggleFavorite={onToggleFavorite}
      />
    </>
  );
}
