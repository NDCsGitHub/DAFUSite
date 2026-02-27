export type PageRoute = | "/"
  | "/contact"
  | "/services/catering"
  | "/services/events"
  | "/services/parties"
  | "/menus/dineIn"
  | "/menus/takeout"
  | "/onlineOrder"
  | "/cart"
  | `/?${string}`
  | `/#${string}`
  | `/contact?${string}`
  | `/contact#${string}`
  | `/services/catering?${string}`
  | `/services/catering#${string}`
  | `/services/events?${string}`
  | `/services/events#${string}`
  | `/services/parties?${string}`
  | `/services/parties#${string}`
  | `/menus/dineIn?${string}`
  | `/menus/dineIn#${string}`
  | `/menus/takeout?${string}`
  | `/menus/takeout#${string}`
  | `/onlineOrder?${string}`
  | `/onlineOrder#${string}`
  | `/cart?${string}`
  | `/cart#${string}`;

