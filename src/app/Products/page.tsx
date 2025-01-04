import * as React from "react";
import { ProductsXS } from "../Components/ProductsSection/ProductsSectionXS.component";
import PlansPricingXS from "../Components/PlansPricing/PlansPricingXS.component";
import getCompanyData from "../../../utils/getCompanyData";

export default async function Products() {
  const data = await getCompanyData();
  return (
    <div className="md:hidden xs:block">
      <ProductsXS data={data} />
      <PlansPricingXS />
    </div>
  );
}
