import { MenuItem } from '../types';

interface ItemModalProps {
  item: MenuItem | null;
  onClose: () => void;
}

export default function ItemModal({ item, onClose }: ItemModalProps) {
  if (!item) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-end sm:items-center justify-center"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/80 modal-backdrop" />

      {/* Modal content */}
      <div
        className="relative w-full max-w-lg bg-bg-elevated rounded-t-3xl sm:rounded-3xl
                   max-h-[90vh] overflow-hidden animate-slide-up"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full
                     bg-bg-primary/80 text-white flex items-center justify-center
                     hover:bg-neon-pink transition-colors"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Image */}
        <div className="relative h-56 sm:h-64">
          <img
            src={item.imageUrl}
            alt={item.name}
            className="w-full h-full object-cover"
          />
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-bg-elevated via-transparent to-transparent" />

          {/* Featured badge */}
          {item.isFeatured && (
            <div className="absolute top-4 left-4 px-3 py-1 rounded-full featured-badge text-sm font-semibold">
              FEATURED
            </div>
          )}
        </div>

        {/* Content */}
        <div className="p-6 -mt-8 relative">
          {/* Category */}
          <span className="inline-block px-3 py-1 rounded-full bg-bg-card text-text-muted text-xs uppercase tracking-wider mb-3">
            {item.category}
          </span>

          {/* Title & Price */}
          <div className="flex items-start justify-between gap-4 mb-4">
            <h2 className="font-heading text-3xl text-white leading-tight">
              {item.name}
            </h2>
            <span className="price text-2xl flex-shrink-0">
              ฿{item.price}
            </span>
          </div>

          {/* Description */}
          <p className="text-text-muted leading-relaxed">
            {item.description}
          </p>
        </div>

        {/* Bottom padding for mobile safe area */}
        <div className="h-6 sm:h-0" />
      </div>
    </div>
  );
}
