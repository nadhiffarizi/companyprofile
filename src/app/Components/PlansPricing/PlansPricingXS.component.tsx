"use client";

import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { CardPlansPricingXS } from "./Card/CardPlansPricingXS.component";
import * as React from "react";
import { useEffect, useState } from "react";
import getCompanyData from "../../../../utils/getCompanyData";
import IPricing from "@/interface/pricing.interface";

export default function PlansPricingXS() {
  const [pricing, setPricing] = useState<IPricing[]>();

  useEffect(() => {
    const getData = async () => {
      const data = await getCompanyData();
      return data;
    };

    const response = getData();
    response.then((res) => {
      const resString = JSON.stringify(res?.items[0].fields.pricing);
      const resJSON = JSON.parse(resString);
      console.log(resJSON["pricing"]);
      if (resJSON) {
        setPricing(resJSON["pricing"]);
      }
    });
  }, []);

  return (
    <div className="w-full bg-[#E6FBFF] py-10">
      <div className="mx-7 h-full ">
        <div className="flex justify-center items-start w-full  pt-10">
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
        <div className="flex flex-col justify-center items-start w-full gap-5 mt-20 ">
          {pricing?.map((pricePlan: IPricing, index: number) => {
            const tempData: IPricing = {
              price: pricePlan["price"],
              title: pricePlan["title"],
              feature: pricePlan["feature"],
            };
            return <CardPlansPricingXS key={index} pricing={pricePlan} />;
          })}
        </div>
      </div>
    </div>
  );
}
