import styled from 'styled-components';

export default function RecipePreview({ recipe }) {
  const { title, imageUrl } = recipe;
  return <StyledRecipePreview>{title}</StyledRecipePreview>;
}

const StyledRecipePreview = styled.li`
  background-color: grey;
  width: 100px;
  height: 100px;
  border: 1px solid black;
`;
