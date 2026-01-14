import { Category } from '../types';

interface CategoryTabsProps {
  activeCategory: Category | 'all';
  onCategoryChange: (category: Category | 'all') => void;
}

const categories: { value: Category | 'all'; label: string }[] = [
  { value: 'all', label: 'All' },
  { value: 'food', label: 'Food' },
  { value: 'drinks', label: 'Drinks' },
  { value: 'snacks', label: 'Snacks' },
  { value: 'desserts', label: 'Desserts' },
];

export default function CategoryTabs({ activeCategory, onCategoryChange }: CategoryTabsProps) {
  return (
    <div className="px-4 mb-6">
      <div className="flex gap-2 overflow-x-auto hide-scrollbar pb-2">
        {categories.map((cat) => {
          const isActive = activeCategory === cat.value;
          return (
            <button
              key={cat.value}
              onClick={() => onCategoryChange(cat.value)}
              className={`flex-shrink-0 px-5 py-2.5 rounded-full font-medium text-sm
                         transition-all duration-300 min-w-[80px]
                         ${isActive
                           ? 'bg-gradient-to-r from-neon-pink to-neon-magenta text-white shadow-lg shadow-neon-pink/30'
                           : 'bg-bg-card text-text-muted border border-white/10 hover:border-neon-pink/50 hover:text-white'
                         }`}
            >
              {cat.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}
