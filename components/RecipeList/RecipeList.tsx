import recipes from '@/lib/recipes.json';
import RecipePreview from '../RecipePreview/RecipePreview';
import styled from 'styled-components';

export default function RecipeList() {
  return (
    <section>
      <StyledRecipeList>
        {recipes.map((recipe) => {
          const { id } = recipe;
          return <RecipePreview key={id} recipe={recipe} />;
        })}
      </StyledRecipeList>
    </section>
  );
}

const StyledRecipeList = styled.ul`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: var(--gap-s);
  padding: var(--gap-s) 0;
`;
