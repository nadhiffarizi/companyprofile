import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

import * as React from "react";

export function AccordionBenefitsXS() {
  return (
    <Accordion
      type="single"
      collapsible
      className="w-full text-xl text-maintextcolor"
    >
      <AccordionItem value="item-1">
        <AccordionTrigger>Set And Track Employee Goals</AccordionTrigger>
        <AccordionContent className="text-base text-secondarycolor">
          Saasland HR provides cost-effective HR solutions for startups and
          SMBs, helping them establish efficient HR operations, manage growing
          teams.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Automate payroll processing</AccordionTrigger>
        <AccordionContent className="text-base text-secondarycolor">
          Saasland HR provides cost-effective HR solutions for startups and
          SMBs, helping them establish efficient HR operations, manage growing
          teams.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>Track employee attendance</AccordionTrigger>
        <AccordionContent className="text-base text-secondarycolor">
          Saasland HR provides cost-effective HR solutions for startups and
          SMBs, helping them establish efficient HR operations, manage growing
          teams.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-4">
        <AccordionTrigger>Time tracking solutions</AccordionTrigger>
        <AccordionContent className="text-base text-secondarycolor">
          Saasland HR provides cost-effective HR solutions for startups and
          SMBs, helping them establish efficient HR operations, manage growing
          teams.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
