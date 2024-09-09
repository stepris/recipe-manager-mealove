import styled from 'styled-components';
import Link from 'next/link';
import { NavigationListProps } from '@/types';
import { media } from '@/styles';
import { useMediaQuery } from 'react-responsive';

export default function NavigationList({ onToggleNav }: NavigationListProps) {
  const isLargeScreen = useMediaQuery({ query: '(min-width: 1024px)' });
  return (
    <nav>
      <StyledList>
        <StyledListElement>
          <StyledLink href='/' onClick={onToggleNav}>
            Explore
          </StyledLink>
        </StyledListElement>
        <StyledListElement>
          <StyledLink href='/create' onClick={onToggleNav}>
            Create Recipe
          </StyledLink>
        </StyledListElement>
        <StyledListElement>
          <StyledLink href='/myrecipes' onClick={onToggleNav}>
            My Recipes
          </StyledLink>
        </StyledListElement>
        <StyledListElement>
          <StyledLink href='/favorites' onClick={onToggleNav}>
            Favorites
          </StyledLink>
        </StyledListElement>
        {!isLargeScreen && <NavSpacer />}
      </StyledList>
    </nav>
  );
}

const StyledList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-1);
  /* This is the calculated navigation height, referenced from Header Component */
  height: calc(100vh - (var(--spacing-10) + var(--spacing-1)));
  @media ${media.large} {
    flex-direction: row;
    align-items: center;
    align-content: center;
    height: 100%;
    min-width: 700px;
  }
`;
const StyledListElement = styled.li`
  flex-grow: 1;
  background-color: var(--color-primary-1);
  text-transform: uppercase;
  font: var(--font-nav);
  color: var(--color-neutral-1);
  text-align: center;
  letter-spacing: var(--letter-spacing-s);
  &:hover {
    background-color: var(--color-primary-2);
  }
  @media ${media.large} {
    text-align: center;
    &:hover {
      background-color: transparent;
      color: var(--color-primary-2);
    }
  }
`;

const StyledLink = styled(Link)`
  display: block;
  height: 100%;
  align-content: center;
`;

const NavSpacer = styled.div`
  background-color: var(--color-primary-1);
  flex-grow: 10;
`;
