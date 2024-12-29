import * as React from "react";
import TeamsInfoXS from "../Components/Teams/TeamsIntroXS.component";
import { TeamsXS } from "../Components/Teams/TeamsXS.component";

export default function Teams() {
  return (
    <div className="md:hidden xs:block">
      <TeamsInfoXS />
      <TeamsXS />
    </div>
  );
}
