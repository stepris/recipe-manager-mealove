import FilledNavigation from '@/public/icons/ic_fluent_navigation_24_filled.svg';
import styled from 'styled-components';
import { HeaderProps } from '@/types';

export default function NavigationIcon({ onToggleNav }: HeaderProps) {
  return (
    <button type='button' onClick={onToggleNav}>
      <StyledFilledNavigationIcon />
    </button>
  );
}

const StyledFilledNavigationIcon = styled(FilledNavigation)`
  width: 30px;
`;
