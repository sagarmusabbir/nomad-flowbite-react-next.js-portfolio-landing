import CardWithImageBlogSection from "@/app/components/card-with-image";

import GridLayoutImageCTAPreviewProjectPortfolio from "@/app/components/grid-layout";
import DefaultHeaderNavigation from "@/app/components/header";

import NewsletterSignUpFooterSection from "@/app/components/newsletter-footer";

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
