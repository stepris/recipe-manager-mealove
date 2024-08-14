import Button from '@/components/Button';
import styled from 'styled-components';

export default function RecipesFilter() {
  return (
    <>
      <h1>Under construction...</h1>
      <Wrapper>
        <Button variant='$submit' type='button' onClickBehavior='submit'>
          Submit Recipe
        </Button>
        <Button variant='$edit' type='button' onClickBehavior='onClick'>
          Edit
        </Button>
        <Button variant='$update' type='button' onClickBehavior='onChange'>
          Update
        </Button>
        <Button variant='$cancel' type='button' onClickBehavior='onClick'>
          Cancel
        </Button>
        <Button variant='$delete' type='button' onClickBehavior='onClick'>
          Delete
        </Button>
        <Button variant='$yes' type='button' onClickBehavior='onClick'>
          Yes
        </Button>
        <Button variant='$no' type='button' onClickBehavior='onClick'>
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
