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
  align-items: stretch;
  gap: var(--spacing-1);
  outline: var(--debug);
  height: 100dvw;
`;

const StyledListElement = styled.li`
  text-transform: uppercase;
  font: var(--font-nav);
  background-color: var(--color-primary-1);
  color: var(--color-neutral-1);
  outline: var(--debug);
  height: 100%;
`;
