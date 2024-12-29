import * as React from "react";
import { AccordionBenefitsXS } from "../Accordion/AccordionXS.component";
import Image from "next/image";

export function ProductsXS() {
  return (
    <div>
      <div className="w-full ">
        {" "}
        {/**Main Div  */}
        <div className="flex flex-col items-center mx-7 pt-12 h-full ">
          <p className="text-sm font-semibold">TOP BENEFITS</p>
          <h1 className="mt-4 text-[1.65rem] text-center tracking-wide leading-snug">
            Saasland HR is a cutting-edge, cloud-based Human Resources
            Management Software designed to streamline.
          </h1>
          <div className="mt-10 w-full ">
            <AccordionBenefitsXS />
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
