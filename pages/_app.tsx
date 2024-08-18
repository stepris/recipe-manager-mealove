import useLocalStorageState from 'use-local-storage-state';
import GlobalStyle from '../styles';
import Layout from '@/components/Layout';
import recipesJson from '@/lib/recipes.json';
import type { AppProps } from 'next/app';
import { HandleToggleFavoriteFunction, Recipe } from '@/types';
import { useRouter } from 'next/router';
import useSWR from 'swr';

const fetcher = (...args) => fetch(...args).then((response) => response.json());

export default function App({ Component, pageProps }: AppProps) {
  const { data, error, isLoading } = useSWR('/api/recipes', fetcher);
  console.log(data);

  const [favoriteRecipesList, setFavoriteRecipesList] = useLocalStorageState<
    string[]
  >('favoriteRecipesList', { defaultValue: [] });

  const [recipes, setRecipes] = useLocalStorageState('recipes', {
    defaultValue: recipesJson,
  });

  const router = useRouter();

  const handleAddRecipe = (recipe: Recipe) => {
    setRecipes((currData) => [recipe, ...currData]);
  };

  const handleDeleteRecipe = (id: string) => {
    setRecipes(recipes.filter((recipe) => recipe.id !== id));
    router.push('/');
  };

  const handleEditRecipe = (currData: Recipe) =>
    setRecipes((recipes) =>
      recipes.map((recipe) => (recipe.id === currData.id ? currData : recipe))
    );

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
          onAddRecipe={handleAddRecipe}
          onDeleteRecipe={handleDeleteRecipe}
          onEditRecipe={handleEditRecipe}
        />
      </Layout>
    </>
  );
}
