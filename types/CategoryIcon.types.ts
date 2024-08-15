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
  activeFilter: string | null;
};

export interface StyledIconButtonProps {
  $colorVarName: string;
  $activeFilter: string | null;
  $color: string;
  $name: string;
}
