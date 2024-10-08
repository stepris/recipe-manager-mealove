import styled from 'styled-components';
import Image from 'next/image';
import {
  CategoryIconProps,
  StyledIconButtonProps,
} from '@/types/CategoryIcon.types';
import { media } from '@/styles';

export default function CategoryIconButton({
  category,
  onChangeFilter,
  activeFilter,
}: CategoryIconProps) {
  const { iconPath, name, colorVarName } = category;

  return (
    <StyledIconButton
      $colorVarName={colorVarName}
      onClick={() => onChangeFilter(name)}
      $activeFilter={activeFilter === name}
      $color={colorVarName}
      $name={name}
    >
      <StyledIcon
        alt={`${name} icon`}
        src={`${iconPath}`}
        width={0}
        height={0}
      />
      <span>{name}</span>
    </StyledIconButton>
  );
}

const StyledIconButton = styled.button<StyledIconButtonProps>`
  background-color: ${({ $activeFilter, $color }) =>
    $activeFilter ? `var(${$color})` : 'var(--color-neutral-2)'};
  font: var(--font-category-icon);
  width: 50px;
  height: 50px;
  max-width: 75px;
  max-height: 75px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: var(--radius-m);
  transition: all 0.1s ease-in-out;
  filter: drop-shadow(0.2rem 0.2rem 0.2rem var(--color-primary-2));
  &:hover {
    background-color: var(${({ $colorVarName }) => $colorVarName});
    transform: scale(1.1);
  }
  @media ${media.mediumPlus} {
    width: 60px;
    height: 60px;
  }
  @media ${media.large} {
    width: 75px;
    height: 75px;
    font-size: var(--font-size-m);
  }
`;

const StyledIcon = styled(Image)`
  width: 25px;
  height: 25px;
  @media ${media.mediumPlus} {
    width: 35px;
    height: 35px;
  }
  @media ${media.large} {
    width: 40px;
    height: 40px;
  }
`;
