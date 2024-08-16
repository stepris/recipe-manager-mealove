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
  const { id, title, imageUrl, category } = recipe;

  const recipeColor = categories.find(
    (categorie) => categorie.name === category
  )?.colorVarNameAlpha;

  return (
    <StyledWrapper>
      <FavoriteButton
        onToggleFavorite={() => onToggleFavorite(id)}
        isFavorite={isFavorite}
      />
      <Link href={`/recipes/${id}`}>
        <StyledRecipePreview>
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

const StyledWrapper = styled.div`
  position: relative;
`;

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
  box-shadow: 0.1rem 0.1rem 0.4rem var(--color-neutral-4-alpha25);
`;

const StyledRecipeTitle = styled.p<StyledRecipeTitleProps>`
  font: var(--font-recipe-name);
  color: var(--color-neutral-4);
  /* text-transform: uppercase; */
  padding: var(--spacing-1);
  text-align: center;
  line-height: 1.1rem;
  overflow-wrap: break-word;
`;

const StyledRecipeTitleWrapper = styled.div`
  position: absolute;
  align-content: center;
  background-color: var(${({ $recipeColor }) => $recipeColor});
  border-bottom-left-radius: var(--radius-m);
  border-bottom-right-radius: var(--radius-m);
  width: 100%;
  height: 30%;
  backdrop-filter: blur(2px);
`;
