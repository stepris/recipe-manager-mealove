import useLocalStorageState from 'use-local-storage-state';
import GlobalStyle from '../styles';
import Layout from '@/components/Layout';
import recipesJson from '@/lib/recipes.json';
import type { AppProps } from 'next/app';
import { HandleToggleFavoriteFunction, Recipe } from '@/types';
import { useRouter } from 'next/router';

export default function App({ Component, pageProps }: AppProps) {
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

    const handleEditRecipe = (recipeToUpdate: Recipe) => {
      setRecipes((recipes) => {
        return recipes.map((recipe) => {
          if (recipe.id === recipeToUpdate.id) {
            return recipeToUpdate;
          } else {
            return recipe;
          }
        });
      });
    };

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
  };
}
