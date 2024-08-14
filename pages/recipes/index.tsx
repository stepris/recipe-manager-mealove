import Button from '@/components/Button';
import styled from 'styled-components';

export default function RecipesFilter() {
  return (
    <>
      <h1>Under construction...</h1>
      <Wrapper>
        <Button variant='$submit'>Submit Recipe</Button>
        <Button variant='$edit'>Edit</Button>
        <Button variant='$update'>Update</Button>
        <Button variant='$cancel'>Cancel</Button>
        <Button variant='$delete'>Delete</Button>
        <Button variant='$yes'>Yes</Button>
        <Button variant='$no'>No</Button>
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
