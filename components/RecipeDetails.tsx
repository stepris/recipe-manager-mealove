import { useRouter } from 'next/router';
import { Recipe } from '@/types';

type RecipeDetailsProps = {
  recipe: Recipe;
};

export default function RecipeDetails({ recipe }: RecipeDetailsProps) {
  if (!recipe) return null;

  const {
    title,
    imageUrl,
    ingredients,
    prepTime,
    cookingTime,
    servings,
    instructions,
  } = recipe;

  return <>]</>;
}
