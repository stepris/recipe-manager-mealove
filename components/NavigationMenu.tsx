import FilledNavigation from '@/public/icons/ic_fluent_navigation_24_filled.svg';
import styled from 'styled-components';
import Link from 'next/link';

export default function NavigationMenu() {
  return (
    <Link href={'/navigation'}>
      <StyledFilledNavigation />
    </Link>
  );
}

const StyledFilledNavigation = styled(FilledNavigation)`
  width: 30px;
`;
