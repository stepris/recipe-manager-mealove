import Navigation from '@/components/Navigation';
import styled from 'styled-components';

export default function Layout({ children }) {
  return (
    <StyledWrapper>
      <Navigation />
      <div>{children}</div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  background-color: var(--color-neutral-1);
  min-height: 100vh;
`;
