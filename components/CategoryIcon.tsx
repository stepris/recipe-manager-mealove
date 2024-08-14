import styled from 'styled-components';
import Image from 'next/image';
import { CategoryIconProps } from '@/types/CategoryIcon.types';

export default function CategoryIcon({ category }: CategoryIconProps) {
  const { iconPath, name, colorVarName } = category;

  return (
    <StyledIconButton>
      <Image alt={`${name} icon`} src={`${iconPath}`} width={25} height={25} />
      <span>{name}</span>
    </StyledIconButton>
  );
}

const StyledIconButton = styled.button`
  background-color: var(--color-neutral-2);
  font: var(--font-category-icon);
  width: 50px;
  height: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: var(--radius-m);
`;
