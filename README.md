Design and Structure:

- components are organized via features.
- Pages follow a feature-based structure where each page composes components from its corresponding feat
- 

**Benefits of this approach:**
- Easy to locate and modify page-specific components
- Clear separation of concerns between features
- Components are reusable across multiple pages
- Scalable structure for future feature additions

<!-- Zustand Statemangement -->
useCartStore.ts - Handles:
- Add/remove items from cart
- Update quantities
- Calculate total price
- Clear cart

useMenuStore.ts - Handles:
- Store menu items
- Filter by category
- Search functionality

useAuthStore.ts - Handles:
- User login/logout
- Current user info
- Auth token

useOrderStore.ts - Handles:
- Order history
- Current order status
- Order details

src/
├── components/ (components are organized by features)
│   ├── common/  (Header, Footer, Navigation)
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   └── Navigation.tsx
│   ├── ui/ (Reusable UI components like buttons, cards)
│   │   ├── HamburgerMenu.tsx
│   │   ├── PopupMenu.tsx
│   │   ├── Button.tsx
│   │   └── Card.tsx
│   ├── cart/  (Cart-related components)
│   │   ├── CartItem.tsx
│   │   ├── CartSummary.tsx
│   │   └── CartDrawer.tsx
│   ├── menu/ (Menu-related components)
│   │   ├── MenuItem.tsx
│   │   ├── MenuList.tsx
│   │   └── MenuFilter.tsx
│   └── services/ (Services-related components: CateringCard, EventsCard, etc.)
│       ├── CateringCard.tsx
│       ├── EventsCard.tsx
│       └── PartiesCard.tsx
├── pages/
│   ├── _layout.tsx
│   ├── index.tsx
│   ├── menu.tsx
│   ├── about.tsx
│   ├── contact.tsx
│   ├── cart.tsx
│   └── services/
│       ├── catering.tsx
│       ├── events.tsx
│       └── parties.tsx
├── store/
│   ├── useCartStore.ts  Manages shopping cart state 
│   ├── useMenuStore.ts  Manages menu items and filters
│   ├── useAuthStore.ts  Manages user authentication
│   └── useOrderStore.ts Manages order state
├── hooks/ calls for store and manages state in custom hook
│   ├── useCart.ts 
│   ├── useMenu.ts
│   └── useServices.ts
├── lib/
│   ├── constants.ts
│   └── utils.ts
├── types/
│   ├── pages.ts define more types file as we go
└── styles/
    └── globals.css