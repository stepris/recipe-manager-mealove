import RecipePreview from '@/components/RecipePreview';
import styled from 'styled-components';
import { Recipe } from '@/types';

export default function RecipeList({
  recipes,
  onToggleFavorite,
  favoriteRecipesList,
}) {
  return (
    <section>
      <StyledRecipeList>
        {recipes.map((recipe) => {
          return (
            <RecipePreview
              key={recipe.id}
              recipe={recipe}
              onToggleFavorite={onToggleFavorite}
              isFavorite={favoriteRecipesList.includes(recipe.id)}
            />
          );
        })}
      </StyledRecipeList>
    </section>
  );
}

const StyledRecipeList = styled.ul`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: var(--spacing-5);
  padding: var(--spacing-5) 0;
`;
