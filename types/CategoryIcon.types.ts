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

export type StyledIconButtonProps = {
  $colorVarName: string;
  $activeFilter: boolean;
  $color: string;
  $name: string;
};
