import { HeroSectionXS } from "./Components/HeroSection/HeroSectionXS.component";
import { ProductsXS } from "./Components/ProductsSection/ProductsSectionXS.component";
import { ReviewSectionXS } from "./Components/ReviewSection/ReviewSectionXS.component";

export default function Home() {
  return (
    <div>
      <div className="md:hidden xs:block">
        <HeroSectionXS />
        <ProductsXS />
        <ReviewSectionXS />
      </div>
    </div>
  );
}
