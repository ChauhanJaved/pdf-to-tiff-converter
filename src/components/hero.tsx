// src/components/hero.tsx

"use client";

//External Imports
import Image from "next/image";
import { Download } from "lucide-react";
import Link from "next/link";

//Internal Imports
import SectionHeader from "@/components/section-header";
import { HeaderNavItems, ProductIDs } from "@/data/website-data";
import { Button } from "@/components/ui/button";
import { portfolioItems } from "@/data/portfolio-items";
import ProductImage from "@/components/product-image";

const portfolioItemDesktop = portfolioItems.find(
  (item) => item.id === ProductIDs.PDFtoTIFFConverter,
);
export default function Hero() {
  return (
    <section id={HeaderNavItems.Home} className="relative flex w-full flex-col">
      {/* Hero background image */}
      <Image
        className="object-cover dark:hidden"
        src={"/frameworkteam/hero-bg"}
        fill
        alt="hero image"
        priority
      />
      <div className="z-0 container m-auto px-5 pt-24 pb-12 md:px-10 md:pt-32 xl:max-w-screen-xl">
        {portfolioItemDesktop && (
          <>
            <SectionHeader
              caption={portfolioItemDesktop.title}
              desc={portfolioItemDesktop.subtitle}
            />

            <div className="mt-10 flex w-full flex-col items-center justify-center gap-3 rounded-md border p-10">
              {/* ----- Box-1 ----- */}
              {portfolioItemDesktop.downloadLink && (
                <Button asChild className="text-base">
                  <a
                    href={portfolioItemDesktop.downloadLink}
                    download
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-row items-center justify-center gap-3"
                  >
                    <Download />
                    <span>Download Now</span>
                  </a>
                </Button>
              )}
              {/* ----- Box-2 ----- */}
              <ProductImage
                src={portfolioItemDesktop.src}
                width={portfolioItemDesktop.width}
                height={portfolioItemDesktop.height}
                alt={`Screenshot of ${portfolioItemDesktop.title} interface`}
                galleryID="product-image"
              />
            </div>
            {portfolioItemDesktop.description}
          </>
        )}
      </div>
    </section>
  );
}
