import CardWithImageBlogSection from "@/components/card-with-image";

import GridLayoutImageCTAPreviewProjectPortfolio from "@/components/grid-layout";
import DefaultHeaderNavigation from "@/components/header";

import NewsletterSignUpFooterSection from "@/components/newsletter-footer";

export default function Home() {
  return (
    <main>
      <DefaultHeaderNavigation />

      <CardWithImageBlogSection />
      <GridLayoutImageCTAPreviewProjectPortfolio />

      <NewsletterSignUpFooterSection />
    </main>
  );
}
