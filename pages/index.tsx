import QuickLinks from '@/components/QuickLinks';
import RecipeList from '@/components/RecipeList';
import { HomePageProps } from '@/types';

export default function HomePage({
  recipes,
  onToggleFavorite,
  favoriteRecipesList,
}: HomePageProps) {
  return (
    <main>
      <QuickLinks />
      <RecipeList
        onToggleFavorite={onToggleFavorite}
        recipes={recipes}
        favoriteRecipesList={favoriteRecipesList}
      />
    </main>
  );
}
