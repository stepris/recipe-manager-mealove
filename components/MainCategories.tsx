import CategoryIcon from './CategoryIcon';
import categories from '@/lib/categories.json';

export default function MainCategories() {
  return (
    <div>
      {categories.map((category) => (
        <CategoryIcon key={category.id} category={category} />
      ))}
    </div>
  );
}
