import styled, { css } from 'styled-components';
import Image from 'next/image';

export default function Button({ children, variant, type }) {
  return (
    <StyledButton variant={variant}>
      {buttonType(type)}
      {children}
    </StyledButton>
  );
}

const buttonVariants = (variant) => {
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
};

const buttonType = (type) => {
  switch (type) {
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
      return;
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

const StyledButton = styled.button`
  font: var(--font-caption);
  text-transform: uppercase;
  display: flex;
  border-radius: var(--radius-m);
  padding: 0.3rem;

  ${(props) => buttonVariants(props.variant)}
`;
