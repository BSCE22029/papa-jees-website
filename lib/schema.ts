import { siteConfig } from "./site-config";

export function restaurantSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    name: siteConfig.name,
    description: siteConfig.description,
    image: `${siteConfig.domain}/og-image.jpg`,
    url: siteConfig.domain,
    telephone: siteConfig.phone,
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.address,
      addressLocality: "Lahore",
      addressCountry: "PK",
    },
    servesCuisine: "Fast Food",
    priceRange: "Rs. 150 - Rs. 900",
    sameAs: [siteConfig.social.facebook, siteConfig.social.instagram],
  };
}
