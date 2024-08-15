export type Category = {
  id: string;
  name: string;
  colorVarName: string;
  colorVarNameAlpha: string;
  iconPath: string;
};

export type CategoryIconProps = {
  category: Category;
  onChangeFilter: (category: string) => void;
  activeFilter: string;
};

export interface StyledIconButtonProps {
  $colorVarName: string;
  $activeFilter: string;
  $color: string;
  $name: string;
}
