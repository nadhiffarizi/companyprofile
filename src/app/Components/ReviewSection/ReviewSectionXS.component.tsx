"use client";
import * as React from "react";
import { ReviewCardXS } from "./Card/ReviewCardXS.component";
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/16/solid";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { type CarouselApi } from "@/components/ui/carousel";
import getCompanyData from "../../../../utils/getCompanyData";
import { useEffect, useState } from "react";
import IReview from "@/interface/review.interface";

export function ReviewSectionXS() {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [_, setCount] = React.useState(0);
  const [reviews, setReviews] = useState<IReview[]>();

  useEffect(() => {
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
      const resString = JSON.stringify(res?.items[0].fields.review);
      const resJSON = JSON.parse(resString);
      // console.log(resJSON["reviews"][0]);
      if (resJSON) {
        setReviews(resJSON["reviews"]);
      }
    });
  }, []);

  return (
    <div className="flex w-full bg-[#2B2B46]">
      <div className="flex flex-col px-7 w-full h-full ">
        <div className=" flex w-full h-[180px] items-end justify-center pb-10  ">
          {" "}
          {/**Div title */}
          <h1 className="text-3xl text-center text-white font-semibold">
            What Client Say
          </h1>
        </div>
        <div className="w-full h-full ">
          <Carousel className="w-full" setApi={setApi} opts={{ loop: true }}>
            <CarouselContent>
              {reviews?.map((review: IReview, index: number) => {
                const tempData: IReview = {
                  id: review["id"],
                  name: review["name"],
                  role: review["role"],
                  title: review["title"],
                  message: review["message"],
                  imgUrl: review["imgUrl"],
                };

                return (
                  <CarouselItem key={index}>
                    <ReviewCardXS review={tempData} />
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
              className="flex justify-center items-center border-2 w-12 h-11 rounded-full"
            >
              <div className="w-7 h-auto">
                <ArrowLeftIcon className="fill-white" />
              </div>
            </button>
            <button
              onClick={() => api?.scrollTo(current + 1)}
              className="flex justify-center items-center border-2 w-12 h-11 rounded-full"
            >
              <div className="w-7 h-auto">
                <ArrowRightIcon className="fill-white" />
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
