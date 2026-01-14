import { MenuItem } from '../types';
import MenuCard from './MenuCard';

interface MenuGridProps {
  items: MenuItem[];
  onItemClick: (item: MenuItem) => void;
}

export default function MenuGrid({ items, onItemClick }: MenuGridProps) {
  if (items.length === 0) {
    return (
      <div className="px-4 py-12 text-center">
        <p className="text-text-muted">No items found in this category.</p>
      </div>
    );
  }

  return (
    <div className="px-4 pb-8">
      <div className="grid grid-cols-2 gap-3 sm:gap-4">
        {items.map((item, index) => (
          <MenuCard
            key={item.id}
            item={item}
            onClick={onItemClick}
            index={index}
          />
        ))}
      </div>
    </div>
  );
}
