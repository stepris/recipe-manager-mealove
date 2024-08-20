import RecipeForm from '@/components/RecipeForm/RecipeForm';
import { Recipe } from '@/types';
import { useRouter } from 'next/router';
import useSWR from 'swr';

export default function Create() {
  const { data: recipes, error, isLoading, mutate } = useSWR('/api/recipes');
  const router = useRouter();

  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;
  if (!recipes) return null;

  async function handleAddRecipe(recipe: Recipe) {
    const response = await fetch('/api/recipes', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(recipe),
    });
    if (response.ok) {
      mutate();
      router.push(`/`);
    }
  }

  return <RecipeForm onAddRecipe={handleAddRecipe} />;
}
