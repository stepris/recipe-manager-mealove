import RecipeDetails from '@/components/RecipeDetails';
import { useRouter } from 'next/router';
import useSWR from 'swr';
import Link from 'next/link';
import styled from 'styled-components';
import { Recipe } from '@/types';
import { RecipeDetailsPageProps } from '@/types/RecipeDetails.types';

import Button from '@/components/Button';

export default function RecipeDetailsPage({
  onToggleFavorite,
  favoriteRecipesList,
}: RecipeDetailsPageProps) {
  const { data: recipes, error, isLoading, mutate } = useSWR('/api/recipes');
  const router = useRouter();
  const { id } = router.query;
  const recipe = recipes.find((recipe: Recipe) => recipe._id === id);

  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;
  if (!recipes) return null;

  if (!recipe || !recipe._id) return null;

  async function handleDeleteRecipe(id: string) {
    const respone = await fetch(`/api/recipes/${id}`, {
      method: 'Delete',
    });
    if (respone.ok) {
      mutate();
      router.push('/');
    }
  }

  const handleEdit = () => {
    router.push(`/recipes/${id}/edit`);
  };

  return (
    <>
      <StyledLink href='/'>Back to recipe list</StyledLink>
      <RecipeDetails
        recipe={recipe}
        onToggleFavorite={onToggleFavorite}
        isFavorite={favoriteRecipesList.includes(recipe._id)}
        onDeleteRecipe={handleDeleteRecipe}
      />
      <ButtonWrapper>
        <Button type='button' variant='$edit' onClickBehavior={handleEdit}>
          Edit
        </Button>
      </ButtonWrapper>
    </>
  );
}

const StyledLink = styled(Link)`
  font: var(--font-caption);
  color: var(--color-primary-2);
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  row-gap: var(--spacing-2);
  padding: var(--spacing-6);
`;
