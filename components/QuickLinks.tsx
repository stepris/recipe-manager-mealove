import Link from 'next/link';
import styled from 'styled-components';
import { LinkProps } from '@/types';
import { useRouter } from 'next/router';

export default function QuickLinks() {
  const router = useRouter();
  const isExplorePage = router.pathname === '/';
  const isFavoritesPage = router.pathname === '/favorites';

  return (
    <LinkWrapper>
      <StyledLinkContainer $isActive={isExplorePage}>
        <StyledLink href='/' $isActive={isExplorePage}>
          Explore
        </StyledLink>
      </StyledLinkContainer>
      <StyledLinkContainer $isActive={isFavoritesPage}>
        <StyledLink href='/favorites' $isActive={isFavoritesPage}>
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
  border-color: ${(props) => (props.$isActive ? 'var(--color-primary-1)' : '')};
  &:hover {
    border-color: var(--color-primary-1);
  }
`;

const StyledLink = styled(Link)<LinkProps>`
  display: block;
  font: var(--font-headline-1);
  color: var(--color-neutral-3-alpha50);
  padding-top: var(--spacing-1);
  color: ${(props) => (props.$isActive ? 'var(--color-primary-1)' : '')};
  &:hover {
    color: var(--color-primary-1);
  }
`;
