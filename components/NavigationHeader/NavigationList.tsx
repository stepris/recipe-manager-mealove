import styled from 'styled-components';
import Link from 'next/link';

export default function NavigationList({ onToggleNav }) {
  return (
    <nav>
      <StyledList>
        <StyledListElement>
          <StyledLink href={'/'} onClick={onToggleNav}>
            Explore
          </StyledLink>
        </StyledListElement>
        <StyledListElement>
          <StyledLink href={'/favorites'} onClick={onToggleNav}>
            Favorites
          </StyledLink>
        </StyledListElement>
      </StyledList>
    </nav>
  );
}

const StyledList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-1);
  /* This is the calculated navigation height, referecned from Navigation.tsx */
  height: calc(100vh - (var(--spacing-10) + var(--spacing-1)));
`;
const StyledListElement = styled.li`
  flex-grow: 1;
  background-color: var(--color-primary-1);
  text-transform: uppercase;
  font: var(--font-nav);
  color: var(--color-neutral-1);
  text-align: center;
  letter-spacing: var(--letter-spacing-s);
`;

const StyledLink = styled(Link)`
  display: block;
  height: 100%;
  align-content: center;
`;