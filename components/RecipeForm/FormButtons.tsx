import Button from '@/components/Button';
import { StyledButtonWrapper } from '@/components/RecipeForm/recipeStyles';
import { FormButtonsProps } from '@/types/FormButtons.types';

export default function FormButtons({
  isEditMode,
  onCancel,
}: FormButtonsProps) {
  if (isEditMode) {
    return (
      <StyledButtonWrapper>
        <Button type='submit' variant='$update'>
          Update
        </Button>
        <Button type='button' variant='$cancel' onClickBehavior={onCancel}>
          Cancel
        </Button>
      </StyledButtonWrapper>
    );
  } else {
    return (
      <StyledButtonWrapper>
        <Button variant='$submit' type='submit' aria-label='submit new recipe'>
          Submit Recipe
        </Button>
      </StyledButtonWrapper>
    );
  }
}
