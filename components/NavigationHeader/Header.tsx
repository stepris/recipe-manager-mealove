import NavigationIcon from '@/components/NavigationHeader/NavigationIcon';
import styled from 'styled-components';
import Link from 'next/link';

export default function Header({ onToggleNav }) {
  return (
    <StyledHeader>
      <NavigationIcon onToggleNav={onToggleNav} />
      <Link href={'/'}>
        <StyledAppTitle>meaLove</StyledAppTitle>
      </Link>
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
  margin-bottom: var(--spacing-1);
`;

const StyledAppTitle = styled.h2`
  font: var(--font-nav);
  letter-spacing: var(--letter-spacing-s);
`;
