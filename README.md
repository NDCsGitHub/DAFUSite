Design and Structure:
src/
├── components/
│   ├── common/
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   └── Navigation.tsx
│   ├── ui/
│   │   ├── HamburgerMenu.tsx
│   │   ├── PopupMenu.tsx
│   │   ├── Button.tsx
│   │   └── Card.tsx
│   ├── cart/
│   │   ├── CartItem.tsx
│   │   ├── CartSummary.tsx
│   │   └── CartDrawer.tsx
│   ├── menu/
│   │   ├── MenuItem.tsx
│   │   ├── MenuList.tsx
│   │   └── MenuFilter.tsx
│   └── services/
│       ├── CateringCard.tsx
│       ├── EventsCard.tsx
│       └── PrivateDiningCard.tsx
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
│       └── private-dining.tsx
├── store/
│   ├── useCartStore.ts
│   ├── useMenuStore.ts
│   ├── useAuthStore.ts
│   └── useOrderStore.ts
├── hooks/
│   ├── useCart.ts
│   ├── useMenu.ts
│   └── useServices.ts
├── lib/
│   ├── api.ts
│   ├── constants.ts
│   └── utils.ts
├── types/
│   ├── cart.ts
│   ├── menu.ts
│   ├── order.ts
│   └── restaurant.ts
└── styles/
    └── globals.css