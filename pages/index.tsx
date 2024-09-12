import QuickLinks from '@/components/QuickLinks';
import RecipeList from '@/components/RecipeList';
import { AppBaseProps } from '@/types';
import IsLoading from '@/components/IsLoading';
import styled from 'styled-components';
import { media } from '@/styles';

export default function HomePage({
  recipes,
  onToggleFavorite,
  favoriteRecipesList,
  isLoading,
}: AppBaseProps) {
  return (
    <main>
      <QuickLinksWrapper>
        <QuickLinks />
      </QuickLinksWrapper>
      {isLoading ? (
        <IsLoading />
      ) : (
        <RecipeList
          onToggleFavorite={onToggleFavorite}
          recipes={recipes || []}
          favoriteRecipesList={favoriteRecipesList}
        />
      )}
    </main>
  );
}

const QuickLinksWrapper = styled.section`
  display: block;

  @media ${media.large} {
    display: none;
  }
`;
