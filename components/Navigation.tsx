import NavigationMenu from './NavigationMenu';
import styled from 'styled-components';

export default function Navigation() {
  return (
    <StyledHeader>
      <NavigationMenu />
      <StyledAppTitle>meaLove</StyledAppTitle>
    </StyledHeader>
  );
}

const StyledHeader = styled.header`
  background-color: var(--color-primary-1);
  color: var(--color-neutral-1);
  min-height: var(--spacing-10);
  display: flex;
  align-items: center;
  gap: var(--spacing-3);
  padding-inline: var(--spacing-5);
`;

const StyledAppTitle = styled.h2`
  font: var(--font-nav);
  letter-spacing: 0.1rem;
`;
