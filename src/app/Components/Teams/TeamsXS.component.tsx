"use client";
import * as React from "react";
import { CardTeamsXS } from "./Card/CardTeamsXS.component";
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/16/solid";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { type CarouselApi } from "@/components/ui/carousel";
import { useEffect, useState } from "react";
import getCompanyData from "../../../../utils/getCompanyData";
import ITeamMember from "@/interface/teamMember.interface";

export function TeamsXS() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);
  const [teamMembers, setTeamMembers] = useState<ITeamMember[]>();

  React.useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  useEffect(() => {
    const getData = async () => {
      const data = await getCompanyData();
      return data;
    };

    const response = getData();
    response.then((res) => {
      const resString = JSON.stringify(res?.items[0].fields.team);
      const resJSON = JSON.parse(resString);
      console.log(resJSON["member"]);
      if (resJSON) {
        setTeamMembers(resJSON["member"]);
      }
    });
  }, []);

  return (
    <div className="flex flex-col px-5 w-full h-full  ">
      <div className=" flex w-full h-[120px] items-end justify-center pb-10  ">
        {" "}
        {/**Div title */}
        <h1 className="text-3xl text-center text-maintextcolor font-semibold">
          Meet The Team
        </h1>
      </div>
      <div className="w-full h-full ">
        <Carousel className="w-full" setApi={setApi} opts={{ loop: true }}>
          <CarouselContent>
            {teamMembers?.map((member: ITeamMember, index: number) => {
              const tempData: ITeamMember = {
                id: member["id"],
                name: member["name"],
                role: member["role"],
                title: member["title"],
                message: member["message"],
                imgUrl: member["imgUrl"],
              };

              return (
                <CarouselItem key={index}>
                  <CardTeamsXS member={tempData} />
                </CarouselItem>
              );
            })}
          </CarouselContent>
        </Carousel>
      </div>
      <div className="flex justify-center w-full h-[70px] my-3 mb-10 ">
        <div className="flex flex-row gap-6 items-center justify-center h-full max-h-[300px] w-[200px] ">
          <button
            onClick={() => api?.scrollTo(current - 1)}
            className="flex justify-center items-center border-2 border-maintextcolor w-12 h-11 rounded-full"
          >
            <div className="w-7  h-auto ">
              <ArrowLeftIcon className="fill-maintextcolor" />
            </div>
          </button>
          <button
            onClick={() => api?.scrollTo(current + 1)}
            className="flex justify-center items-center border-2 border-maintextcolor w-12 h-11 rounded-full"
          >
            <div className="w-7 h-auto">
              <ArrowRightIcon className="fill-maintextcolor" />
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}
