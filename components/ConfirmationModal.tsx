import styled from 'styled-components';
import Button from './Button';
import { ConfirmationModalProps } from '@/types/RecipeDetails.types';

export default function ConfirmationModal({
  onDeleteRecipe,
  onModalClose,
  recipeId,
}: ConfirmationModalProps) {
  if (!recipeId) return null;

  return (
    <StyledBackground>
      <StyledMessageContainer>
        <StyledMessage>
          Are you sure that you want to delete this recipe?
        </StyledMessage>
        <StyledButtonWrapper>
          <Button
            variant='$yes'
            type='button'
            onClickBehavior={() => onDeleteRecipe(recipeId)}
          >
            Yes
          </Button>
          <Button variant='$no' type='button' onClickBehavior={onModalClose}>
            No
          </Button>
        </StyledButtonWrapper>
      </StyledMessageContainer>
    </StyledBackground>
  );
}

const StyledBackground = styled.div`
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: fixed;
  z-index: 2;
  background-color: var(--color-neutral-3-alpha50);
  backdrop-filter: blur(3px);
`;
const StyledMessageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 15rem;
  width: 20rem;
  position: fixed;
  background-color: var(--color-neutral-4-alpha80);
  border: 2px solid var(--color-neutral-1);
  border-radius: var(--radius-m);
`;

const StyledButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  gap: var(--spacing-5);
`;
const StyledMessage = styled.p`
  color: var(--color-neutral-1);
  font: var(--font-size-base);
  text-align: center;
  padding: var(--spacing-5);
`;
