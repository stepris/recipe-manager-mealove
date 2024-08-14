import RecipeForm from '@/components/RecipeForm/RecipeForm';
import { useRouter } from 'next/router';
import { RecipeEditPageProps } from '@/types/RecipeEditPage.types';

export default function RecipeEditPage({
  recipes,
  onEditRecipe,
}: RecipeEditPageProps) {
  const router = useRouter();
  const { id } = router.query;
  const recipe = recipes.find((recipe) => recipe.id === id);

  if (!recipe) return;

  return (
    <>
      <RecipeForm isEditMode recipe={recipe} onEditRecipe={onEditRecipe} />
    </>
  );
}
