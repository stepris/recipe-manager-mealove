import useLocalStorageState from 'use-local-storage-state';
import GlobalStyle from '../styles';
import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
  const [favoriteRecipes, setFavoriteRecipes] = useLocalStorageState(
    'favoriteRecipes',
    { defaultValue: [] }
  );

  const handleToggleFavorite = (id) => {
    const favoriteSet = new Set(favoriteRecipes);
    if (!id) {
      return;
    } else {
      if (favoriteSet.has(id)) {
        favoriteSet.delete(id);
      } else {
        favoriteSet.add(id);
      }
      setFavoriteRecipes(Array.from(favoriteSet));
    }
  };

  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} onToggleFavorite={handleToggleFavorite} />
    </>
  );
}
