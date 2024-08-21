import QuickLinks from '@/components/QuickLinks';
import RecipeList from '@/components/RecipeList';
import { AppBaseProps } from '@/types';
import IsLoading from '@/components/IsLoading';
import { useSession, signIn, signOut } from 'next-auth/react';

export default function HomePage({
  recipes,
  onToggleFavorite,
  favoriteRecipesList,
  isLoading,
}: AppBaseProps) {
  const { data: session } = useSession();

  console.log(session);

  return (
    <main>
      <QuickLinks />
      {isLoading ? (
        <IsLoading />
      ) : (
        <RecipeList
          onToggleFavorite={onToggleFavorite}
          recipes={recipes || []}
          favoriteRecipesList={favoriteRecipesList}
        />
      )}
    </main>
  );
}
