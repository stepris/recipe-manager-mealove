import QuickLinks from '@/components/QuickLinks';
import RecipeList from '@/components/RecipeList';

export default function HomePage() {
  return (
    <main>
      <QuickLinks $isExplore />
      <RecipeList />
    </main>
  );
}
