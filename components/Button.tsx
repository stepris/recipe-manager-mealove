import styled, { css } from 'styled-components';

export default function Button({ children, variant }) {
  return <StyledButton variant={variant}>{children}</StyledButton>;
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

const StyledButton = styled.button`
  font: var(--font-caption);
  text-transform: uppercase;
  border-radius: var(--radius-m);
  padding: 0.3rem;

  ${(props) => buttonVariants(props.variant)}
`;
