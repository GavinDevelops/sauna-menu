import { MenuItem } from '../types';

interface FeaturedCarouselProps {
  items: MenuItem[];
  onItemClick: (item: MenuItem) => void;
}

export default function FeaturedCarousel({ items, onItemClick }: FeaturedCarouselProps) {
  const featuredItems = items.filter(item => item.isFeatured);

  if (featuredItems.length === 0) return null;

  return (
    <section className="mb-8">
      {/* Section header */}
      <div className="px-4 mb-4 flex items-center gap-3">
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-neon-pink to-transparent opacity-50" />
        <h2 className="font-heading text-2xl text-neon-pink tracking-wider">
          FEATURED
        </h2>
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-neon-pink to-transparent opacity-50" />
      </div>

      {/* Carousel */}
      <div className="overflow-x-auto hide-scrollbar">
        <div className="flex gap-4 px-4 pb-2">
          {featuredItems.map((item, index) => (
            <button
              key={item.id}
              onClick={() => onItemClick(item)}
              className={`flex-shrink-0 w-64 rounded-xl overflow-hidden bg-bg-card
                         border border-neon-pink/30 transition-all duration-300
                         hover:border-neon-pink hover:shadow-lg hover:shadow-neon-pink/20
                         opacity-0 animate-slide-up stagger-${index + 1}`}
              style={{ animationFillMode: 'forwards' }}
            >
              {/* Image */}
              <div className="relative h-36 overflow-hidden">
                <img
                  src={item.imageUrl}
                  alt={item.name}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-bg-card via-transparent to-transparent" />
                {/* Featured badge */}
                <div className="absolute top-2 right-2 px-2 py-1 rounded-full featured-badge text-xs font-semibold">
                  FEATURED
                </div>
              </div>

              {/* Content */}
              <div className="p-4 text-left">
                <h3 className="font-heading text-xl text-white mb-1 truncate">
                  {item.name}
                </h3>
                <p className="price text-lg">฿{item.price}</p>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
