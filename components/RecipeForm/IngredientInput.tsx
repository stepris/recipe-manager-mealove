import units from '@/lib/units.json';
import {
  StyledCellWrapper,
  StyledTableCell,
  StyledDropdown,
} from '@/components/RecipeForm/recipeStyles';

export default function IngredientInput({ ingredient, onIngredientChange }) {
  const handleChange = (event) => {
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
        type='number'
        name='quantity'
        $isMedium
        value={ingredient.quantity}
        onChange={handleChange}
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
        $isLarge
        $leftAlign
        placeholder='Ingredient Name'
        onChange={handleChange}
      />
    </StyledCellWrapper>
  );
}
