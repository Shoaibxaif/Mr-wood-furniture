import { useEffect } from "react";

const BASE = "https://mr-wood-spaces.preview.emergentagent.com";

function upsertMeta(attr, key, content) {
  if (!content) return;
  let el = document.head.querySelector(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

// Lightweight SEO manager — sets title, meta, canonical and optional JSON-LD per route.
export const Seo = ({ title, description, path = "/", image, jsonLd }) => {
  useEffect(() => {
    if (title) document.title = title;
    upsertMeta("name", "description", description);
    upsertMeta("property", "og:title", title);
    upsertMeta("property", "og:description", description);
    if (image) upsertMeta("property", "og:image", image);

    const canonicalHref = `${BASE}${path}`;
    let link = document.head.querySelector('link[rel="canonical"]');
    if (!link) {
      link = document.createElement("link");
      link.setAttribute("rel", "canonical");
      document.head.appendChild(link);
    }
    link.setAttribute("href", canonicalHref);

    let script = null;
    if (jsonLd) {
      script = document.createElement("script");
      script.type = "application/ld+json";
      script.setAttribute("data-route-jsonld", "true");
      script.text = JSON.stringify(jsonLd);
      document.head.appendChild(script);
    }
    return () => {
      if (script) document.head.removeChild(script);
    };
  }, [title, description, path, image, jsonLd]);

  return null;
};
