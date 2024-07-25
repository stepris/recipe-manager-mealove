import styled from 'styled-components';

export default function RecipePreview({ recipe }) {
  const { title, imageUrl } = recipe;
  return (
    <StyledRecipePreview>
      <StyledRecipeTitle>{title}</StyledRecipeTitle>
    </StyledRecipePreview>
  );
}

const StyledRecipePreview = styled.li`
  background-color: grey;
  width: 150px;
  height: 150px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  padding-bottom: 8px;
`;

const StyledRecipeTitle = styled.p`
  font: var(--font-caption);
  text-transform: uppercase;
  background-color: var(--color-cat4-lime-alpha);
  padding: 5px;
  border-radius: 5px;
  text-align: center;
  width: 90%;
`;
