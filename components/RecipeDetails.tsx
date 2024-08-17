import { Modal, RecipeDetailsProps } from '@/types/RecipeDetails.types';
import styled from 'styled-components';
import Image from 'next/image';
import FavoriteButton from './FavoriteButton';
import Button from './Button';
import { useState } from 'react';
import ConfirmationModal from './ConfirmationModal';

export default function RecipeDetails({
  recipe,
  onDeleteRecipe,
  onToggleFavorite,
  isFavorite,
}: RecipeDetailsProps) {
  const [modalState, setModalState] = useState<Modal>(false);

  const handleModalOpen = () => setModalState(true);
  const handleModalClose = () => setModalState(false);

  const {
    id,
    title,
    imageUrl,
    ingredients,
    prepTime,
    cookingTime,
    instructions,
  } = recipe;
  if (!recipe) return null;

  return (
    <>
      {modalState && (
        <ConfirmationModal
          recipeId={id}
          onDeleteRecipe={onDeleteRecipe}
          onModalClose={handleModalClose}
        />
      )}
      <StyledSection>
        <StyledHeader>
          <StyledTitle>{title}</StyledTitle>
          <FavoriteButton
            $isDetailPage
            onToggleFavorite={() => onToggleFavorite(id)}
            isFavorite={isFavorite}
          />
        </StyledHeader>
        <ImageWrapper>
          <StyledImage
            src={imageUrl}
            alt={`picture of ${title}`}
            quality={80}
            fill
          />
        </ImageWrapper>
      </StyledSection>
      <StyledTable>
        {ingredients.map((ingredient) => (
          <StyledRow key={ingredient.id}>
            <StyledCellLeft>{ingredient.quantity}</StyledCellLeft>
            <StyledCellMiddle>{ingredient.unit}</StyledCellMiddle>
            <StyledCellRight>{ingredient.name}</StyledCellRight>
          </StyledRow>
        ))}
      </StyledTable>

      <StyledArticle>
        <StyledH2>Instructions</StyledH2>
        <StyledH3>
          Preparation Time: <StyledSpan>{prepTime} Minutes</StyledSpan>
        </StyledH3>
        <StyledH3>
          Cooking Time: <StyledSpan>{cookingTime} Minutes</StyledSpan>
        </StyledH3>
        <StyledInstructions>{instructions[0].description}</StyledInstructions>
      </StyledArticle>
      <StyledButtonWrapper>
        <Button
          variant='$delete'
          type='button'
          onClickBehavior={handleModalOpen}
        >
          Delete
        </Button>
      </StyledButtonWrapper>
    </>
  );
}

const StyledSection = styled.section`
  padding-bottom: var(--spacing-5);
`;

const StyledHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const StyledTitle = styled.h1`
  font: var(--font-headline-1);
  color: var(--color-neutral-4);
  padding: var(--spacing-5);
  max-width: 85%;
  overflow-wrap: break-word;
`;

const ImageWrapper = styled.div`
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 225px;
`;

const StyledImage = styled(Image)`
  object-fit: cover;
`;

const StyledTable = styled.div`
  background-color: var(--color-primary-1);
  padding: var(--spacing-3) var(--spacing-5);
`;

const StyledRow = styled.div`
  display: grid;
  grid-template-columns: 3fr 2fr 8fr;
  gap: var(--spacing-2);
  background-color: var(--color-row-1);
  padding: 5px;
  margin-bottom: 2px;
  border-radius: 5px;
  &:nth-child(even) {
    background-color: var(--color-row-2);
  }
`;

const StyledCellLeft = styled.div`
  font: var(--font-caption);
  justify-self: end;
`;

const StyledCellMiddle = styled.div`
  font: var(--font-caption);
  justify-self: start;
`;

const StyledCellRight = styled.div`
  font: var(--font-caption);
  justify-self: start;
`;

const StyledArticle = styled.article`
  padding: var(--spacing-5);
`;

const StyledH2 = styled.h2`
  font: var(--font-headline-2);
  color: var(--color-primary-1);
  padding-bottom: var(--spacing-5);
`;

const StyledH3 = styled.h3`
  font: var(--font-headline-3);
  color: var(--color-primary-1);
`;

const StyledSpan = styled.span`
  color: var(--color-primary-2);
`;

const StyledInstructions = styled.p`
  color: var(--color-neutral-4);
  padding-top: var(--spacing-5);
  overflow-wrap: break-word;
`;

const StyledButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
`;
