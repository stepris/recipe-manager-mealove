import styled, { css } from 'styled-components';
import Image from 'next/image';

export default function Button({ children, variant, type, onClickBehavior }) {
  const buttonIcon = () => {
    switch (variant) {
      case '$submit':
        return (
          <Image
            src='/icons/buttons/ic_fluent_save_24_filled.svg'
            width={20}
            height={20}
            alt='submit'
          />
        );
      case '$edit':
        return (
          <Image
            src='/icons/buttons/ic_fluent_save_24_filled.svg'
            width={20}
            height={20}
            alt='edit'
          />
        );

      case '$update':
        return (
          <Image
            src='/icons/buttons/ic_fluent_save_24_filled.svg'
            width={20}
            height={20}
            alt='update'
          />
        );
      case '$cancel':
        return (
          <Image
            src='/icons/buttons/ic_fluent_dismiss_square_24_filled.svg'
            width={20}
            height={20}
            alt='cancel'
          />
        );
      case '$delete':
        return (
          <Image
            src='/icons/buttons/ic_fluent_delete_24_filled.svg'
            width={20}
            height={20}
            alt='cancel'
          />
        );
      case '$yes':
        return (
          <Image
            src='/icons/buttons/ic_fluent_checkmark_circle_24_filled.svg'
            width={20}
            height={20}
            alt='yes'
          />
        );
      case '$no':
        return (
          <Image
            src='/icons/buttons/ic_fluent_dismiss_circle_24_filled.svg'
            width={20}
            height={20}
            alt='no'
          />
        );
      default:
        return null;
    }
  };
  return (
    <StyledButton
      variant={variant}
      onClick={onClickBehavior}
      type={type || 'button'}
    >
      {buttonIcon()}
      {children}
    </StyledButton>
  );
}

/* const buttonVariants = (variant) => {
  switch (variant) {
    case '$submit':
      return css`
        color: var(--color-neutral-1);
        background-color: var(--color-primary-1);
      `;
    case '$edit':
      return css`
        color: var(--color-neutral-1);
        background-color: var(--color-primary-1);
      `;
    case '$update':
      return css`
        color: var(--color-neutral-1);
        background-color: var(--color-primary-1);
      `;
    case '$cancel':
      return css`
        color: var(--color-neutral-1);
        background-color: var(--color-neutral-4);
      `;
    case '$delete':
      return css`
        color: var(--color-neutral-1);
        background-color: var(--color-feedback-warning);
      `;
    case '$yes':
      return css`
        color: var(--color-neutral-1);
        background-color: var(--color-feedback-success);
      `;
    case '$no':
      return css`
        color: var(--color-neutral-1);
        background-color: var(--color-feedback-warning);
      `;
  }
}; */

const StyledButton = styled.button`
  font: var(--font-caption);
  color: var(--color-neutral-1);
  text-transform: uppercase;
  display: flex;
  align-items: center;
  border-radius: var(--radius-m);
  padding: 0.3rem 0.6rem;

  svg {
    fill: var(--color-neutral-1);
  }

  ${({ variant }) => {
    switch (variant) {
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
            background-color: var(--color-primary-2);
          }
        `;
      case '$yes':
        return css`
          background-color: var(--color-feedback-success);
          gap: var(--spacing-1);
        `;
      case '$no':
        return css`
          background-color: var(--color-feedback-warning);
          gap: var(--spacing-1);
          &:hover {
            background-color: var(--color-primary-2);
          }
        `;
    }
  }}
`;
