import styled from 'styled-components';
import CategoryIcon from './CategoryIcon';
import categories from '@/lib/categories.json';

export default function MainCategories() {
  return (
    <StyledWrapper>
      <StyledLinkGroup>
        <StyledH2>Close Categories</StyledH2>
        <StyledUl>
          {categories.map((category) => (
            <li key={category.id}>
              <CategoryIcon category={category} />
            </li>
          ))}
        </StyledUl>
      </StyledLinkGroup>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const StyledLinkGroup = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: var(--color-primary-1);
  border-radius: var(--radius-m);
  width: 325px;
`;

const StyledUl = styled.ul`
  display: grid;
  gap: var(--spacing-2);
  grid-template-columns: repeat(5, auto);
  justify-content: space-between;
  padding-block: var(--spacing-3);
  padding-inline: var(--spacing-3);
`;
const StyledH2 = styled.h2`
  font: var(--font-headline-2);
  color: var(--color-neutral-1);
  padding-block: var(--spacing-1);
  align-self: center;
`;
