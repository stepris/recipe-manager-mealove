import styled, { css } from 'styled-components';
import tags from '@/lib/tags.json';
import { useState } from 'react';
import { EmptyRecipeType } from '@/types';
import UpdateIngredient from '@/components/UpdateIngredient';
import TimeInput from '@/components/TimeInput';

export default function RecipeForm() {
  const emptyRecipe: EmptyRecipeType = {
    category: '',
    cookingTime: 0,
    description: '',
    difficulty: 'easy',
    id: '1',
    imageUrl: '/recipe-default-imgs/alexander-mils-pPhN8HFzkDE-unsplash',
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

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((currData) => ({
      ...currData,
      [name]: value,
    }));
  };

  const handleInstructionsChange = (event) => {
    const { value } = event.target;

    setFormData((currData) => {
      const newInstructions = [...currData.instructions];
      newInstructions[0] = { ...newInstructions[0], description: value };
      return {
        ...currData,
        instructions: newInstructions,
      };
    });
  };

  const handleAddIngredient = () => {
    setFormData((currData) => {
      const newIngredients = [
        ...currData.ingredients,
        {
          id: crypto.randomUUID(),
          quantity: 0,
          unit: '',
          name: '',
        },
      ];
      return { ...currData, ingredients: newIngredients };
    });
  };

  const handleIngredientChange = (newIngredient) => {
    setFormData((currData) => {
      const newIngredients = currData.ingredients.map((ingredient) =>
        ingredient.id === newIngredient.id ? newIngredient : ingredient
      );
      return { ...currData, ingredients: newIngredients };
    });
  };

  const handlePrepTimeChange = (newPrepTime) => {
    setFormData((currData) => ({ ...currData, prepTime: newPrepTime }));
  };

  const handleCookingTimeChange = (newCookingTime) => {
    setFormData((currData) => ({ ...currData, cookingTime: newCookingTime }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const newRecipe = {
      ...formData,
      id: crypto.randomUUID(),
    };
    console.log(newRecipe);
  };

  console.log(formData);

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
              <UpdateIngredient
                key={ingredient.id}
                ingredient={ingredient}
                onIngredientChange={handleIngredientChange}
              />
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
            onChange={handleInstructionsChange}
          />
        </StyledInputElement>

        {/* Prep Time */}
        <TimeInput
          time={formData.prepTime}
          onTimeChange={handlePrepTimeChange}
          what='prep'
        />

        {/* Cooking time */}
        <TimeInput
          time={formData.cookingTime}
          onTimeChange={handleCookingTimeChange}
          what='cooking'
        />

        {/* Difficulty */}
        <StyledInputElement>
          <StyledLabel htmlFor='difficulty'>Difficulty</StyledLabel>
          <StyledDropdown
            id='difficulty'
            name='difficulty'
            onChange={handleChange}
          >
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
                    required
                    onChange={handleChange}
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

const StyledLabelSmall = styled.label`
  font: var(--font-headline-3);
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
