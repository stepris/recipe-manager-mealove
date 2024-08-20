import useLocalStorageState from 'use-local-storage-state';
import GlobalStyle from '../styles';
import Layout from '@/components/Layout';
import type { AppProps } from 'next/app';
import { HandleToggleFavoriteFunction, Recipe } from '@/types';
import { useRouter } from 'next/router';
import useSWR, { SWRConfig } from 'swr';

const fetcher = (...args: [RequestInfo, RequestInit?]): Promise<Recipe[]> =>
  fetch(...args).then((response) => response.json());

export default function App({ Component, pageProps }: AppProps) {
  const {
    data: recipes,
    error,
    isLoading,
    mutate,
  } = useSWR('/api/recipes', fetcher);

  const [favoriteRecipesList, setFavoriteRecipesList] = useLocalStorageState<
    string[]
  >('favoriteRecipesList', { defaultValue: [] });

  const router = useRouter();

  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;
  if (!recipes) return null;

  async function handleDeleteRecipe(id: string) {
    const respone = await fetch(`/api/recipes/${id}`, {
      method: 'Delete',
    });
    if (respone.ok) {
      mutate();
      router.push('/');
    }
  }

  async function handleEditRecipe(updatedRecipe: Recipe) {
    const response = await fetch(`/api/recipes/${updatedRecipe._id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedRecipe),
    });
    if (response.ok) {
      mutate();
      router.back();
    }
  }

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
            /* refreshInterval: 1000, */
          }}
        >
          <Component
            {...pageProps}
            recipes={recipes}
            onToggleFavorite={handleToggleFavorite}
            favoriteRecipes={favoriteRecipes}
            favoriteRecipesList={favoriteRecipesList}
            onDeleteRecipe={handleDeleteRecipe}
            onEditRecipe={handleEditRecipe}
          />
        </SWRConfig>
      </Layout>
    </>
  );
}
