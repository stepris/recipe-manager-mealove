import Button from '@/components/Button';
import styled from 'styled-components';

export default function RecipesFilter() {
  return (
    <>
      <h1>Under construction...</h1>
      <Wrapper>
        <Button variant='$submit' type='$submit'>
          Submit Recipe
        </Button>
        <Button variant='$edit' type='$edit'>
          Edit
        </Button>
        <Button variant='$update' type='$update'>
          Update
        </Button>
        <Button variant='$cancel' type='$cancel'>
          Cancel
        </Button>
        <Button variant='$delete' type='$delete'>
          Delete
        </Button>
        <Button variant='$yes' type='$yes'>
          Yes
        </Button>
        <Button variant='$no' type='$no'>
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
