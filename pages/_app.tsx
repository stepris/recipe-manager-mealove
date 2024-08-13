import useLocalStorageState from 'use-local-storage-state';
import GlobalStyle from '../styles';
import Layout from '@/components/Layout';
import recipesJson from '@/lib/recipes.json';
import type { AppProps } from 'next/app';
import { HandleToggleFavoriteFunction } from '@/types';

export default function App({ Component, pageProps }: AppProps) {
  const [favoriteRecipesList, setFavoriteRecipesList] = useLocalStorageState(
    'favoriteRecipesList',
    { defaultValue: [] }
  );

  const [recipes, setRecipes] = useLocalStorageState('recipes', {
    defaultValue: recipesJson,
  });

  const handleAddRecipe = (recipe) => {
    setRecipes((currData) => [recipe, ...currData]);
  };

  const handleToggleFavorite: HandleToggleFavoriteFunction = (id) => {
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
  console.log(recipes);
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
        />
      </Layout>
    </>
  );
}
