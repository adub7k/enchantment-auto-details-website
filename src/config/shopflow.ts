// ShopFlow integration — the site is static and can live on any host;
// it talks to the ShopFlow platform over its public per-shop API.
// Override per deployment via env (set at build time):
//   VITE_SHOPFLOW_API_URL   e.g. https://shopflowio.up.railway.app
//   VITE_SHOPFLOW_SHOP_SLUG the tenant slug created for Enchantment Auto Details
export const shopflow = {
  apiBase:
    (import.meta.env.VITE_SHOPFLOW_API_URL as string | undefined) ??
    "https://shopflowio.up.railway.app",
  // TODO(LAUNCH): must match the slug of the ShopFlow tenant exactly, or the
  // lead form posts into the void and the gallery stays empty. The admin
  // "create shop" endpoint derives `enchantment-auto-details` from the name
  // "Enchantment Auto Details" — never point this at another shop's slug.
  shopSlug:
    (import.meta.env.VITE_SHOPFLOW_SHOP_SLUG as string | undefined) ?? "enchantment-auto-details",
};

export const publicApi = (path: string) =>
  `${shopflow.apiBase}/api/public/${shopflow.shopSlug}${path}`;
