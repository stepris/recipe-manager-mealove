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

const StyledRecipeList = styled.ul``;
