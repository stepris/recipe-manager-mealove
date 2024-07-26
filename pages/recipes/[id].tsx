import RecipeDetails from '@/components/RecipeDetails';
import { useRouter } from 'next/router';
import recipes from '@/lib/recipes.json';

export default function RecipeDetailsPage() {
  const router = useRouter();
  const { id } = router.query;

  const recipe = recipes.find((recipe) => recipe.id === id);

  return <RecipeDetails recipe={recipe} />;
}
