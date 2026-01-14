import { useState } from 'react';
import { MenuItem, Category } from './types';
import { menuItems } from './data/menuItems';
import Header from './components/Header';
import FeaturedCarousel from './components/FeaturedCarousel';
import CategoryTabs from './components/CategoryTabs';
import MenuGrid from './components/MenuGrid';
import ItemModal from './components/ItemModal';

function App() {
  const [category, setCategory] = useState<Category | 'all'>('all');
  const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null);

  // Filter items by category (excluding featured from main grid when showing all)
  const filteredItems = menuItems.filter(item => {
    if (category === 'all') return true;
    return item.category === category;
  });

  const handleItemClick = (item: MenuItem) => {
    setSelectedItem(item);
  };

  const handleCloseModal = () => {
    setSelectedItem(null);
  };

  return (
    <div className="min-h-screen bg-bg-primary scanlines">
      {/* Background gradient effect */}
      <div className="fixed inset-0 bg-gradient-to-b from-sunset-red/5 via-transparent to-neon-pink/5 pointer-events-none" />

      <div className="relative">
        <Header />
        <FeaturedCarousel items={menuItems} onItemClick={handleItemClick} />
        <CategoryTabs activeCategory={category} onCategoryChange={setCategory} />
        <MenuGrid items={filteredItems} onItemClick={handleItemClick} />
      </div>

      {/* Modal */}
      <ItemModal item={selectedItem} onClose={handleCloseModal} />
    </div>
  );
}

export default App;
