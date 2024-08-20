import styled, { keyframes } from 'styled-components';
import ArrowClockwise from '@/public/icons/ArrowClockwise.svg';

export default function IsLoading() {
  return (
    <StyledContainer>
      <StyledArrowClockwise />
    </StyledContainer>
  );
}

const StyledContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 82vh;
`;

const rotate = keyframes`
  from {
    transform: rotate(0deg)
  }
  to {
    transform: rotate(360deg)
  }
`;

const StyledArrowClockwise = styled(ArrowClockwise)`
  width: 50px;
  color: var(--color-primary-1);
  animation: ${rotate} 1s linear infinite;
`;
