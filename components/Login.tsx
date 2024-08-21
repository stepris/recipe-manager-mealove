import { useSession, signIn, signOut } from 'next-auth/react';
import styled from 'styled-components';

export default function Login() {
  const { data: session } = useSession();

  if (session) {
    return (
      <StyledWrapper>
        <p>You are currently signed in as {session.user.name}</p>
        <StyledLoginButton onClick={() => signOut()}>
          Sign out
        </StyledLoginButton>
      </StyledWrapper>
    );
  }
  return (
    <StyledWrapper>
      <p>Please login to use more features</p>
      <StyledLoginButton onClick={() => signIn()}>Sign in</StyledLoginButton>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding-top: var(--spacing-5);
  gap: var(--spacing-5);
`;

const StyledLoginButton = styled.button`
  font: var(--font-caption);
  background-color: var(--color-primary-1);
  color: var(--color-neutral-1);
  width: 50%;
  text-transform: uppercase;
  border-radius: var(--radius-m);
  height: var(--spacing-8);
  padding: var(--spacing-2);
  transition: all 0.1s ease-in-out;
  filter: drop-shadow(0.2rem 0.2rem 0.2rem var(--color-neutral-3-alpha50));
  &:hover {
    background-color: var(--color-primary-2);
  }
`;
