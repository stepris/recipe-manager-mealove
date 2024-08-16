import styled from 'styled-components';

export default function NoFavorite() {
  return (
    <StyledArticle>
      <StyledParagraph>
        <StyledSpan>
          Sorry :( <br />
          There are no recipes in your favorite-list yet.
        </StyledSpan>
      </StyledParagraph>
      <StyledParagraph>
        You can add recipes, by clicking the 🥰 in the right upper corner of
        each recipe on the Explore-Page or on the Detail-Page.
      </StyledParagraph>
    </StyledArticle>
  );
}

const StyledArticle = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 80vh;
  gap: var(--spacing-5);
  text-align: center;
`;

const StyledParagraph = styled.p`
  padding-inline: var(--spacing-5);
  font: var(--font-base);
`;

const StyledSpan = styled.span`
  font: var(--font-headline-2);
  color: var(--color-primary-1);
`;
