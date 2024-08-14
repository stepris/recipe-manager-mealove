import styled from 'styled-components';
import Image from 'next/image';

export default function CategoryIcon({ category }) {
  const { iconPath, name } = category;
  console.log(iconPath);
  return (
    <StyledIconButton>
      <span>{name}</span>
      <Image alt={`${name} icon`} src={`${iconPath}`} width={30} height={30} />
    </StyledIconButton>
  );
}

const StyledIconButton = styled.button`
  background-color: red;
`;
