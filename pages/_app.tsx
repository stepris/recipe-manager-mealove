import useLocalStorageState from 'use-local-storage-state';
import GlobalStyle from '../styles';
import Layout from '@/components/Layout';
import type { AppProps } from 'next/app';
import { HandleToggleFavoriteFunction, Recipe } from '@/types';
import useSWR, { SWRConfig } from 'swr';

const fetcher = (...args: [RequestInfo, RequestInit?]): Promise<Recipe[]> =>
  fetch(...args).then((response) => response.json());

export default function App({ Component, pageProps }: AppProps) {
  const { data: recipes, error, isLoading } = useSWR('/api/recipes', fetcher);

  const [favoriteRecipesList, setFavoriteRecipesList] = useLocalStorageState<
    string[]
  >('favoriteRecipesList', { defaultValue: [] });

  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;
  if (!recipes) return null;

  const handleToggleFavorite: HandleToggleFavoriteFunction = (id) => {
    const favoriteSet = new Set<string>(favoriteRecipesList);
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
    if (!recipe._id) return null;
    return favoriteRecipesList.includes(recipe._id);
  });

  return (
    <>
      <GlobalStyle />
      <Layout>
        <SWRConfig
          value={{
            fetcher,
          }}
        >
          <Component
            {...pageProps}
            recipes={recipes}
            onToggleFavorite={handleToggleFavorite}
            favoriteRecipes={favoriteRecipes}
            favoriteRecipesList={favoriteRecipesList}
          />
        </SWRConfig>
      </Layout>
    </>
  );
}
