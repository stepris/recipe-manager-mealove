import styled, { css } from 'styled-components';
import tags from '@/lib/tags.json';
import { useState } from 'react';
import { EmptyRecipeType } from '@/types';
import IngredientInput from '@/components/RecipeForm/IngredientInput';
import TimeInput from '@/components/RecipeForm/TimeInput';
import {
  StyledForm,
  StyledInputElement,
  StyledLabel,
  StyledInput,
  StyledElementGroup,
  StyledFormText,
  StyledH2,
  StyledH3,
  StyledCellWrapper,
  StyledTextArea,
  StyledDropdown,
  StyledCategoryContainer,
  StyledCategoryElement,
  StyledSubmitButton,
} from '@/components/RecipeForm/recipeStyles';

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
        quantity: 0,
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

  const handleServingsChange = (event) => {
    const { name, value } = event.target;

    if (value === '') {
      setFormData((currData) => ({
        ...currData,
        [name]: 1,
      }));
    } else {
      setFormData((currData) => ({
        ...currData,
        [name]: parseInt(value),
      }));
    }
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
              onChange={handleServingsChange}
              min={1}
              max={99}
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
              <IngredientInput
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
