import FilledHeart from '@/public/icons/ic_fluent_heart_24_filled.svg';
import styled from 'styled-components';

export default function FavoriteButton() {
  return (
    <>
      <StyledButton>
        <FilledHeart />
      </StyledButton>
    </>
  );
}

const StyledButton = styled.button`
  background-color: var(--color-neutral-1-alpha90);
  border-radius: var(--radius-s);
  height: 40px;
  width: 40px;
  padding: var(--spacing-1);
  position: absolute;
  z-index: 1;
  right: var(--spacing-2);
  top: var(--spacing-1);
  svg {
    path {
      fill: var(--color-primary-1);
      stroke: var(--color-primary-1);
    }
  }
`;
