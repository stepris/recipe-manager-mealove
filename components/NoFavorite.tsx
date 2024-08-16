import styled from 'styled-components';

export default function NoFavorite() {
  return (
    <StyledArticle>
      <p>Sorry :(</p>
      <p>There are no recipes in your favorite-list yet.</p>
      <p>
        You can add recipes, by clicking the heart 🥰 Icon in the right upper
        corner of each recipe on the Explore-Page or on the Detail-Page.
      </p>
    </StyledArticle>
  );
}

const StyledArticle = styled.article``;
