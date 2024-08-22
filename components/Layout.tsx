import Header from '@/components/NavigationHeader/Header';
import styled from 'styled-components';
import NavigationList from './NavigationHeader/NavigationList';
import { useState } from 'react';
import { ChildrenLayoutProps } from '@/types';

export default function Layout({ children }: ChildrenLayoutProps) {
  const [showNav, setShowNav] = useState(false);

  const handleToggleNav = () => {
    setShowNav(!showNav);
  };

  const handleCloseNav = () => {
    setShowNav(false);
  };

  return (
    <StyledWrapper>
      <Header onToggleNav={handleToggleNav} onCloseNav={handleCloseNav} />
      {showNav ? (
        <NavigationList onToggleNav={handleToggleNav} />
      ) : (
        <div>{children}</div>
      )}
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  background-color: var(--color-neutral-1);
  min-height: 100vh;
`;
