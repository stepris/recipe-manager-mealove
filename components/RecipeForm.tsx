import styled from 'styled-components';
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
      <form onSubmit={handleSubmit}>
        {/* Title */}
        <StyledLabel htmlFor='title'>Recipe Name</StyledLabel>
        <StyledInput type='text' id='title' name='title' required />

        {/* Portions */}
        <StyledLabel htmlFor='servings'>Servings</StyledLabel>
        <p>This recipe is for</p>
        <StyledInput type='text' id='servings' name='servings' />
        <p>person(s).</p>

        {/* Ingredients and quantities */}
        <h2>Ingredients and quantities</h2>
        {/* Quantity */}
        <StyledLabel htmlFor='quantity'>Quantity</StyledLabel>
        <StyledInput type='number' name='quantity' />
        {/* Unit */}
        <StyledLabel htmlFor='unit'>Unit</StyledLabel>
        <StyledDropdown id='unit' name='unit'>
          {units.map((unit) => (
            <option key={unit.id} value={unit.unit}>
              {unit.unit}
            </option>
          ))}
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
        <StyledSubmitButton aria-label='submit new recipe'>
          Submit
        </StyledSubmitButton>
      </form>
    </>
  );
}

/* const StyledForm = styled.form``; */

const StyledLabel = styled.label`
  font: var(--font-headline-2);
  outline: var(--debug-1);
`;

const StyledInput = styled.input`
  font: var(--font-base);
  outline: var(--debug-2);
`;

const StyledDropdown = styled.select`
  font: var(--font-base);
`;

const StyledSubmitButton = styled.button`
  outline: var(--debug-3);
  display: block;
`;
