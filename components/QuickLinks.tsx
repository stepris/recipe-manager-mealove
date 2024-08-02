import Link from 'next/link';
import styled, { css } from 'styled-components';

export default function QuickLinks({ $isExplore, $isFavorites }) {
  return (
    <>
      <LinkWrapper>
        <StyledLinkContainer $isExplore={$isExplore}>
          <StyledLink href={'/'} $isExplore={$isExplore}>
            Explore
          </StyledLink>
        </StyledLinkContainer>
        <StyledLinkContainer $isFavorites={$isFavorites}>
          <StyledLink href={'/favorites'} $isFavorites={$isFavorites}>
            Favorites
          </StyledLink>
        </StyledLinkContainer>
      </LinkWrapper>
    </>
  );
}

const LinkWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  padding-inline: var(--spacing-5);
  padding-block: var(--spacing-2);
`;

const StyledLinkContainer = styled.div`
  border-bottom: solid 2px var(--color-neutral-3-alpha50);
  text-align: center;
  flex-basis: 50%;

  ${({ $isExplore }) =>
    $isExplore &&
    css`
      border-color: var(--color-primary-1);
    `}
  ${({ $isFavorites }) =>
    $isFavorites &&
    css`
      border-color: var(--color-primary-1);
    `}
`;

const StyledLink = styled(Link)`
  display: block;
  font: var(--font-headline-1);
  color: var(--color-neutral-3-alpha50);
  padding-top: var(--spacing-1);

  ${({ $isExplore }) =>
    $isExplore &&
    css`
      color: var(--color-primary-1);
    `}
  ${({ $isFavorites }) =>
    $isFavorites &&
    css`
      color: var(--color-primary-1);
    `}
`;
