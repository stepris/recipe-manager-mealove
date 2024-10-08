import FilledHeart from '@/public/icons/ic_fluent_heart_24_filled.svg';
import styled, { css } from 'styled-components';
import { FavoriteButtonProps, FavoriteButtonLinkProps } from '@/types';

export default function FavoriteButton({
  $isDetailPage,
  onToggleFavorite,
  isFavorite,
}: FavoriteButtonProps) {
  return (
    <StyledButton
      $isDetailPage={$isDetailPage}
      onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();
        onToggleFavorite();
      }}
      $isFavorite={isFavorite}
    >
      <FilledHeart />
    </StyledButton>
  );
}

const StyledButton = styled.button<FavoriteButtonLinkProps>`
  background-color: var(--color-neutral-1-alpha90);
  border-radius: var(--radius-s);
  height: 40px;
  width: 40px;
  padding: var(--spacing-1);
  position: absolute;
  z-index: 1;
  right: var(--spacing-1);
  top: var(--spacing-1);
  svg {
    path {
      fill: ${(props) =>
        props.$isFavorite ? 'var(--color-primary-1)' : 'none'};
      stroke: var(--color-primary-1);
    }
  }
  &:hover {
    outline: 2px solid var(--color-primary-1);
    transition: all 0.1s ease-in-out;
    filter: drop-shadow(0.1rem 0.1rem 0.1rem var(--color-neutral-3-alpha50));
  }
  ${({ $isDetailPage }) =>
    $isDetailPage &&
    css`
      position: static;
      height: 50px;
      width: 50px;
      &:hover {
        background-color: var(--color-neutral-1);
      }
    `}
`;
