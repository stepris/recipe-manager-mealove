import styled from 'styled-components';
import Image from 'next/image';
import {
  CategoryIconProps,
  StyledIconButtonProps,
} from '@/types/CategoryIcon.types';

export default function CategoryIcon({
  category,
  onChangeFilter,
}: CategoryIconProps) {
  const { iconPath, name, colorVarName } = category;

  return (
    <StyledIconButton
      $colorVarName={colorVarName}
      onClick={() => onChangeFilter(name)}
    >
      <Image alt={`${name} icon`} src={`${iconPath}`} width={25} height={25} />
      <span>{name}</span>
    </StyledIconButton>
  );
}

const StyledIconButton = styled.button<StyledIconButtonProps>`
  background-color: var(--color-neutral-2);
  font: var(--font-category-icon);
  width: 50px;
  height: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: var(--radius-m);
  transition: all 0.1s ease-in-out;
  filter: drop-shadow(0.2rem 0.2rem 0.2rem var(--color-primary-2));
  &:hover {
    background-color: var(${(props) => props.$colorVarName});
    transform: scale(1.1);
  }
`;
