import RecipePreview from '@/components/RecipePreview';
import styled from 'styled-components';
import { RecipeDetailsPageProps } from '@/types';
import MainCategories from '@/components/MainCategories';

export default function RecipeList({
  recipes,
  onToggleFavorite,
  favoriteRecipesList,
}: RecipeDetailsPageProps) {
  return (
    <section>
      <MainCategories />
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
