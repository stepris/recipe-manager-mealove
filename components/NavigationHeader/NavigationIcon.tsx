import FilledNavigation from '@/public/icons/ic_fluent_navigation_24_filled.svg';
import styled from 'styled-components';
import { NavigationIconProps } from '@/types';

export default function NavigationIcon({ onToggleNav }: NavigationIconProps) {
  return (
    <button type='button' onClick={onToggleNav} aria-label='Toggle Navigation'>
      <StyledFilledNavigationIcon />
    </button>
  );
}

const StyledFilledNavigationIcon = styled(FilledNavigation)`
  width: 30px;
`;
