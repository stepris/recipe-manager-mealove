import useLocalStorageState from 'use-local-storage-state';
import GlobalStyle from '../styles';
import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
  const [favoriteRecipes, setFavoriteRecipes] = useLocalStorageState(
    'favoriteRecipes',
    { defaultValue: [] }
  );

  const handleToggleFavorite = (id) => {
    /* const currentRecipe = favoriteRecipes.find((recipe) => recipe.id === id); */
    console.log(id);
  };

  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} onToggleFavorite={handleToggleFavorite} />
    </>
  );
}
