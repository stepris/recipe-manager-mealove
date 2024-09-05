import RecipePreview from '@/components/RecipePreview';
import styled from 'styled-components';
import { RecipeListPageProps, Category } from '@/types/RecipeList.types';
import MainCategories from '@/components/MainCategories';
import { useState } from 'react';
import { media } from '@/styles';

export default function RecipeList({
  recipes,
  onToggleFavorite,
  favoriteRecipesList,
}: RecipeListPageProps) {
  const [activeFilter, setActiveFilter] = useState<Category>(null);

  if (!recipes) return null;

  const handleChangeFilter = (category: Category) =>
    setActiveFilter((prevFilter: Category) =>
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
          if (!recipe._id) return null;
          return (
            <RecipePreview
              key={recipe._id}
              recipe={recipe}
              onToggleFavorite={onToggleFavorite}
              isFavorite={favoriteRecipesList.includes(recipe._id)}
            />
          );
        })}
      </StyledRecipeList>
    </section>
  );
}

const StyledRecipeList = styled.ul`
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  gap: var(--spacing-5);
  padding: var(--spacing-5);
  justify-content: center;

  @media ${media.small} {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }

  @media ${media.medium} {
    grid-template-columns: repeat(3, 1fr);
  }

  @media ${media.large} {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
  }
`;
