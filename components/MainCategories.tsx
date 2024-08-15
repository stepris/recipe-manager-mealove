import styled from 'styled-components';
import CategoryIcon from './CategoryIcon';
import categories from '@/lib/categories.json';

export default function MainCategories() {
  return (
    <StyledWrapper>
      <StyledUl>
        {categories.map((category) => (
          <li key={category.id}>
            <CategoryIcon category={category} />
          </li>
        ))}
      </StyledUl>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const StyledUl = styled.ul`
  display: grid;
  gap: var(--spacing-2);
  grid-template-columns: repeat(5, auto);
  justify-content: space-between;
  width: 325px;
  padding-block: var(--spacing-3);
  padding-inline: var(--spacing-3);
  background-color: var(--color-primary-1);
  border-radius: var(--radius-m);
`;
