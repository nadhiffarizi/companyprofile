import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { CardPlansPricingXS } from "./Card/CardPlansPricingXS.component";
import * as React from "react";

export default function PlansPricingXS() {
  return (
    <div className="w-full h-[1000px] bg-[#E6FBFF]">
      <div className="mx-7 h-full ">
        <div className="flex justify-center items-start w-full h-[140px] pt-10">
          <h1 className="text-maintextcolor tracking-wide text-[2rem] ">
            Plans and pricing
          </h1>
        </div>
        <div className="flex flex-col justify-center items-start w-full  gap-2 ">
          <div className="px-8 w-full  flex flex-row-reverse items-end ">
            <Badge className="bg-yellow-200 border-none w-[68px] h-6 flex justify-center items-center text-maintextcolor ">
              30% Off
            </Badge>
          </div>
          <div className="px-8 w-full  flex flex-row-reverse items-end ">
            <div className="grid grid-cols-4 w-full h-full">
              <div className="col-span-1 flex justify-start text-lg ">
                <p>Monthly</p>
              </div>
              <div className="col-span-2">
                {" "}
                <div className=" w-full flex justify-center items-center space-x-2">
                  <Switch className="-z-5" />
                </div>
              </div>
              <div className="col-span-1 flex justify-end text-lg ">
                <p>Yearly</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center items-start w-full gap-2 my-20 ">
          <CardPlansPricingXS />
        </div>
      </div>
    </div>
  );
}
