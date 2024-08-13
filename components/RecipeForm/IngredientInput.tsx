import units from '@/lib/units.json';
import {
  StyledCellWrapper,
  StyledTableCell,
  StyledDropdown,
} from '@/components/RecipeForm/recipeStyles';
import { IngredientInputProps } from '@/types';
import { ChangeEvent } from 'react';

export default function IngredientInput({
  ingredient,
  onIngredientChange,
}: IngredientInputProps) {
  const handleChange = (
    event: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>
  ) => {
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
      <StyledDropdown id='unit' name='unit' onChange={handleChange}>
        {units.map((unit) => (
          <option key={unit.id} value={unit.unit}>
            {unit.unit}
          </option>
        ))}
      </StyledDropdown>
      <StyledTableCell
        name='name'
        type='text'
        $isLarge
        $leftAlign
        placeholder='Ingredient Name'
        onChange={handleChange}
        maxLength={20}
      />
    </StyledCellWrapper>
  );
}
