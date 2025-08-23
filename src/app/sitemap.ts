// src/app/sitemap.ts

import { portfolioItems } from "@/data/portfolio-items";
import { ProductIDs } from "@/data/website-data";
import type { MetadataRoute } from "next";
export const dynamic = "force-static";
export default function sitemap(): MetadataRoute.Sitemap {
  const portfolioItemDesktop = portfolioItems.find(
    (item) => item.id === ProductIDs.PDFtoTIFFConverter,
  );
  return [
    {
      url: `${portfolioItemDesktop?.productWebsite}`,
      lastModified: new Date(),
      priority: 1,
    },
    {
      url: `${portfolioItemDesktop?.productWebsite}/index.html`,
      lastModified: new Date(),
      priority: 0.9,
    },
  ];
}
