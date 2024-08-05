import Link from 'next/link';
import styled, { css } from 'styled-components';
import { QuickLinksProps, LinkProps } from '@/types';

export default function QuickLinks({
  $isExplorePage,
  $isFavoritesPage,
}: QuickLinksProps) {
  return (
    <LinkWrapper>
      <StyledLinkContainer $isExplorePage={$isExplorePage}>
        <StyledLink href={'/'} $isExplorePage={$isExplorePage}>
          Explore
        </StyledLink>
      </StyledLinkContainer>
      <StyledLinkContainer $isFavoritesPage={$isFavoritesPage}>
        <StyledLink href={'/favorites'} $isFavoritesPage={$isFavoritesPage}>
          Favorites
        </StyledLink>
      </StyledLinkContainer>
    </LinkWrapper>
  );
}

const LinkWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  padding-inline: var(--spacing-5);
  padding-block: var(--spacing-2);
`;

const StyledLinkContainer = styled.div<LinkProps>`
  border-bottom: solid 2px var(--color-neutral-3-alpha50);
  text-align: center;
  flex-basis: 50%;

  ${({ $isExplorePage, $isFavoritesPage }) =>
    ($isExplorePage || $isFavoritesPage) &&
    css`
      border-color: var(--color-primary-1);
    `}
`;

const StyledLink = styled(Link)<LinkProps>`
  display: block;
  font: var(--font-headline-1);
  color: var(--color-neutral-3-alpha50);
  padding-top: var(--spacing-1);

  ${({ $isExplorePage, $isFavoritesPage }) =>
    ($isExplorePage || $isFavoritesPage) &&
    css`
      color: var(--color-primary-1);
    `}
`;
