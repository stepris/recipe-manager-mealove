type Recipe = {
  id: string;
  title: string;
  imageUrl: string;
  description: string;
  ingredients: {
    id: string;
    quantity: number;
    unit: string;
    name: string;
  }[];
  prepTime: {
    h: number;
    min: number;
  };
  cookingTime: {
    h: number;
    min: number;
  };
  servings: number;
  tags: string[];
  instructions: {
    id: string;
    description: string;
  }[];
};

export type { Recipe };
