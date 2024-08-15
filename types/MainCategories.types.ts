export type MainCategoriesProps = {
  onChangeFilter: (category: string) => void;
  activeFilter: string | null;
};

export interface MainCategoriesStyledComponents {
  $isOpen: boolean;
}
