export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  isFeatured: boolean;
  category: 'food' | 'drinks' | 'snacks' | 'desserts';
}

export type Category = MenuItem['category'];
