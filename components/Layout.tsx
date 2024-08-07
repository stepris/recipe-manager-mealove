import Header from '@/components/NavigationHeader/Header';
import styled from 'styled-components';
import NavigationList from './NavigationHeader/NavigationList';
import { useState } from 'react';

export default function Layout({ children }) {
  const [showNav, setShowNav] = useState(false);

  const handleToggleNav = () => {
    setShowNav(!showNav);
  };

  return (
    <StyledWrapper>
      <Header onToggleNav={handleToggleNav} />
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
