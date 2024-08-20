import RecipeForm from '@/components/RecipeForm/RecipeForm';
import { useRouter } from 'next/router';
import useSWR from 'swr';
import { Recipe } from '@/types';

export default function RecipeEditPage() {
  const { data: recipes, error, isLoading, mutate } = useSWR('/api/recipes');

  async function handleEditRecipe(updatedRecipe: Recipe) {
    const response = await fetch(`/api/recipes/${updatedRecipe._id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedRecipe),
    });
    if (response.ok) {
      mutate();
      router.back();
    }
  }

  const router = useRouter();
  const { id } = router.query;
  const recipe = recipes.find((recipe: Recipe) => recipe._id === id);

  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;
  if (!recipes) return null;

  return (
    <>
      <RecipeForm isEditMode recipe={recipe} onEditRecipe={handleEditRecipe} />
    </>
  );
}
