import styled from 'styled-components';
import Image from 'next/image';
import { Recipe } from '@/types';

type RecipePreviewProps = {
  recipe: Recipe;
};

export default function RecipePreview({ recipe }: RecipePreviewProps) {
  const { title, imageUrl } = recipe;
  return (
    <StyledRecipePreview>
      <ImageWrapper>
        <StyledImage
          src={imageUrl}
          alt={`picture of ${title}`}
          quality={80}
          fill
        />
      </ImageWrapper>
      <StyledRecipeTitle>{title}</StyledRecipeTitle>
    </StyledRecipePreview>
  );
}

const StyledImage = styled(Image)`
  object-fit: cover;
`;

const ImageWrapper = styled.div`
  position: relative;
  overflow: hidden;
  width: 150px;
  height: 150px;
  border-radius: var(--radius-m);
`;

const StyledRecipePreview = styled.li`
  background-color: grey;
  width: 150px;
  height: 150px;
  border-radius: var(--radius-m);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  position: relative;
`;

const StyledRecipeTitle = styled.p`
  font: var(--font-caption);
  position: absolute;
  text-transform: uppercase;
  background-color: var(--color-cat4-lime-alpha);
  padding: var(--spacing-1);
  border-radius: var(--radius-s);
  text-align: center;
  width: 90%;
  bottom: var(--spacing-1);
`;
