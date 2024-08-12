import styled, { css } from 'styled-components';
import tags from '@/lib/tags.json';
import units from '@/lib/units.json';
import { useState } from 'react';
import { EmptyRecipeType } from '@/types';

/* const generateID = () => {
  return crypto.randomUUID();
}; */

export default function RecipeForm() {
  const emptyRecipe: EmptyRecipeType = {
    category: '',
    cookingTime: 0,
    description: '',
    difficulty: '',
    id: '1',
    imageUrl:
      'https://images.unsplash.com/photo-1515041761709-f9fc96e04cd3?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    ingredients: [
      {
        id: '1',
        quantity: '',
        unit: '',
        name: '',
      },
    ],
    instructions: [
      {
        id: '1',
        description: '',
      },
    ],
    prepTime: 0,
    servings: 1,
    tags: [],
    title: '',
  };

  const [formData, setFormData] = useState(emptyRecipe);

  const handleAddIngredient = () => {
    setFormData((currData) => {
      const newIngredients = [
        ...currData.ingredients,
        {
          id: generateID(),
          quantity: '',
          unit: '',
          name: '',
        },
      ];
      return { ...currData, ingredients: newIngredients };
    });
  };

  const handleChange = (event) => {
    const changeField = event.target.name;
    const newValue = event.target.value;
    // for instructions field
    if (changeField === 'instructions') {
      setFormData((currData) => {
        const newInstructions = [
          { ...currData.instructions[0], description: event.target.value },
        ];
        return { ...currData, instructions: newInstructions };
      });
    }
    // for quantity in ingredients
    else if (changeField.startsWith('quantity')) {
      const currentIngredient = formData.ingredients.find(
        (ingredient) => ingredient.id === event.target.parentElement.id
      );
      const newIngredient = { ...currentIngredient, quantity: newValue };

      setFormData((currData) => {
        const newIngredients = currData.ingredients.map((ingredient) =>
          ingredient.id === currentIngredient.id ? newIngredient : ingredient
        );
        console.log(newIngredients);
        return { ...currData, ingredients: newIngredients };
      });
    } else {
      setFormData((currData) => {
        currData[changeField] = newValue;
        return { ...currData };
      });
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const newRecipe = {
      ...formData,
      id: generateID(),
    };
    console.log(newRecipe);
  };

  // This is for Edit-Recipe-Feature, later!
  // useEffect(() => {
  //   setFormData(recipes[0]);
  // }, []);

  return (
    <>
      <StyledForm onSubmit={handleSubmit}>
        {/* Title */}
        <StyledInputElement>
          <StyledLabel htmlFor='title'>Recipe Name</StyledLabel>
          <StyledInput
            type='text'
            id='title'
            name='title'
            required
            $leftAlign
            value={formData.title}
            onChange={handleChange}
            placeholder='Type your Recipe Name here'
          />
        </StyledInputElement>

        {/* Portions */}
        <StyledInputElement>
          <StyledLabel htmlFor='servings'>Servings</StyledLabel>
          <StyledElementGroup>
            <StyledFormText>This recipe is for</StyledFormText>
            <StyledInput
              type='number'
              id='servings'
              name='servings'
              $isMedium
              value={formData.servings}
              onChange={handleChange}
            />
            <StyledFormText>person(s).</StyledFormText>
          </StyledElementGroup>
        </StyledInputElement>

        {/* Ingredients and quantities */}
        <StyledInputElement>
          <StyledH2>Ingredients and quantities</StyledH2>
          <StyledCellWrapper>
            <StyledH3>Quantity</StyledH3>
            <StyledH3>Unit</StyledH3>
            <StyledH3>Ingredient</StyledH3>
          </StyledCellWrapper>
          {formData.ingredients.map((ingredient) => {
            return (
              <StyledCellWrapper id={ingredient.id} key={ingredient.id}>
                <StyledTableCell
                  type='number'
                  name={`quantity${ingredient.id}`}
                  $isMedium
                  value={ingredient.quantity}
                  onChange={handleChange}
                />
                <StyledDropdown id='unit' name='unit'>
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
                />
              </StyledCellWrapper>
            );
          })}
          <button type='button' onClick={handleAddIngredient}>
            +
          </button>
        </StyledInputElement>

        {/* Recipe preparation */}
        <StyledInputElement>
          <StyledLabel htmlFor='instructions'>Recipe preparation</StyledLabel>
          <StyledTextArea
            id='instructions'
            name='instructions'
            rows={4}
            cols={10}
            minLength={1}
            required
            value={formData.instructions[0].description}
            onChange={handleChange}
          />
        </StyledInputElement>

        {/* Prep Time */}
        <StyledInputElement>
          <StyledLabel htmlFor='prepTimeHours'>Prep Time</StyledLabel>
          <StyledElementGroup>
            <StyledInput
              type='number'
              id='prepTimeHours'
              name='prepTimeHours'
              $isMedium
              value={formData.prepTime.h}
              onChange={handleChange}
            />
            <StyledH3>h</StyledH3>
            <StyledLabel htmlFor='prepTimeMins'></StyledLabel>
            <StyledInput
              type='number'
              id='prepTimeMins'
              name='prepTimeMins'
              $isMedium
              value={formData.prepTime.min}
              onChange={handleChange}
            />
            <StyledH3>min</StyledH3>
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
              $isMedium
              value={formData.cookingTime.h}
              onChange={handleChange}
            />
            <StyledH3>h</StyledH3>
            <StyledLabel htmlFor='cookingTimeMins'></StyledLabel>
            <StyledInput
              type='number'
              id='cookingTimeMins'
              name='cookingTimeMins'
              $isMedium
              value={formData.cookingTime.min}
              onChange={handleChange}
            />
            <StyledH3>min</StyledH3>
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
          <StyledCategoryContainer>
            {tags.map((tag) => {
              return (
                <StyledCategoryElement key={tag.id}>
                  <label htmlFor={tag.name}>{tag.name}</label>
                  <input
                    type='radio'
                    name='categories'
                    id={tag.name}
                    value={tag.name}
                  />
                </StyledCategoryElement>
              );
            })}
          </StyledCategoryContainer>
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
  gap: var(--spacing-5);
  padding: var(--spacing-5);
`;

const StyledInputElement = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledElementGroup = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: var(--spacing-2);
`;

const StyledH2 = styled.h2`
  font: var(--font-headline-2);
  padding-bottom: var(--spacing-2);
`;

const StyledH3 = styled.h3`
  font: var(--font-headline-3);
`;

const StyledFormText = styled.p`
  font: var(--font-input);
`;

const StyledLabel = styled.label`
  font: var(--font-headline-2);
  padding-bottom: var(--spacing-2);
`;

const StyledInput = styled.input`
  height: 2rem;
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

const StyledTextArea = styled.textarea`
  border: 1px solid var(--color-neutral-4-alpha25);
  border-radius: var(--radius-s);
`;

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

const StyledCategoryContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: var(--spacing-1);
`;

const StyledCategoryElement = styled.div`
  display: flex;
  flex-direction: column-reverse;
  text-align: center;
  font: var(--font-headline-3);
  background-color: var(--color-neutral-2);
  border-radius: var(--radius-m);
  height: 60px;
  width: 60px;
`;

const StyledSubmitButton = styled.button`
  display: block;
`;
