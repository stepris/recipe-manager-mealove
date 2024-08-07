import FilledNavigation from '@/public/icons/ic_fluent_navigation_24_filled.svg';
import styled from 'styled-components';

export default function NavigationIcon({ onToggleNav }) {
  return (
    <button type='button' onClick={onToggleNav}>
      <StyledFilledNavigationIcon />
    </button>
  );
}

const StyledFilledNavigationIcon = styled(FilledNavigation)`
  width: 30px;
`;
