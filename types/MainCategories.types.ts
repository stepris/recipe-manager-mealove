export type MainCategoriesProps = {
  onChangeFilter: (category: string) => void;
  activeFilter: string;
};

export interface MainCategoriesStyledComponents {
  $isOpen: boolean;
}
