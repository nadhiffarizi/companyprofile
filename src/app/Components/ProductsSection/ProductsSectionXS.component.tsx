import * as React from "react";
import { AccordionBenefitsXS } from "../Accordion/AccordionXS.component";
import Image from "next/image";
import { EntryCollection } from "contentful";
import { TypeSaasdeskFields } from "../../../../contentful/contentfulTypes";

export function ProductsXS({
  data,
}: {
  data: EntryCollection<TypeSaasdeskFields, undefined, string> | undefined;
}) {
  const benefit = JSON.stringify(data?.items[0].fields.benefit);
  const benefitJson = JSON.parse(benefit);
  if (!benefit || benefit === null) {
    return;
  }

  return (
    <div>
      <div className="w-full ">
        {" "}
        {/**Main Div  */}
        <div className="flex flex-col items-center mx-7 pt-12 h-full ">
          <p className="text-sm font-semibold">TOP BENEFITS</p>
          <h1 className="mt-4 text-[1.65rem] text-center tracking-wide leading-snug">
            {benefitJson["headline"]}
          </h1>
          <div className="mt-10 w-full ">
            <AccordionBenefitsXS data={benefitJson["points"]} />
          </div>
          <div className="flex justify-center relative w-full mt-5">
            {/**Div for benefit photo */}
            <Image
              width={500}
              height={500}
              alt="Benefit photo"
              className="max-w-[350px] w-full h-full"
              src={`/Media/benefitpicture.webp`}
            />
            <Image
              width={500}
              height={500}
              alt="benefit photo1"
              className=" absolute max-w-[150px] w-2/5 bottom-0 "
              src={`/Media/benefitpicture1.webp`}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
