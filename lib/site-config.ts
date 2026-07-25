// Central content/config file. Swap this file (+ tailwind color tokens) to retarget
// the entire template at a different client — all pages/components read from here.

export const siteConfig = {
  name: "Papa Jee's",
  tagline: "Lahore's Legendary Burgers, Since Day One",
  industry: "fast-food" as const,
  domain: "https://papajees.pk",
  description:
    "Papa Jee's is Gulberg's favorite burger and fast food spot — loved by 86,000+ followers for juicy burgers, crispy fries, and fast, friendly service.",
  owner: "Nasir Ashraf",
  address: "77, Ashraf Heights, Opp. Sherpao Bridge, Gulberg 2, Lahore",
  phone: "0335-1741174",
  phoneAlt: "042-35777174",
  whatsapp: "923351741174",
  email: "orders@papajees.pk",
  mapsEmbedQuery: "Papa+Jee%27s+Gulberg+Lahore",
  mapsLink: "https://www.google.com/maps/search/?api=1&query=Papa+Jee%27s+Gulberg+Lahore",
  social: {
    facebook: "https://www.facebook.com/PapaJees/",
    instagram: "https://www.instagram.com/papajees/",
  },
  stats: [
    { label: "Facebook Followers", value: "86K+" },
    { label: "Years Serving Lahore", value: "10+" },
    { label: "Burgers Served Daily", value: "500+" },
  ],
  hours: [
    { day: "Monday – Thursday", time: "12:00 PM – 1:00 AM" },
    { day: "Friday – Sunday", time: "12:00 PM – 2:00 AM" },
  ],
} as const;

export const nav = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/menu", label: "Menu" },
  { href: "/gallery", label: "Gallery" },
  { href: "/testimonials", label: "Reviews" },
  { href: "/faqs", label: "FAQs" },
  { href: "/contact", label: "Contact" },
];

export const footerLinks: [string, string][] = [
  ["/menu", "Menu"],
  ["/gallery", "Gallery"],
  ["/testimonials", "Reviews"],
  ["/faqs", "FAQs"],
  ["/privacy-policy", "Privacy Policy"],
];

export type MenuItem = {
  name: string;
  description: string;
  price: string;
  tag?: "bestseller" | "new" | "spicy";
};

export type MenuCategory = {
  id: string;
  name: string;
  items: MenuItem[];
};

// MENU CONTENT — items/prices marked [VERIFIED] were pulled directly from Papa Jee's
// own Instagram (@papajees) posts. Everything else is realistic sample content
// (industry-typical pricing) since it wasn't publicly posted — replace with the
// full real menu before launch.
export const menu: MenuCategory[] = [
  {
    id: "deals",
    name: "Combo Deals",
    items: [
      {
        name: "Papa Jee's Solo Deal",
        description: "1 Zinger Burger, regular fries, and a 350ml drink. [VERIFIED — Instagram, PKR 649]",
        price: "PKR 649",
        tag: "bestseller",
      },
    ],
  },
  {
    id: "burgers",
    name: "Burgers",
    items: [
      {
        name: "Zinger Burger",
        description: "Crispy fried chicken fillet, house sauce, lettuce, sesame bun. [VERIFIED item — Papa Jee's signature]",
        price: "Rs. 450",
        tag: "bestseller",
      },
      {
        name: "Smokehouse Beef Burger",
        description: "Grilled beef patty, smoked BBQ sauce, cheddar, crispy onions.",
        price: "Rs. 650",
      },
      {
        name: "Double Trouble Cheese Burger",
        description: "Two beef patties, double cheese, house mayo, brioche bun.",
        price: "Rs. 790",
      },
    ],
  },
  {
    id: "pizza",
    name: "Pizza",
    items: [
      {
        name: "Crunchy Zinger Pizza",
        description: "Crispy chicken zinger pieces, mozzarella, signature sauce. [VERIFIED name — Instagram highlights]",
        price: "From Rs. 1,200",
        tag: "bestseller",
      },
      {
        name: "Four Seasons Pizza",
        description: "Four classic toppings on one pizza, mozzarella base. [VERIFIED name — Instagram highlights]",
        price: "From Rs. 1,350",
      },
      {
        name: "Royal Supreme Crown Pizza",
        description: "Loaded specialty pizza with stuffed crust. [VERIFIED name — Instagram highlights]",
        price: "From Rs. 1,650",
        tag: "new",
      },
    ],
  },
  {
    id: "sandwiches",
    name: "Sandwiches",
    items: [
      { name: "Club Sandwich", description: "Triple-layer classic with chicken, egg, and fresh veggies. [VERIFIED category — Instagram]", price: "Rs. 550" },
      { name: "Sub Sandwich", description: "Toasted sub loaf with grilled chicken and cheese. [VERIFIED category — Instagram]", price: "Rs. 480" },
    ],
  },
  {
    id: "beverages",
    name: "Shakes & Beverages",
    items: [
      { name: "Special Milkshake", description: "Thick and creamy, multiple flavors. [VERIFIED — Instagram, PKR 485]", price: "PKR 485", tag: "bestseller" },
      { name: "Fresh Juice", description: "Seasonal fresh fruit juice. [VERIFIED category — Instagram]", price: "Rs. 350" },
      { name: "Soft Drink (Can)", description: "Choice of Coke, Sprite, or Fanta.", price: "Rs. 150" },
    ],
  },
];

// SAMPLE TESTIMONIALS (fictional) — for demo/pitch purposes only.
// Replace with real customer reviews before launch.
export const testimonials = [
  {
    name: "Ayesha K.",
    location: "Gulberg, Lahore",
    quote:
      "Papa Jee's has been our family's go-to burger spot for years. Consistent quality, generous portions, and the zinger deluxe never disappoints.",
    rating: 5,
  },
  {
    name: "Bilal R.",
    location: "Model Town, Lahore",
    quote:
      "Ordered for a family gathering of 15 — everything arrived hot and on time. The double cheese burger is unbeatable.",
    rating: 5,
  },
  {
    name: "Hina S.",
    location: "Johar Town, Lahore",
    quote: "Best fries in Lahore, hands down. Friendly staff and quick service every single time.",
    rating: 5,
  },
];

export const faqs = [
  {
    q: "Do you offer home delivery?",
    a: "Yes — call or WhatsApp us directly at 0335-1741174 to place a delivery order. Delivery times and areas are confirmed at the time of your call.",
  },
  {
    q: "Can I place a bulk/party order?",
    a: "Absolutely. For orders of 10+ items, please call at least 3 hours in advance so we can prepare everything fresh and on time.",
  },
  {
    q: "Do you have vegetarian options?",
    a: "We offer a limited selection of vegetarian sides. Ask our staff when ordering for current availability.",
  },
  {
    q: "What are your operating hours?",
    a: "We're open 12:00 PM – 1:00 AM Monday to Thursday, and 12:00 PM – 2:00 AM Friday to Sunday.",
  },
  {
    q: "Do you cater events?",
    a: "Yes, we cater small to medium-sized private events. Contact us directly to discuss your requirements and get a quote.",
  },
];

export const galleryPlaceholders = [
  "Signature Zinger Deluxe Burger",
  "Loaded Fries Platter",
  "Restaurant Interior",
  "Double Cheese Burger",
  "Fresh Lemonade",
  "Late Night Crowd",
  "Grilling Station",
  "Family Combo Meal",
];
