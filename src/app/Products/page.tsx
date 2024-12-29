import * as React from "react";
import { ProductsXS } from "../Components/ProductsSection/ProductsSectionXS.component";
import PlansPricingXS from "../Components/PlansPricing/PlansPricingXS.component";

export default function Products() {
  return (
    <div className="md:hidden xs:block">
      <ProductsXS />
      <PlansPricingXS />
    </div>
  );
}
