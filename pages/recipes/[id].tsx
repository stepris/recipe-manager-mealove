import { useRouter } from 'next/router';

export default function RecipeDetailsPage() {
  const router = useRouter();

  const { id } = router.query;

  return <h1>Dynamic Recipe Page</h1>;
}
