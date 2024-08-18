import useLocalStorageState from 'use-local-storage-state';
import GlobalStyle from '../styles';
import Layout from '@/components/Layout';
import recipesJson from '@/lib/recipes.json';
import type { AppProps } from 'next/app';
import { HandleToggleFavoriteFunction, Recipe } from '@/types';
import { useRouter } from 'next/router';
import useSWR from 'swr';
import { useEffect } from 'react';

const fetcher = (...args) => fetch(...args).then((response) => response.json());

export default function App({ Component, pageProps }: AppProps) {
  const { data: recipes, error, isLoading } = useSWR('/api/recipes', fetcher);

  const [favoriteRecipesList, setFavoriteRecipesList] = useLocalStorageState<
    string[]
  >('favoriteRecipesList', { defaultValue: [] });

  // const [recipes, setRecipes] = useLocalStorageState('recipes', {
  //   defaultValue: data,
  // });

  const router = useRouter();

  console.log(recipes);

  // useEffect(() => {
  //   setRecipes(data);
  // }, [data]);

  if (!recipes) {
    return null;
  } else {
    console.log('recipes da', recipes);
  }

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

  console.log(recipes);

  const favoriteRecipes = recipes.filter((recipe) => {
    return favoriteRecipesList.includes(recipe._id);
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
