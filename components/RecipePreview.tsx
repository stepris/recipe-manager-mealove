import styled from 'styled-components';
import Image from 'next/image';
import {
  RecipePreviewProps,
  StyledRecipeTitleProps,
} from '@/types/RecipePreview.types';
import Link from 'next/link';
import FavoriteButton from './FavoriteButton';
import categories from '@/lib/categories.json';

export default function RecipePreview({
  recipe,
  onToggleFavorite,
  isFavorite,
}: RecipePreviewProps) {
  const { _id: id, title, imageUrl, category } = recipe;

  if (!id) return null;

  const recipeColor = categories.find(
    (categorie) => categorie.name === category
  )?.colorVarNameAlpha;

  return (
    <StyledWrapper>
      <Link href={`/recipes/${id}`}>
        <StyledRecipePreview>
          <FavoriteButton
            onToggleFavorite={() => onToggleFavorite(id)}
            isFavorite={isFavorite}
          />
          <ImageWrapper>
            <StyledImage
              src={imageUrl}
              alt={`picture of ${title}`}
              quality={80}
              fill
            />
          </ImageWrapper>
          <StyledRecipeTitleWrapper $recipeColor={recipeColor}>
            <StyledRecipeTitle>{title}</StyledRecipeTitle>
          </StyledRecipeTitleWrapper>
        </StyledRecipePreview>
      </Link>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.li`
  position: relative;
`;

const StyledImage = styled(Image)`
  object-fit: cover;
  transform: scale(1.01);
  &:hover {
    transform: scale(1.12);
  }
  transition: all 0.3s ease;
`;

const ImageWrapper = styled.div`
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 100%;
  border-radius: var(--radius-m);
`;

const StyledRecipePreview = styled.div`
  background-color: grey;
  width: 150px;
  height: 150px;
  border-radius: var(--radius-m);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  position: relative;
  box-shadow: 0.1rem 0.1rem 0.4rem var(--color-neutral-4-alpha25);

  @media (min-width: 375px) {
    height: 200px;
  }

  @media (min-width: 640px) {
    width: 100%;
    /* height: 200px; */
    max-height: 400px;
  }

  @media (min-width: 1024px) {
    width: 100%;
    height: 300px;
    &:nth-child(3n) {
      grid-column: span 2;
    }
  }
`;

const StyledRecipeTitle = styled.p`
  font: var(--font-recipe-name);
  color: var(--color-neutral-4);
  padding: var(--spacing-1);
  text-align: center;
  line-height: 1.1rem;
  overflow-wrap: break-word;
`;

const StyledRecipeTitleWrapper = styled.div<StyledRecipeTitleProps>`
  position: absolute;
  align-content: center;
  background-color: var(${({ $recipeColor }) => $recipeColor});
  border-bottom-left-radius: var(--radius-m);
  border-bottom-right-radius: var(--radius-m);
  width: 100%;
  height: 30%;
  backdrop-filter: blur(2px);
`;
