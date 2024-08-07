import styled from 'styled-components';

export default function RecipeForm() {
  return (
    <>
      <form>
        {/* Title */}
        <StyledLabel htmlFor='title'>Recipe Name</StyledLabel>
        <StyledInput type='text' id='title' name='title' />

        {/* Portions */}
        <StyledLabel htmlFor='portions'>Portions</StyledLabel>
        <p>This recipe is for</p>
        <StyledInput type='text' id='portions' name='portions' />
        <p>person(s).</p>

        {/* Ingredients and quantities */}
        <h2>Ingredients and quantities</h2>
        {/* Quantity */}
        <StyledLabel htmlFor='quantity'>Quantity</StyledLabel>
        <StyledInput type='number' name='quantity' />
        {/* Unit */}
        <StyledLabel htmlFor='unit'>Unit</StyledLabel>
        <StyledDropdown id='unit' name='unit'>
          <option value=''></option>
          <option value='g'>g</option>
          <option value='kg'>kg</option>
          <option value='ml'>ml</option>
          <option value='l'>l</option>
          <option value='tsp'>tsp</option>
          <option value='tbsp'>tbsp</option>
          <option value='piece(s)'>piece(s)</option>
          <option value='cup'>cup</option>
          <option value='bottle'>bottle</option>
        </StyledDropdown>
        {/* Ingredient */}
        <StyledLabel htmlFor='ingredient'>Ingredient</StyledLabel>
        <StyledInput type='text' name='ingredient' />

        {/* Recipe preparation */}
        <StyledLabel htmlFor='instructions'>Recipe preparation</StyledLabel>
        <textarea
          id='instructions'
          name='instructions'
          rows={10}
          cols={38}
          minLength={1}
          required
        />

        {/* Working hours */}
        <StyledLabel htmlFor='prepTimeHours'>Working hours</StyledLabel>
        <StyledInput type='number' id='prepTimeHours' name='prepTimeHours' />
        <p>h</p>
        <StyledLabel htmlFor='prepTimeMins'></StyledLabel>
        <StyledInput type='number' id='prepTimeMins' name='prepTimeMins' />
        <p>min</p>

        {/* Cooking time */}
        <StyledLabel htmlFor='cookingTimeHours'>Cooking time</StyledLabel>
        <StyledInput
          type='number'
          id='cookingTimeHours'
          name='cookingTimeHours'
        />
        <p>h</p>
        <StyledLabel htmlFor='cookingTimeMins'></StyledLabel>
        <StyledInput
          type='number'
          id='cookingTimeMins'
          name='cookingTimeMins'
        />
        <p>min</p>

        {/* Difficulty */}
        <StyledLabel htmlFor='difficulty'>Difficulty</StyledLabel>
        <StyledDropdown id='difficulty' name='difficulty'>
          <option value='easy'>easy</option>
          <option value='medium'>medium</option>
          <option value='hard'>hard</option>
          <option value='godlike'>godlike</option>
        </StyledDropdown>

        {/* Main Category */}
      </form>
    </>
  );
}

const StyledForm = styled.form``;

const StyledLabel = styled.label`
  font: var(--font-headline-2);
  outline: var(--debug);
`;

const StyledInput = styled.input`
  font: var(--font-base);
  outline: var(--debug);
`;

const StyledDropdown = styled.select`
  font: var(--font-base);
`;
