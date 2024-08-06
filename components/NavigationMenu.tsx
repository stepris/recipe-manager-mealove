import FilledNavigation from '@/public/icons/ic_fluent_navigation_24_filled.svg';
import styled from 'styled-components';
import { useRouter } from 'next/router';

export default function NavigationMenu() {
  const router = useRouter();
  const page = router.pathname;

  if (page === '/navigation') {
    return (
      <button type='button' onClick={() => router.back()}>
        <StyledFilledNavigation />
      </button>
    );
  } else {
    return (
      <button type='button' onClick={() => router.push('/navigation')}>
        <StyledFilledNavigation />
      </button>
    );
  }
}

const StyledFilledNavigation = styled(FilledNavigation)`
  width: 30px;
`;
