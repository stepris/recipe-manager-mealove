import QuickLinks from '@/components/QuickLinks';
import RecipeList from '@/components/RecipeList';
import { AppBaseProps } from '@/types';

export default function HomePage({
  recipes,
  onToggleFavorite,
  favoriteRecipesList,
}: AppBaseProps) {
  return (
    <main>
      <QuickLinks />
      <RecipeList
        onToggleFavorite={onToggleFavorite}
        recipes={recipes || []}
        favoriteRecipesList={favoriteRecipesList}
      />
    </main>
  );
}
