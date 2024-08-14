import styled, { css } from 'styled-components';
import SaveIcon from '@/public/icons/buttons/ic_fluent_save_24_filled.svg';
import EditIcon from '@/public/icons/buttons/ic_fluent_edit_24_filled.svg';
import DismissIconSquare from '@/public/icons/buttons/ic_fluent_dismiss_square_24_filled.svg';
import DismissIconCircle from '@/public/icons/buttons/ic_fluent_dismiss_circle_24_filled.svg';
import CheckIcon from '@/public/icons/buttons/ic_fluent_checkmark_circle_24_filled.svg';

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
      return <SaveIcon />;
    case '$edit':
      return <SaveIcon />;
    case '$update':
      return <EditIcon />;
    case '$cancel':
      return <DismissIconSquare />;
    case '$delete':
      return;
    case '$yes':
      return <CheckIcon />;
    case '$no':
      return <DismissIconCircle />;
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
