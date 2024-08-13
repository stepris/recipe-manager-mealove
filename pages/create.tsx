import RecipeForm from '@/components/RecipeForm/RecipeForm';
import { OnAddRecipeType } from '@/types';

export default function Create({ onAddRecipe }: OnAddRecipeType) {
  return <RecipeForm onAddRecipe={onAddRecipe} />;
}
