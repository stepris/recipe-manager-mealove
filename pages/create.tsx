import Login from '@/components/Login';
import RecipeForm from '@/components/RecipeForm/RecipeForm';
import { Recipe } from '@/types';
import { log } from 'console';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import useSWR from 'swr';

export default function Create() {
  const { data: recipes, error, isLoading, mutate } = useSWR('/api/recipes');
  const router = useRouter();
  const { data: session } = useSession();

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
      const newRecipe = await response.json();
      mutate();
      router.push(`/recipes/${newRecipe.newId}`);
    }
  }

  return session ? <RecipeForm onAddRecipe={handleAddRecipe} /> : <Login />;
}
