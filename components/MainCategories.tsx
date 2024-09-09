import styled, { css } from 'styled-components';
import CategoryIconButton from './CategoryIcon';
import categories from '@/lib/categories.json';
import { useState } from 'react';
import Arrow from '@/public/icons/categories/Arrow.svg';
import {
  MainCategoriesProps,
  MainCategoriesStyledComponents,
} from '@/types/MainCategories.types';
import { media } from '@/styles';

export default function MainCategories({
  onChangeFilter,
  activeFilter,
}: MainCategoriesProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <StyledWrapper>
      <StyledFilterGroup $isOpen={isOpen}>
        <StyledToggleGroup onClick={() => setIsOpen(!isOpen)}>
          {isOpen && <StyledH2>Close Categories</StyledH2>}
          {!isOpen && <StyledH2>Open Categories</StyledH2>}
          <StyledArrowDown $isOpen={isOpen} />
          <StyledArrowUp $isOpen={isOpen} />
        </StyledToggleGroup>
        <StyledUl $isOpen={isOpen}>
          {categories.map((category) => (
            <li key={category.id}>
              <CategoryIconButton
                category={category}
                onChangeFilter={onChangeFilter}
                activeFilter={activeFilter}
              />
            </li>
          ))}
        </StyledUl>
      </StyledFilterGroup>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const StyledFilterGroup = styled.div<MainCategoriesStyledComponents>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: var(--color-primary-1);
  border-radius: var(--radius-m);
  width: 100%;
  margin-inline: var(--spacing-5);
  transition: all 0.6s ease-in-out;
  overflow: hidden;
  max-height: ${({ $isOpen }) => ($isOpen ? '350px' : '35px')};
  @media ${media.medium} {
    width: 100%;
    margin-inline: var(--spacing-5);
  }
`;

const StyledUl = styled.ul<MainCategoriesStyledComponents>`
  display: grid;
  gap: var(--spacing-2);
  grid-template-columns: repeat(5, auto);
  justify-content: space-between;
  padding-inline: var(--spacing-3);
  transition: all 0.6s ease-in-out;
  overflow: hidden;
  ${({ $isOpen }) =>
    $isOpen &&
    css`
      max-height: 300px;
      opacity: 1;
      padding-block: var(--spacing-3);
    `}
  ${({ $isOpen }) =>
    !$isOpen &&
    css`
      max-height: 50px;
      opacity: 0;
      padding-block: 0;
    `}
    @media ${media.medium} {
    grid-template-columns: repeat(10, auto);
    gap: var(--spacing-1);
  }
`;

const StyledToggleGroup = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  position: relative;
  transition: all 0.6s ease-in-out;
`;

const StyledArrowDown = styled(Arrow)`
  position: absolute;
  right: 25px;
  transition: all 0.1s ease-in-out;
  path {
    fill: var(--color-neutral-1);
    stroke: var(--color-neutral-1);
    stroke-width: 2;
  }
  width: 25px;
  height: 25px;

  transform: rotate(90deg);
  top: 2px;
  opacity: ${({ $isOpen }) => ($isOpen ? '0' : '1')};
`;
const StyledArrowUp = styled(StyledArrowDown)`
  transform: rotate(-90deg);
  top: 10px;
  opacity: ${({ $isOpen }) => (!$isOpen ? '0' : '1')};
`;

const StyledH2 = styled.h2`
  font: var(--font-headline-2);
  color: var(--color-neutral-1);
  padding-block: var(--spacing-1);
  align-self: center;
`;
