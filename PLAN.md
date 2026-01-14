# Implementation Plan - Sauna Menu Web App

## Phase 1: Frontend MVP with Sample Data

### Step 1: Project Setup
- [ ] Initialize Vite + React + TypeScript: `npm create vite@latest . -- --template react-ts`
- [ ] Install Tailwind CSS: `npm install -D tailwindcss postcss autoprefixer`
- [ ] Configure Tailwind with `tailwind.config.js`
- [ ] Create folder structure: `src/components`, `src/data`, `src/types`
- [ ] Add `netlify.toml` configuration:
```toml
[build]
  command = "npm run build"
  publish = "dist"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

### Step 2: TypeScript Types
- [ ] Create `src/types/index.ts` with MenuItem interface:
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
```

### Step 3: Sample Data
- [ ] Create `src/data/menuItems.ts` with 10-12 sample items
- [ ] Add placeholder images to `public/images/`
- [ ] Mix of featured (4) and regular items across all categories

### Step 4: Components (using useState hooks)
- [ ] **Header.tsx** - Sauna branding/logo
- [ ] **FeaturedCarousel.tsx** - Horizontal scroll, filter `isFeatured: true`
- [ ] **CategoryTabs.tsx** - State: `useState<Category | 'all'>('all')`
- [ ] **MenuGrid.tsx** - Responsive grid, receives filtered items
- [ ] **MenuCard.tsx** - Image, name, price, onClick handler
- [ ] **ItemModal.tsx** - Full description, large image, close button
  - State: `useState<MenuItem | null>(null)` for selected item

### Step 5: App Assembly
- [ ] Wire components in `App.tsx`
- [ ] Implement filtering logic with useState:
```typescript
const [category, setCategory] = useState<Category | 'all'>('all');
const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null);
```
- [ ] Pass handlers down to child components

### Step 6: Styling - Retrowave/Synthwave Theme
- [ ] Configure CSS variables in `index.css` (dark theme, neon accents)
- [ ] Add Google Fonts: Bebas Neue (headings) + Outfit (body)
- [ ] Dark background (#0D0D0D) with sunset gradient hero
- [ ] Neon pink glow effects on featured items
- [ ] Horizontal scan lines overlay (CSS pattern)
- [ ] Card hover states with lift + pink border glow
- [ ] Staggered fade-in animations on page load
- [ ] Mobile-first breakpoints (sm:, md:, lg:)
- [ ] Touch-friendly sizing (min 44px tap targets)
- [ ] Smooth modal transitions with backdrop blur

### Step 7: Deploy
- [ ] Run `npm run build` and test locally
- [ ] Connect repo to Netlify
- [ ] Deploy and get live URL
- [ ] Generate QR code for menu access

---

## File Structure
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

---

## Sample Menu Items (Jomtien Sauna Gym)

### Food
1. **Grilled Chicken Satay** - Featured - ฿120
2. **Pad Thai** - ฿95
3. **Green Papaya Salad** - ฿75
4. **Protein Power Bowl** - Featured - ฿145

### Drinks
5. **Fresh Coconut Water** - Featured - ฿60
6. **Thai Iced Tea** - ฿55
7. **Electrolyte Smoothie** - ฿85
8. **Fresh Lime Soda** - ฿45

### Snacks
9. **Spring Rolls (4pc)** - ฿65
10. **Mixed Nuts & Seeds** - ฿50
11. **Fresh Fruit Platter** - Featured - ฿80

### Desserts
12. **Mango Sticky Rice** - ฿90
13. **Coconut Ice Cream** - ฿70

---

## Phase 2: Backend + Admin (Future)
- Supabase database for menu items
- Supabase Storage for images
- Netlify Functions for API
- Admin panel at `/admin` route
