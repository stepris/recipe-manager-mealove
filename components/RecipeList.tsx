/* import recipes from '@/lib/recipes.json'; */
import RecipePreview from '@/components/RecipePreview';
import styled from 'styled-components';
import { Recipe } from '@/types';

type RecipeListProps = {
  recipes: Recipe[];
  onToggleFavorite: string[];
};

export default function RecipeList({
  recipes,
  onToggleFavorite,
}: RecipeListProps) {
  return (
    <section>
      <StyledRecipeList>
        {recipes.map((recipe) => {
          return (
            <RecipePreview
              key={recipe.id}
              recipe={recipe}
              onToggleFavorite={onToggleFavorite}
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
