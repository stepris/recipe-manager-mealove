import styled, { css } from 'styled-components';
import CategoryIcon from './CategoryIcon';
import categories from '@/lib/categories.json';
import { useState } from 'react';

export default function MainCategories() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <StyledWrapper>
      <StyledFilterGroup $isOpen={isOpen}>
        <StyledToggleGroup onClick={() => setIsOpen(!isOpen)}>
          <StyledH2>{isOpen ? 'Close Categories' : 'Open Categories'}</StyledH2>
        </StyledToggleGroup>
        <StyledUl $isOpen={isOpen}>
          {categories.map((category) => (
            <li key={category.id}>
              <CategoryIcon category={category} />
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

const StyledFilterGroup = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: var(--color-primary-1);
  border-radius: var(--radius-m);
  width: 325px;
  transition: all 0.5s ease-in-out;
  overflow: hidden;

  ${({ $isOpen }) =>
    $isOpen &&
    css`
      max-height: 350px;
    `}

  ${({ $isOpen }) =>
    !$isOpen &&
    css`
      max-height: 45px;
    `}
`;

const StyledUl = styled.ul`
  display: grid;
  gap: var(--spacing-2);
  grid-template-columns: repeat(5, auto);
  justify-content: space-between;
  padding-inline: var(--spacing-3);
  transition: all 0.5s ease-in-out;
  overflow: hidden;
  ${({ $isOpen }) =>
    $isOpen &&
    css`
      max-height: 200px;
      opacity: 1;
      padding-block: var(--spacing-3);
    `}
  ${({ $isOpen }) =>
    !$isOpen &&
    css`
      max-height: 40px;
      opacity: 0;
      padding-block: 0;
    `}
`;

const StyledToggleGroup = styled.div`
  display: flex;
  justify-content: center;
  cursor: pointer;
`;

const StyledH2 = styled.h2`
  font: var(--font-headline-2);
  color: var(--color-neutral-1);
  padding-block: var(--spacing-2);
  align-self: center;
`;
