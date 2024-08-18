import RecipeDetails from '@/components/RecipeDetails';
import { useRouter } from 'next/router';
import Link from 'next/link';
import styled from 'styled-components';
import { RecipeDetailsPageProps } from '@/types/RecipeDetails.types';

import Button from '@/components/Button';

export default function RecipeDetailsPage({
  onToggleFavorite,
  onDeleteRecipe,
  recipes,
  favoriteRecipesList,
}: RecipeDetailsPageProps) {
  const router = useRouter();
  const { id } = router.query;
  const recipe = recipes.find((recipe) => recipe._id === id);

  if (!recipe) return;

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
        onDeleteRecipe={onDeleteRecipe}
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
