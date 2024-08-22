import units from '@/lib/units.json';
import {
  StyledCellWrapper,
  StyledTableCell,
  StyledDropdown,
} from '@/components/RecipeForm/recipeStyles';
import { IngredientInputProps } from '@/types/IngridientInput.types';
import { HandleChangeParams } from '@/types/RecipeForm.types';
import DeleteIcon from '@/public/icons/buttons/ic_fluent_delete_24_regular.svg';
import { StyledDeleteIconWrapper } from '@/components/RecipeForm/recipeStyles';

export default function IngredientInput({
  ingredient,
  onIngredientChange,
  onIngredientDelete,
}: IngredientInputProps) {
  const handleChange = (event: HandleChangeParams) => {
    const { name, value } = event.target;

    const newIngredient = {
      ...ingredient,
      [name]: value,
    };
    onIngredientChange(newIngredient);
  };

  return (
    <StyledCellWrapper id={ingredient.id} key={ingredient.id}>
      <StyledTableCell
        type='text'
        name='quantity'
        $isMedium
        value={ingredient.quantity}
        onChange={handleChange}
        maxLength={5}
        pattern='^\d*$'
      />
      <StyledDropdown
        id='unit'
        name='unit'
        onChange={handleChange}
        value={ingredient.unit}
      >
        {units.map((unit) => (
          <option key={unit.id} value={unit.unit}>
            {unit.unit}
          </option>
        ))}
      </StyledDropdown>
      <StyledTableCell
        name='name'
        type='text'
        placeholder='Ingredient Name'
        onChange={handleChange}
        value={ingredient.name}
        $isLarge
        $leftAlign
        maxLength={20}
      />
      <StyledDeleteIconWrapper
        type='button'
        onClick={() => onIngredientDelete(ingredient.id)}
      >
        <DeleteIcon fill={'var(--color-primary-2)'} />
      </StyledDeleteIconWrapper>
    </StyledCellWrapper>
  );
}
