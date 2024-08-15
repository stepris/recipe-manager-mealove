import RecipePreview from '@/components/RecipePreview';
import styled from 'styled-components';
import { RecipeDetailsPageProps } from '@/types';
import MainCategories from '@/components/MainCategories';
import { useState } from 'react';

export default function RecipeList({
  recipes,
  onToggleFavorite,
  favoriteRecipesList,
}: RecipeDetailsPageProps) {
  const [activeFilter, setActiveFilter] = useState(null);

  const handleChangeFilter = (category) =>
    setActiveFilter((prevFilter) =>
      prevFilter === category ? null : category
    );

  const filteredRecipes = activeFilter
    ? recipes.filter((recipe) => recipe.category === activeFilter)
    : recipes;

  return (
    <section>
      <MainCategories
        onChangeFilter={handleChangeFilter}
        activeFilter={activeFilter}
      />
      <StyledRecipeList>
        {filteredRecipes.map((recipe) => {
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
