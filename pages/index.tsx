import QuickLinks from '@/components/QuickLinks';
import RecipeList from '@/components/RecipeList';

export default function HomePage({
  recipes,
  onToggleFavorite,
  favoriteRecipesList,
}) {
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
