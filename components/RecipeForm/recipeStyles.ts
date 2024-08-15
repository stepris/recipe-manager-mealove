import styled, { css } from 'styled-components';
import { StyledFormComponentProps } from '@/types';

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-5);
  padding: var(--spacing-5);
`;

export const StyledInputElement = styled.div`
  display: flex;
  flex-direction: column;
`;

export const StyledElementGroup = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: var(--spacing-2);
`;

export const StyledH2 = styled.h2`
  font: var(--font-headline-2);
  padding-bottom: var(--spacing-2);
`;

export const StyledH3 = styled.h3`
  font: var(--font-headline-3);
`;

export const StyledFormText = styled.p`
  font: var(--font-input);
`;

export const StyledLabel = styled.label`
  font: var(--font-headline-2);
  padding-bottom: var(--spacing-2);
`;

export const StyledLabelSmall = styled.label`
  font: var(--font-headline-3);
`;

export const StyledCellWrapper = styled.div`
  display: grid;
  grid-template-columns: 1.8fr 2fr 4fr;
`;

export const StyledTableCell = styled.input<StyledFormComponentProps>`
  font: var(--font-input);
  height: 2rem;
  border: 1px solid var(--color-neutral-4-alpha25);
  border-radius: var(--radius-s);
  margin-top: var(--spacing-1);
  text-align: center;
  ${({ $isMedium }) =>
    $isMedium &&
    css`
      width: 60px;
    `}
  ${({ $isLarge }) =>
    $isLarge &&
    css`
      width: 100%;
    `}
      ${({ $leftAlign }) =>
    $leftAlign &&
    css`
      text-align: left;
    `}
`;

export const StyledInput = styled.input<StyledFormComponentProps>`
  height: 2rem;
  border: 1px solid var(--color-neutral-4-alpha25);
  border-radius: var(--radius-s);
  text-align: center;
  font: var(--font-input);
  ${({ $isMedium }) =>
    $isMedium &&
    css`
      width: 60px;
    `}
  ${({ $leftAlign }) =>
    $leftAlign &&
    css`
      text-align: left;
    `}
`;

export const StyledDropdown = styled.select`
  font: var(--font-input);
  height: 2rem;
  border: 1px solid var(--color-neutral-4-alpha25);
  border-radius: var(--radius-s);
  margin-top: var(--spacing-1);
  width: 70px;
`;

export const StyledTextArea = styled.textarea`
  border: 1px solid var(--color-neutral-4-alpha25);
  border-radius: var(--radius-s);
`;

export const StyledSubmitButton = styled.button`
  display: block;
  padding: var(--spacing-2);
  color: var(--color-neutral-1);
  background-color: var(--color-primary-1);
  font: var(--font-headline-2);
  border-radius: var(--radius-s);
  &:hover {
    background-color: var(--color-primary-2);
  }
`;

export const StyledButtonWrapper = styled.div`
  display: inline-block;
  align-self: center;
`;

export const StyledCategoryContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: var(--spacing-1);
`;

export const StyledCategoryElement = styled.div`
  display: flex;
  flex-direction: column-reverse;
  text-align: center;
  font: var(--font-headline-3);
  background-color: var(--color-neutral-2);
  border-radius: var(--radius-m);
  height: 60px;
  width: 60px;
`;
