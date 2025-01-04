import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

import IBenefitPoints from "@/interface/benefitPoints.interface";

import * as React from "react";

export function AccordionBenefitsXS({ data }: { data: IBenefitPoints[] }) {
  return (
    <Accordion
      type="single"
      collapsible
      className="w-full text-xl text-maintextcolor"
    >
      {data.map((benefitPoint, index: number) => {
        const tempData: IBenefitPoints = {
          id: benefitPoint["id"],
          title: benefitPoint["title"],
          detail: benefitPoint["detail"],
        };
        return (
          <>
            <AccordionItem value={tempData.id}>
              <AccordionTrigger>{tempData.title}</AccordionTrigger>
              <AccordionContent className="text-base text-secondarycolor">
                {tempData.detail}
              </AccordionContent>
            </AccordionItem>
          </>
        );
      })}
    </Accordion>
  );
}
