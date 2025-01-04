import * as React from "react";
import { AboutXS } from "../Components/AboutSection/AboutXS.component";
import getCompanyData from "../../../utils/getCompanyData";

export default async function About() {
  const data = await getCompanyData();
  return (
    <div className="md:hidden xs:block">
      <AboutXS data={data} />
    </div>
  );
}
