import { useEffect } from "react";
import { siteContent } from "../data/siteContent";
import { withBasePath } from "../utils/paths";

type PageMeta = {
  title: string;
  description: string;
};

function upsertMeta(selector: string, attribute: "name" | "property", key: string, content: string) {
  let meta = document.head.querySelector<HTMLMetaElement>(selector);

  if (!meta) {
    meta = document.createElement("meta");
    meta.setAttribute(attribute, key);
    document.head.appendChild(meta);
  }

  meta.content = content;
}

export function usePageMeta({ title, description }: PageMeta) {
  useEffect(() => {
    document.title = title;
    upsertMeta('meta[name="description"]', "name", "description", description);
    upsertMeta('meta[property="og:title"]', "property", "og:title", title);
    upsertMeta('meta[property="og:description"]', "property", "og:description", description);
    upsertMeta('meta[name="twitter:title"]', "name", "twitter:title", title);
    upsertMeta('meta[name="twitter:description"]', "name", "twitter:description", description);

    const socialPreviewPath = withBasePath(siteContent.seo.socialPreviewPath);

    if (socialPreviewPath) {
      upsertMeta('meta[property="og:image"]', "property", "og:image", socialPreviewPath);
      upsertMeta('meta[name="twitter:image"]', "name", "twitter:image", socialPreviewPath);
    }
  }, [description, title]);
}
