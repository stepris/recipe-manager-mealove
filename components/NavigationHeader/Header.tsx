import NavigationIcon from '@/components/NavigationHeader/NavigationIcon';
import UserIcon from '@/public/icons/ic_fluent_person_24_filled.svg';
import styled from 'styled-components';
import Link from 'next/link';
import { HeaderProps } from '@/types';
import { useSession } from 'next-auth/react';
import Image from 'next/image';
import { media } from '@/styles';
import { useMediaQuery } from 'react-responsive';
import NavigationList from './NavigationList';

export default function Header({ onToggleNav, onCloseNav }: HeaderProps) {
  const { data: session } = useSession();
  const userImage = session?.user?.image;

  const isLargeScreen = useMediaQuery({ query: '(min-width: 1024px)' });
  const isMediumScreen = useMediaQuery({
    query: '(min-width: 375px) and (max-width: 1023px)',
  });

  return (
    <StyledHeader>
      {isMediumScreen && <NavigationIcon onToggleNav={onToggleNav} />}
      <Link href='/'>
        <StyledAppTitle onClick={onCloseNav}>meaLove</StyledAppTitle>
      </Link>
      {isLargeScreen && <NavigationList />}

      <StyledUserIconWrapper>
        <Link href='/login'>
          {session ? (
            <StyledUserImage
              src={userImage || ''}
              height='100'
              width='100'
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
  @media ${media.medium} {
    min-height: var(--spacing-15);
  }
  @media ${media.large} {
    justify-content: space-between;
    height: 150px;
  }
`;

const StyledAppTitle = styled.h2`
  font: var(--font-nav);
  letter-spacing: var(--letter-spacing-s);
`;

const StyledUserIconWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  flex-basis: 100%;
  @media ${media.large} {
    justify-content: space-between;
    flex-basis: 0%;
  }
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
  @media ${media.medium} {
    height: 50px;
    width: 50px;
  }
  @media ${media.large} {
    height: 60px;
    width: 60px;
  }
`;

const StyledUserImage = styled(Image)`
  border-radius: 50%;
  height: 30px;
  width: 30px;
  &:hover {
    border: 2px solid var(--color-neutral-1);
  }
  @media ${media.medium} {
    height: 50px;
    width: 50px;
  }
  @media ${media.large} {
    height: 60px;
    width: 60px;
  }
`;
