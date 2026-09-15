import { images } from "@/config/images";
import { site } from "@/config/site";
import { useSiteImage } from "@/lib/shopGallery";

/**
 * The wordmark. The emblem is cropped out of the owner's own logo artwork
 * (chrome "Enchantment" script over the red "AUTO DETAILS" banner) with a
 * feathered edge so its black ground melts into the page; the ShopFlow
 * `logo` slot overrides it at runtime if a newer file is uploaded there. It's
 * wide (2:1), so it's sized by height and the width follows.
 */
export function Logo({
  className = "",
  heightClass = "h-10",
  priority = false,
}: {
  className?: string;
  heightClass?: string;
  priority?: boolean;
}) {
  const override = useSiteImage(images.logo.key);
  const src = override || images.logo.wordmark;
  return (
    <img
      src={src}
      srcSet={
        override ? undefined : `${images.logo.wordmark} 700w, ${images.logo.wordmark2x} 1400w`
      }
      sizes={override ? undefined : "(min-width: 1024px) 320px, 220px"}
      alt={site.business.name}
      width={700}
      height={359}
      loading={priority ? "eager" : "lazy"}
      fetchPriority={priority ? "high" : "auto"}
      decoding="async"
      className={`${heightClass} w-auto object-contain ${className}`}
    />
  );
}
