export type Category = {
  id: string;
  name: string;
  colorVarName: string;
  colorVarNameAlpha: string;
  iconPath: string;
};

export type CategoryIconProps = {
  category: Category;
};
