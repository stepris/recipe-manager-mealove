import QuickLinks from '@/components/QuickLinks';
import RecipeList from '@/components/RecipeList';
import { AppBaseProps } from '@/types';
import IsLoading from '@/components/IsLoading';

export default function HomePage({
  recipes,
  onToggleFavorite,
  favoriteRecipesList,
  isLoading,
}: AppBaseProps) {
  return (
    <main>
      <QuickLinks />
      {isLoading ? (
        <IsLoading />
      ) : (
        <RecipeList
          onToggleFavorite={onToggleFavorite}
          recipes={recipes || []}
          favoriteRecipesList={favoriteRecipesList}
        />
      )}
    </main>
  );
}
