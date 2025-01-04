import getCompanyData from "../../utils/getCompanyData";
import { HeroSectionXS } from "./Components/HeroSection/HeroSectionXS.component";
import { ProductsXS } from "./Components/ProductsSection/ProductsSectionXS.component";
import { ReviewSectionXS } from "./Components/ReviewSection/ReviewSectionXS.component";
export default async function Home() {
  const data = await getCompanyData();
  // console.log(data?.items[0].fields.benefit);

  return (
    <div>
      <div className="md:hidden xs:block">
        <HeroSectionXS data={data} />
        <ProductsXS data={data} />
        <ReviewSectionXS />
      </div>
    </div>
  );
}
