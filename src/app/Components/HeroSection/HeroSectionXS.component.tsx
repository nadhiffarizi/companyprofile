import * as React from "react";
import Image from "next/image";
import { EntryCollection } from "contentful";
import { TypeSaasdeskFields } from "../../../../contentful/contentfulTypes";
export function HeroSectionXS({
  data,
}: {
  data: EntryCollection<TypeSaasdeskFields, undefined, string> | undefined;
}) {
  return (
    <div>
      <div className="w-full bg-[#D0F8FE]">
        <div className="flex flex-col mx-7 h-full ">
          <h1 className="text-maintextcolor tracking-wide text-[2.3rem] mt-24">
            {" "}
            {/**Main Headline */} {data?.items[0].fields.companyheadline}
          </h1>
          <h2 className="text-lg text-secondarycolor tracking-wide leading-loose mt-3">
            {" "}
            {/**Sub Headline */}
            {data?.items[0].fields.description}
          </h2>
          <div className="flex flex-col justify-start items-start gap-2 h-[120px]  mt-5">
            {" "}
            {/**Free trial button div */}
            <button className="bg-maintextcolor w-[220px] rounded-full h-1/2">
              <p className="font-semibold text-white">
                Start 14-day free trial
              </p>
            </button>
            <p className="text-secondarycolor">*No Credit Card Required</p>
          </div>

          <div className="flex justify-center w-full h-[200px] ">
            <Image
              height={500}
              width={500}
              className="w-full max-w-[350px]"
              src={"/Media/mainpicture.webp"}
              alt="mainheadlinepicture"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
