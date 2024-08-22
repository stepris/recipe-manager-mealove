import RecipeList from '@/components/RecipeList';
import { AppBaseProps } from '@/types';
import IsLoading from '@/components/IsLoading';
import { useSession } from 'next-auth/react';
import NoUserRecipes from '@/components/NoUserRecipes';
import Login from '@/components/Login';

export default function MyRecipes({
  recipes,
  onToggleFavorite,
  favoriteRecipesList,
  isLoading,
}: AppBaseProps) {
  const { data: session } = useSession();
  const userId = session?.user?.id ?? null;

  const usersRecipes = recipes.filter((recipe) => recipe.authorId === userId);

  if (session) {
    if (usersRecipes.length === 0) {
      return <NoUserRecipes />;
    } else {
      return (
        <main>
          {isLoading ? (
            <IsLoading />
          ) : (
            <RecipeList
              onToggleFavorite={onToggleFavorite}
              recipes={usersRecipes || []}
              favoriteRecipesList={favoriteRecipesList}
            />
          )}
        </main>
      );
    }
  } else {
    return <Login />;
  }
}
