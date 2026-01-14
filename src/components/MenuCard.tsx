import { MenuItem } from '../types';

interface MenuCardProps {
  item: MenuItem;
  onClick: (item: MenuItem) => void;
  index: number;
}

export default function MenuCard({ item, onClick, index }: MenuCardProps) {
  return (
    <button
      onClick={() => onClick(item)}
      className={`menu-card w-full rounded-xl overflow-hidden bg-bg-card
                 border border-white/5 text-left
                 opacity-0 animate-slide-up`}
      style={{
        animationFillMode: 'forwards',
        animationDelay: `${0.1 + index * 0.05}s`
      }}
    >
      {/* Image */}
      <div className="relative h-32 overflow-hidden">
        <img
          src={item.imageUrl}
          alt={item.name}
          className="w-full h-full object-cover"
          loading="lazy"
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-bg-card via-transparent to-transparent opacity-60" />

        {/* Category badge */}
        <div className="absolute top-2 left-2 px-2 py-0.5 rounded-full bg-bg-primary/80 text-xs text-text-muted capitalize">
          {item.category}
        </div>
      </div>

      {/* Content */}
      <div className="p-3">
        <h3 className="font-semibold text-white mb-1 truncate">
          {item.name}
        </h3>
        <p className="price">฿{item.price}</p>
      </div>
    </button>
  );
}
