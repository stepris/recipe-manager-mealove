import styled, { css } from 'styled-components';
import {
  StyledFormComponentProps,
  StyledImagePreviewProps,
  StyledImageUpladContainerProps,
} from '@/types/recipeStyles.types';
import UploadCloud from '@/public/icons/UploadCloud.svg';
import Image from 'next/image';

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

export const StyledH3Quantity = styled(StyledH3)`
  width: 52px;
`;

export const StyledH3Unit = styled(StyledH3)`
  width: 63px;
`;

export const StyledH3Ingredient = styled(StyledH3)`
  width: 100%;
  text-align: left;
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
  grid-template-columns: 1fr 1.5fr 4fr 0.5fr;
  gap: 3px;
  align-items: center;
`;

export const StyledTableCell = styled.input<StyledFormComponentProps>`
  font: var(--font-input);
  height: 2rem;
  padding-left: var(--spacing-1);
  padding-right: var(--spacing-1);
  border: 1px solid var(--color-neutral-4-alpha25);
  border-radius: var(--radius-s);
  margin-top: var(--spacing-1);
  text-align: center;
  ${({ $isMedium }) =>
    $isMedium &&
    css`
      width: 100%;
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

export const StyledAddIngredientButton = styled.button`
  width: 30px;
  height: 30px;
  color: var(--color-primary-1);
  align-self: center;
  padding: 2px;
  padding-top: var(--spacing-1);
  margin-top: 3px;
  &:hover {
    color: var(--color-primary-2);
  }
`;

export const StyledDeleteIngredientButton = styled.button`
  display: flex;
  place-items: center;
  width: 30px;
  height: 30px;
  border: 2px solid white;
  border-radius: 50%;
  background-color: transparent;
  padding: 4px;
  margin-top: var(--spacing-1);
  margin-left: 1px;
  &:hover {
    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.2), 0 0 4px 2px var(--color-neutral-2);
  }
  &:focus {
    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.2), 0 0 4px 2px var(--color-neutral-2);
  }
  &:active {
    transform: scale(0.95);
    background-color: var(--color-neutral-1-alpha90);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3), 0 0 6px 3px var(--color-neutral-2);
  }
`;

export const StyledInput = styled.input<StyledFormComponentProps>`
  height: 2rem;
  padding-left: var(--spacing-1);
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
  /* Either or width is fine here */
  /* width: fit-content; */
  width: 100%;
  font: var(--font-input);
  height: 2rem;
  padding-left: var(--spacing-1);
  border: 1px solid var(--color-neutral-4-alpha25);
  border-radius: var(--radius-s);
  margin-top: var(--spacing-1);
`;

export const StyledTextArea = styled.textarea`
  padding: var(--spacing-1);
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
  display: flex;
  flex-direction: column;
  gap: var(--spacing-3);
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

export const StyledImageUpladContainer = styled.div<StyledImageUpladContainerProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 2px dashed var(--color-primary-1);
  border-radius: var(--radius-s);
  padding: 20px;
  cursor: pointer;
  background-color: ${({ $isDragOver }) =>
    $isDragOver ? 'var(--color-neutral-2)' : 'none'};
`;

export const StyledCloudIcon = styled(UploadCloud)`
  width: 75px;
  color: var(--color-primary-1);
`;

export const StyledUploadText = styled.p`
  background-color: var(--color-primary-1);
  padding: var(--spacing-1);
  border-radius: var(--radius-m);
  font: var(--font-input);
  color: var(--color-neutral-1);
`;

export const StyledUploadSpan = styled.span`
  font: var(--font-input);
  color: var(--color-neutral-4);
  padding-top: var(--spacing-2);
`;

export const StyledImageDropArea = styled.label``;

export const StyledImagePreview = styled(Image)<StyledImagePreviewProps>`
  box-shadow: 3px 3px 4px var(--color-neutral-3-alpha50);
`;

export const StyledImageDeleteButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding-top: var(--spacing-3);
  padding-bottom: var(--spacing-5);
`;
