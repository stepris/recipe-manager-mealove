import styled from 'styled-components';
import Link from 'next/link';

export default function NavigationList() {
  return (
    <nav>
      <StyledList>
        <StyledListElement>
          <StyledLink href={'/'}>Explore</StyledLink>
        </StyledListElement>
        <StyledListElement>
          <StyledLink href={'/favorites'}>Favorites</StyledLink>
        </StyledListElement>
      </StyledList>
    </nav>
  );
}

const StyledList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-1);
  height: calc(100vh - 55px);
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