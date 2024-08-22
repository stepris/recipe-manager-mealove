import Link from 'next/link';
import styled from 'styled-components';

export default function NoUserRecipes() {
  return (
    <StyledArticle>
      <StyledParagraph>
        <StyledSpan>
          Sorry :( <br />
          You have not created any recipes yet.
        </StyledSpan>
      </StyledParagraph>
      <StyledParagraph>
        You can create recipes <StyledLink href='/create'>here</StyledLink>.
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

const StyledLink = styled(Link)`
  color: var(--color-primary-1);
  font: var(--font-headline-2);
  &:hover {
    color: var(--color-primary-2);
  }
`;
