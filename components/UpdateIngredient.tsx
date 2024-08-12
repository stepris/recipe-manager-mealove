import units from '@/lib/units.json';
import styled, { css } from 'styled-components';

export default function UpdateIngredient({ ingredient, onIngredientChange }) {
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

const StyledCellWrapper = styled.div`
  display: grid;
  grid-template-columns: 1.8fr 2fr 4fr;
`;

const StyledTableCell = styled.input`
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

const StyledDropdown = styled.select`
  font: var(--font-input);
  height: 2rem;
  border: 1px solid var(--color-neutral-4-alpha25);
  border-radius: var(--radius-s);
  margin-top: var(--spacing-1);
  width: 70px;
`;
