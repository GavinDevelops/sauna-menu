# Sauna Menu Web App

## Project Overview
A mobile-first web application for a sauna that serves food. Customers scan a QR code to view the menu on their phones. The app highlights featured items prominently and allows browsing the full menu.

**Current Phase**: Frontend MVP with sample data (no backend)

## Tech Stack
- **Frontend**: React 18 with TypeScript
- **Styling**: Tailwind CSS (mobile-first approach)
- **Hosting**: Netlify (static site)
- **Build Tool**: Vite
- **Data**: Static sample data in TypeScript

## Project Structure
```
menu/
├── src/
│   ├── components/
│   │   ├── Header.tsx
│   │   ├── FeaturedCarousel.tsx
│   │   ├── CategoryTabs.tsx
│   │   ├── MenuGrid.tsx
│   │   ├── MenuCard.tsx
│   │   └── ItemModal.tsx
│   ├── data/
│   │   └── menuItems.ts
│   ├── types/
│   │   └── index.ts
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── public/
│   └── images/
├── index.html
├── netlify.toml
├── tailwind.config.js
├── tsconfig.json
├── package.json
└── claude.md
```

## Data Model

### MenuItem Interface
```typescript
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
```

## React Patterns

### State Management (useState)
```typescript
import { useState } from 'react';

// Category filter state
const [category, setCategory] = useState<Category | 'all'>('all');

// Selected item for modal
const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null);
```

### Component Props with TypeScript
```typescript
interface MenuCardProps {
  item: MenuItem;
  onClick: (item: MenuItem) => void;
}

function MenuCard({ item, onClick }: MenuCardProps) {
  return (/* ... */);
}
```

## Key Features

### Customer Menu View
1. **Header** - Sauna branding
2. **FeaturedCarousel** - Horizontal scroll of featured items
3. **CategoryTabs** - Filter: All, Food, Drinks, Snacks, Desserts
4. **MenuGrid** - Responsive card grid
5. **ItemModal** - Full details on tap

## Design Guidelines - Retrowave/Synthwave Aesthetic
- Mobile-first: Design for 375px, scale up
- **Dark theme** with neon accents (tropical retrowave vibe)
- Large touch targets (min 44px)
- Smooth modal transitions with glow effects
- Horizontal scan lines as decorative elements
- Gradient backgrounds reminiscent of sunset

## Color Palette (from Jomtien Sauna Gym logo)
```css
:root {
  /* Background */
  --bg-primary: #0D0D0D;        /* Near black */
  --bg-card: #1A1A1A;           /* Dark gray cards */
  --bg-elevated: #242424;       /* Slightly lighter for modals */

  /* Sunset Gradient (sun in logo) */
  --sunset-yellow: #FFD93D;     /* Top of sun */
  --sunset-orange: #FF914D;     /* Mid sun */
  --sunset-red: #C23A22;        /* Bottom of sun */

  /* Neon Accent (outer ring gradient) */
  --neon-pink: #FF2D95;         /* Hot pink */
  --neon-magenta: #D946EF;      /* Magenta */
  --neon-orange: #FF6B35;       /* Neon orange */

  /* Text */
  --text-primary: #FFFFFF;      /* White */
  --text-muted: #A3A3A3;        /* Gray */

  /* Functional */
  --price-color: #FFD93D;       /* Yellow for prices */
  --featured-glow: #FF2D95;     /* Pink glow for featured */
}
```

## Typography
- **Headings**: Bebas Neue or Oswald (bold, condensed - matches logo style)
- **Body**: Outfit or Lexend (modern, clean, good readability on dark)
- Avoid: Inter, Roboto, Arial, Space Grotesk

## Visual Effects
- Neon glow on featured items: `box-shadow: 0 0 20px var(--neon-pink)`
- Sunset gradient for hero/featured section
- Subtle horizontal scan lines (CSS repeating-linear-gradient)
- Card hover: lift + pink glow border
- Staggered fade-in on page load

## Development Commands
```bash
npm install          # Install dependencies
npm run dev          # Local dev server
npm run build        # Production build
npm run preview      # Preview production build
```

## Netlify Configuration (netlify.toml)
```toml
[build]
  command = "npm run build"
  publish = "dist"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

## Future Phases
- **Phase 2**: Supabase backend + admin panel
- **Phase 3**: Image upload, real-time updates

## Frontend
<frontend_aesthetics>
You tend to converge toward generic, "on distribution" outputs. In frontend design, this creates what users call the "AI slop" aesthetic. Avoid this: make creative, distinctive frontends that surprise and delight. Focus on:

Typography: Choose fonts that are beautiful, unique, and interesting. Avoid generic fonts like Arial and Inter; opt instead for distinctive choices that elevate the frontend's aesthetics.

Color & Theme: Commit to a cohesive aesthetic. Use CSS variables for consistency. Dominant colors with sharp accents outperform timid, evenly-distributed palettes. Draw from IDE themes and cultural aesthetics for inspiration.

Motion: Use animations for effects and micro-interactions. Prioritize CSS-only solutions for HTML. Use Motion library for React when available. Focus on high-impact moments: one well-orchestrated page load with staggered reveals (animation-delay) creates more delight than scattered micro-interactions.

Backgrounds: Create atmosphere and depth rather than defaulting to solid colors. Layer CSS gradients, use geometric patterns, or add contextual effects that match the overall aesthetic.

Avoid generic AI-generated aesthetics:
- Overused font families (Inter, Roboto, Arial, system fonts)
- Clichéd color schemes (particularly purple gradients on white backgrounds)
- Predictable layouts and component patterns
- Cookie-cutter design that lacks context-specific character

Interpret creatively and make unexpected choices that feel genuinely designed for the context. Vary between light and dark themes, different fonts, different aesthetics. You still tend to converge on common choices (Space Grotesk, for example) across generations. Avoid this: it is critical that you think outside the box!
</frontend_aesthetics>
