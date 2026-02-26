export type PageRoute = "/" | "/menu" | "/about" | "/contact" | "/services" | "/services/catering" | "/services/events" | "/services/parties" | "/cart";

export interface HomePage {
  title: string;
  headline: string;
  body: string;
}

export interface MenuPage {
  title: string;
  headline: string;
  body: string;
  items?: MenuItem[];
}

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  image?: string;
  category: "appetizer" | "main" | "dessert" | "beverage";
}

export interface AboutPage {
  title: string;
  headline: string;
  body: string;
  story?: string;
}

export interface ContactPage {
  title: string;
  headline: string;
  email?: string;
  phone?: string;
  address?: string;
  hours?: string;
}

export interface ServicePage {
  title: string;
  headline: string;
  description: string;
  features?: string[];
  price?: number;
}

export interface CateringService extends ServicePage {
  minGuests?: number;
  maxGuests?: number;
  menus?: string[];
}

export interface PrivateDiningService extends ServicePage {
  capacity?: number;
  roomTypes?: string[];
}
