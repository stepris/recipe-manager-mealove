import Button from '@/components/Button';
import styled from 'styled-components';

export default function RecipesFilter() {
  return (
    <>
      <h1>Under construction...</h1>
      <Wrapper>
        <Button variant='$submit' type={'button'}>
          Submit Recipe
        </Button>
        <Button variant='$edit' type={'button'}>
          Edit
        </Button>
        <Button variant='$update' type={'button'}>
          Update
        </Button>
        <Button variant='$cancel' type={'button'}>
          Cancel
        </Button>
        <Button variant='$delete' type={'button'}>
          Delete
        </Button>
        <Button variant='$yes' type={'button'}>
          Yes
        </Button>
        <Button variant='$no' type={'button'}>
          No
        </Button>
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
