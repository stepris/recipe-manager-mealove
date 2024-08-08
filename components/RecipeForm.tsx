import styled, { css } from 'styled-components';
import tags from '@/lib/tags.json';
import units from '@/lib/units.json';

export default function RecipeForm() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);

    console.log(data);
  };

  return (
    <>
      <StyledForm onSubmit={handleSubmit}>
        {/* Title */}
        <StyledInputElement>
          <StyledLabel htmlFor='title'>Recipe Name</StyledLabel>
          <StyledInput type='text' id='title' name='title' required />
        </StyledInputElement>

        {/* Portions */}
        <StyledInputElement>
          <StyledLabel htmlFor='servings'>Servings</StyledLabel>
          <StyledElementGroup>
            <p>This recipe is for</p>
            <StyledInput type='text' id='servings' name='servings' />
            <p>person(s).</p>
          </StyledElementGroup>
        </StyledInputElement>

        {/* Ingredients and quantities */}
        <StyledInputElement>
          <StyledH2>Ingredients and quantities</StyledH2>
          <StyledTable>
            <StyledH3>Quantity</StyledH3>
            <StyledH3>Unit</StyledH3>
            <StyledH3>Ingredient</StyledH3>
            {Array.from({ length: 3 }).map((num) => {
              return (
                <>
                  <StyledTableCell type='number' name='quantity' $isMedium />
                  <StyledDropdown id='unit' name='unit'>
                    {units.map((unit) => (
                      <option key={unit.id} value={unit.unit}>
                        {unit.unit}
                      </option>
                    ))}
                  </StyledDropdown>
                  <StyledTableCell name='name' $isLarge />
                </>
              );
            })}
          </StyledTable>
        </StyledInputElement>

        {/* Recipe preparation */}
        <StyledInputElement>
          <StyledLabel htmlFor='instructions'>Recipe preparation</StyledLabel>
          <textarea
            id='instructions'
            name='instructions'
            rows={10}
            cols={38}
            minLength={1}
            required
          />
        </StyledInputElement>

        {/* Working hours */}
        <StyledInputElement>
          <StyledLabel htmlFor='prepTimeHours'>Working hours</StyledLabel>
          <StyledElementGroup>
            <StyledInput
              type='number'
              id='prepTimeHours'
              name='prepTimeHours'
            />
            <p>h</p>
            <StyledLabel htmlFor='prepTimeMins'></StyledLabel>
            <StyledInput type='number' id='prepTimeMins' name='prepTimeMins' />
            <p>min</p>
          </StyledElementGroup>
        </StyledInputElement>

        {/* Cooking time */}
        <StyledInputElement>
          <StyledLabel htmlFor='cookingTimeHours'>Cooking time</StyledLabel>
          <StyledElementGroup>
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
          </StyledElementGroup>
        </StyledInputElement>

        {/* Difficulty */}
        <StyledInputElement>
          <StyledLabel htmlFor='difficulty'>Difficulty</StyledLabel>
          <StyledDropdown id='difficulty' name='difficulty'>
            <option value='easy'>easy</option>
            <option value='medium'>medium</option>
            <option value='hard'>hard</option>
            <option value='godlike'>godlike</option>
          </StyledDropdown>
        </StyledInputElement>

        {/* Main Category */}
        <StyledInputElement>
          <StyledLabel htmlFor='categories'>Main Categories</StyledLabel>
          {tags.map((tag) => {
            return (
              <div key={tag.id}>
                <label htmlFor={tag.name}>{tag.name}</label>
                <input
                  type='radio'
                  name='categories'
                  id={tag.name}
                  value={tag.name}
                />
              </div>
            );
          })}
        </StyledInputElement>
        <StyledSubmitButton aria-label='submit new recipe'>
          Submit
        </StyledSubmitButton>
      </StyledForm>
    </>
  );
}

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 25px;
`;

const StyledInputElement = styled.div`
  display: flex;
  flex-direction: column;
  /* outline: var(--debug-1); */
`;

const StyledElementGroup = styled.div`
  display: flex;
  flex-direction: row;
  outline: var(--debug-2);
`;

const StyledTable = styled.div`
  display: grid;
  grid-template-columns: 2fr 2fr 4fr;
  outline: var(--debug-3);
`;

const StyledTableCell = styled.input`
  font: var(--font-input);
  outline: var(--debug-2);
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
`;

const StyledH2 = styled.h2`
  font: var(--font-headline-2);
`;

const StyledH3 = styled.h3`
  font: var(--font-headline-3);
`;

const StyledLabel = styled.label`
  font: var(--font-headline-2);
`;

const StyledInput = styled.input`
  font: var(--font-input);
  max-width: 100px;
`;

const StyledDropdown = styled.select`
  font: var(--font-input);
  width: 70px;
  outline: var(--debug-3);
`;

const StyledSubmitButton = styled.button`
  outline: var(--debug-3);
  display: block;
`;
