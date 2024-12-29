import * as React from "react";
import { Badge } from "@/components/ui/badge";
import { CheckIcon } from "@heroicons/react/20/solid";

export function CardPlansPricingXS() {
  return (
    <div className="flex justify-center w-full h-full">
      <div className="w-full max-w-[700px] h-[700px] bg-white rounded-3xl py-6 ">
        <div className="w-full h-full grid grid-rows-3 ">
          <div className=" row-span-1 w-full h-full px-6 ">
            <div className="grid grid-rows-3 w-full h-full border-b-[1px] border-slate-300">
              <div className="row-span-1  ">
                <h1 className="text-maintextcolor font-semibold tracking-wide text-[1.8rem]">
                  Free
                </h1>
              </div>
              <div className="row-span-1 ">
                <Badge className="w-24 h-8 text-[0.96rem] text-maintextcolor  flex justify-center bg-[#E6FBFF]">
                  $0/ month
                </Badge>
              </div>
              <div className="row-span-1 ">
                <button className="w-[140px] h-11 border-2 border-maintextcolor rounded-full">
                  Sign Up Now
                </button>
              </div>
            </div>
          </div>
          <div className="row-span-2 w-full h-full px-6 pt-10">
            <div className="grid grid-rows-12 w-full h-full ">
              <div className="row-span-1 ">
                <div className="flex flex-row w-full h-full">
                  <div className="flex flex-col justify-center w-1/6 ">
                    <CheckIcon className="w-full h-2/3 " />
                  </div>
                  <div className="flex flex-col justify-center w-5/6 ">
                    <p className="text-maintextcolor">Standard performace</p>
                  </div>
                </div>
              </div>
              <div className="row-span-1 ">
                <div className="flex flex-row w-full h-full">
                  <div className="flex flex-col justify-center w-1/6 ">
                    <CheckIcon className="w-full h-2/3 " />
                  </div>
                  <div className="flex flex-col justify-center w-5/6 ">
                    <p className="text-maintextcolor">2 website</p>
                  </div>
                </div>
              </div>
              <div className="row-span-1 ">
                <div className="flex flex-row w-full h-full">
                  <div className="flex flex-col justify-center w-1/6 ">
                    <CheckIcon className="w-full h-2/3 " />
                  </div>
                  <div className="flex flex-col justify-center w-5/6 ">
                    <p className="text-maintextcolor">100 GB storage</p>
                  </div>
                </div>
              </div>
              <div className="row-span-1 ">
                <div className="flex flex-row w-full h-full">
                  <div className="flex flex-col justify-center w-1/6 ">
                    <CheckIcon className="w-full h-2/3 " />
                  </div>
                  <div className="flex flex-col justify-center w-5/6 ">
                    <p className="text-maintextcolor">Standard performace</p>
                  </div>
                </div>
              </div>
              <div className="row-span-1 ">
                <div className="flex flex-row w-full h-full">
                  <div className="flex flex-col justify-center w-1/6 ">
                    <CheckIcon className="w-full h-2/3 " />
                  </div>
                  <div className="flex flex-col justify-center w-5/6 ">
                    <p className="text-maintextcolor">2 website</p>
                  </div>
                </div>
              </div>
              <div className="row-span-1 ">
                <div className="flex flex-row w-full h-full">
                  <div className="flex flex-col justify-center w-1/6 ">
                    <CheckIcon className="w-full h-2/3 " />
                  </div>
                  <div className="flex flex-col justify-center w-5/6 ">
                    <p className="text-maintextcolor">100 GB storage</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
