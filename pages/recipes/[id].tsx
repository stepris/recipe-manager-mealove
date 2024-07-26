import RecipeDetails from '@/components/RecipeDetails';
import { useRouter } from 'next/router';
import recipes from '@/lib/recipes.json';
import Link from 'next/link';
import styled from 'styled-components';

export default function RecipeDetailsPage() {
  const router = useRouter();
  const { id } = router.query;

  const recipe = recipes.find((recipe) => recipe.id === id);

  return (
    <>
      <StyledLink href='/'>Back to recipe list</StyledLink>
      <RecipeDetails recipe={recipe} />
    </>
  );
}

const StyledLink = styled(Link)`
  font: var(--font-caption);
  color: var(--color-primary-2);
`;
