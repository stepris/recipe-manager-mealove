import RecipeDetails from '@/components/RecipeDetails';
import { useRouter } from 'next/router';
// import recipes from '@/lib/recipes.json';
import Link from 'next/link';
import styled from 'styled-components';
import { RecipeDetailsPageProps } from '@/types';

export default function RecipeDetailsPage({
  onToggleFavorite,
  recipes,
  favoriteRecipesList,
}: RecipeDetailsPageProps) {
  const router = useRouter();
  const { id } = router.query;
  const recipe = recipes.find((recipe) => recipe.id === id);

  if (!recipe) return;

  return (
    <>
      <StyledLink href='/'>Back to recipe list</StyledLink>
      <RecipeDetails
        recipe={recipe}
        onToggleFavorite={onToggleFavorite}
        isFavorite={favoriteRecipesList.includes(recipe.id)}
      />
    </>
  );
}

const StyledLink = styled(Link)`
  font: var(--font-caption);
  color: var(--color-primary-2);
`;
