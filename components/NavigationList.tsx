import styled from 'styled-components';

export default function NavigationList() {
  return (
    <StyledList>
      <StyledListElement>Explore</StyledListElement>
      <StyledListElement>Favorites</StyledListElement>
    </StyledList>
  );
}

const StyledList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-1);
  height: calc(100vh - 55px);
`;

const StyledListElement = styled.li`
  text-transform: uppercase;
  font: var(--font-nav);
  background-color: var(--color-primary-1);
  color: var(--color-neutral-1);
  flex-grow: 1;
  align-content: center;
  text-align: center;
  letter-spacing: var(--letter-spacing-s);
`;
