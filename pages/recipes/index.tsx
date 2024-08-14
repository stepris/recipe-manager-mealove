import Button from '@/components/Button';
import styled from 'styled-components';

export default function RecipesFilter() {
  return (
    <>
      <h1>Under construction...</h1>
      <Wrapper>
        <Button $submit>Submit Recipe</Button>
        <Button>Edit</Button>
        <Button>Update</Button>
      </Wrapper>
    </>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  padding: 2rem;
  gap: 2rem;
`;
