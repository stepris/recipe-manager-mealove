import styled, { css } from 'styled-components';

export default function Button({ children, variant }) {
  const buttonVariants = (variant) => {
    switch (variant) {
      case 'submit':
        return css`
          background-color: var(--color-primary-1);
        `;
      case 'edit':
        return css`
          background-color: var(--color-primary-1);
        `;
      case 'update':
        return css`
          background-color: var(--color-primary-1);
        `;
      case 'cancel':
        return css`
          background-color: var(--color-primary-1);
        `;
      case 'delete':
        return css`
          background-color: var(--color-primary-1);
        `;
      case 'yes':
        return css`
          background-color: var(--color-primary-1);
        `;
      case 'no':
        return css`
          background-color: var(--color-primary-1);
        `;
    }
  };

  return <StyledButton>{children}</StyledButton>;
}

const StyledButton = styled.button``;
