import styled from 'styled-components';
import FilledHeart from '@/public/icons/ic_fluent_heart_24_filled.svg';

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
        Add recipes by clicking the <StyledFilledHeart /> in the top-right
        corner on the Explore or Detail page.
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
  position: relative;
`;

const StyledParagraph = styled.p`
  padding-inline: var(--spacing-5);
  font: var(--font-base);
`;

const StyledSpan = styled.span`
  font: var(--font-headline-1);
  color: var(--color-primary-1);
`;

const StyledFilledHeart = styled(FilledHeart)`
  width: 25px;
  height: 25px;
  display: inline;
  color: var(--color-primary-1);
`;
