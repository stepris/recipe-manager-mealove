import QuickLinks from '@/components/QuickLinks';
import RecipeList from '@/components/RecipeList';

export default function HomePage({ recipes, onToggleFavorite }) {
  return (
    <main>
      <QuickLinks $isExplore />
      <RecipeList onToggleFavorite={onToggleFavorite} recipes={recipes} />
    </main>
  );
}
