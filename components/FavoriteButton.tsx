import { FavoriteButtonProps } from '@/types';
import FilledHeart from '@/public/icons/ic_fluent_heart_24_filled.svg';
import styled, { css } from 'styled-components';

export default function FavoriteButton({ $isDetailPage }: FavoriteButtonProps) {
  return (
    <>
      <StyledButton $isDetailPage={$isDetailPage}>
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
  ${({ $isDetailPage }) =>
    $isDetailPage &&
    css`
      position: static;
      height: 50px;
      width: 50px;
    `}
`;
