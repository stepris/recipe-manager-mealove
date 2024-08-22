import NavigationIcon from '@/components/NavigationHeader/NavigationIcon';
import UserIcon from '@/public/icons/ic_fluent_person_24_filled.svg';
import styled from 'styled-components';
import Link from 'next/link';
import { HeaderProps } from '@/types';
import { useSession } from 'next-auth/react';
import Image from 'next/image';

export default function Header({ onToggleNav }: HeaderProps) {
  const { data: session } = useSession();
  const userImage = session?.user?.image;

  return (
    <StyledHeader>
      <NavigationIcon onToggleNav={onToggleNav} />
      <Link href='/'>
        <StyledAppTitle>meaLove</StyledAppTitle>
      </Link>
      <StyledUserIconWrapper>
        <Link href='/login'>
          {session ? (
            <StyledUserImage
              src={userImage || ''}
              height='0'
              width='30'
              alt={session?.user?.name || ''}
            />
          ) : (
            <StyledUserIcon />
          )}
        </Link>
      </StyledUserIconWrapper>
    </StyledHeader>
  );
}

const StyledHeader = styled.header`
  background-color: var(--color-primary-1);
  color: var(--color-neutral-1);
  min-height: var(--spacing-10);
  display: flex;
  align-items: center;
  gap: var(--spacing-3);
  padding-inline: var(--spacing-5);
  margin-bottom: var(--spacing-1);
`;

const StyledAppTitle = styled.h2`
  font: var(--font-nav);
  letter-spacing: var(--letter-spacing-s);
`;

const StyledUserIconWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  flex-basis: 100%;
`;

const StyledUserIcon = styled(UserIcon)`
  height: 25px;
  width: 25px;
  fill: var(--color-neutral-1);
  outline: 2px solid var(--color-neutral-1);
  border-radius: 50%;
  display: block;
  &:hover {
    fill: var(--color-neutral-2);
    outline: 2px solid var(--color-neutral-2);
  }
`;

const StyledUserImage = styled(Image)`
  border-radius: 50%;
  &:hover {
    border: 2px solid var(--color-neutral-1);
  }
`;
