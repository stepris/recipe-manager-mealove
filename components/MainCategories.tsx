import CategoryIcon from './CategoryIcon';
import categories from '@/lib/categories.json';

export default function MainCategories() {
  console.log(categories);
  return (
    <div>
      {categories.map((category) => (
        <CategoryIcon key={category.id} category={category} />
      ))}
    </div>
  );
}
