import styled, { css } from 'styled-components';
import SaveIcon from '@/public/icons/buttons/ic_fluent_save_24_filled.svg';
import EditIcon from '@/public/icons/buttons/ic_fluent_edit_24_filled.svg';
import DismissSquareIcon from '@/public/icons/buttons/ic_fluent_dismiss_square_24_filled.svg';
import DismissCircleIcon from '@/public/icons/buttons/ic_fluent_dismiss_circle_24_filled.svg';
import DeleteIcon from '@/public/icons/buttons/ic_fluent_delete_24_filled.svg';
import CheckIcon from '@/public/icons/buttons/ic_fluent_checkmark_circle_24_filled.svg';
import { ButtonTypeProps, StyledButtonProps } from '@/types/Button.types';

export default function Button({
  children,
  variant,
  type,
  onClickBehavior,
}: ButtonTypeProps) {
  const buttonIcon = () => {
    switch (variant) {
      case '$submit':
        return <SaveIcon />;
      case '$edit':
        return <EditIcon />;
      case '$update':
        return <SaveIcon />;
      case '$cancel':
        return <DismissSquareIcon />;
      case '$delete':
        return <DeleteIcon />;
      case '$yes':
        return <CheckIcon />;
      case '$no':
        return <DismissCircleIcon />;
      default:
        return null;
    }
  };
  return (
    <StyledButton
      $variant={variant}
      onClick={onClickBehavior}
      type={type || 'button'}
    >
      {buttonIcon()}
      {children}
    </StyledButton>
  );
}

const StyledButton = styled.button<StyledButtonProps>`
  font: var(--font-caption);
  color: var(--color-neutral-1);
  text-transform: uppercase;
  display: flex;
  align-items: center;
  border-radius: var(--radius-m);
  height: var(--spacing-8);
  padding: var(--spacing-2);
  padding-right: var(--spacing-3);
  transition: all 0.1s ease-in-out;
  filter: drop-shadow(0.2rem 0.2rem 0.2rem var(--color-neutral-3-alpha50));

  svg {
    path {
      fill: var(--color-neutral-1);
    }
    height: 20px;
    width: 20px;
  }

  ${({ $variant }) => {
    switch ($variant) {
      case '$submit':
        return css`
          background-color: var(--color-primary-1);
          gap: var(--spacing-1);
          &:hover {
            background-color: var(--color-primary-2);
          }
        `;
      case '$edit':
        return css`
          background-color: var(--color-primary-1);
          gap: var(--spacing-1);
          &:hover {
            background-color: var(--color-primary-2);
          }
        `;
      case '$update':
        return css`
          background-color: var(--color-primary-1);
          gap: var(--spacing-1);
          &:hover {
            background-color: var(--color-primary-2);
          }
        `;
      case '$cancel':
        return css`
          background-color: var(--color-neutral-4);
          gap: var(--spacing-1);
          &:hover {
            background-color: var(--color-neutral-4-alpha25);
          }
        `;
      case '$delete':
        return css`
          background-color: var(--color-feedback-warning);
          gap: var(--spacing-1);
          &:hover {
            background-color: var(--color-feedback-warning-hover);
          }
        `;
      case '$yes':
        return css`
          background-color: var(--color-feedback-success);
          gap: var(--spacing-1);
          &:hover {
            background-color: var(--color-feedback-success-hover);
          }
        `;
      case '$no':
        return css`
          background-color: var(--color-feedback-warning);
          gap: var(--spacing-1);
          &:hover {
            background-color: var(--color-feedback-warning-hover);
          }
        `;
    }
  }}
`;
