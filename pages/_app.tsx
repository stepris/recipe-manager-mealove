import useLocalStorageState from 'use-local-storage-state';
import GlobalStyle from '../styles';
import Layout from '@/components/Layout';
import recipes from '@/lib/recipes.json';
import type { AppProps } from 'next/app';
import { handleToggleFavoriteFunction } from '@/types';

export default function App({ Component, pageProps }: AppProps) {
  const [favoriteRecipesList, setFavoriteRecipesList] = useLocalStorageState(
    'favoriteRecipesList',
    { defaultValue: [] }
  );

  const handleToggleFavorite: handleToggleFavoriteFunction = (id) => {
    const favoriteSet = new Set(favoriteRecipesList);
    if (!id) {
      return;
    } else {
      if (favoriteSet.has(id)) {
        favoriteSet.delete(id);
      } else {
        favoriteSet.add(id);
      }
      setFavoriteRecipesList(Array.from(favoriteSet));
    }
  };

  const favoriteRecipes = recipes.filter((recipe) => {
    return favoriteRecipesList.includes(recipe.id);
  });

  return (
    <>
      <GlobalStyle />
      <Layout>
        <Component
          {...pageProps}
          recipes={recipes}
          onToggleFavorite={handleToggleFavorite}
          favoriteRecipes={favoriteRecipes}
          favoriteRecipesList={favoriteRecipesList}
        />
      </Layout>
    </>
  );
}
