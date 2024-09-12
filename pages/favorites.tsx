import QuickLinks from '@/components/QuickLinks';
import RecipeList from '@/components/RecipeList';
import NoFavorite from '@/components/NoFavorite';
import { AppBaseProps } from '@/types';
import styled from 'styled-components';
import { media } from '@/styles';

export default function Favorites({
  favoriteRecipes,
  onToggleFavorite,
  favoriteRecipesList,
}: AppBaseProps) {
  return (
    <>
      <QuickLinksWrapper>
        <QuickLinks />
      </QuickLinksWrapper>
      {favoriteRecipesList.length !== 0 ? (
        <RecipeList
          recipes={favoriteRecipes || []}
          onToggleFavorite={onToggleFavorite}
          favoriteRecipesList={favoriteRecipesList || []}
        />
      ) : (
        <NoFavorite />
      )}
    </>
  );
}

const QuickLinksWrapper = styled.section`
  display: block;

  @media ${media.large} {
    display: none;
  }
`;
