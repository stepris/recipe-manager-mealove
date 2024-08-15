export type MainCategoriesProps = {
  onChangeFilter: (category: string) => void;
  activeFilter: string | null;
};

export type MainCategoriesStyledComponents = {
  $isOpen: boolean;
};
