import * as React from "react";
import IReview from "@/interface/review.interface";

export function ReviewCardXS({ review }: { review: IReview }) {
  return (
    <div className="flex justify-center w-full h-full">
      <div className="w-full max-w-[500px] h-full bg-[#E6FBFF] rounded-3xl py-6 px-6">
        <div className="grid grid-rows-6 w-full h-full">
          <div className="row-span-2 ">
            {/**profile picture row */}
            <div className="flex justify-start w-full h-full">
              <img
                height={300}
                width={300}
                alt="profilereview"
                src={review.imgUrl}
                className="w-[120px] h-auto rounded-3xl"
              />
            </div>
          </div>
          <div className=" flex items-center justify-start row-span-1 ">
            <h1 className="text-2xl text-maintextcolor ">{review.title}</h1>
          </div>
          <div className="flex items-start row-span-2 ">
            <p className="text-lg leading-loose text-maintextcolor">
              "{review.message}"
            </p>
          </div>
          <div className="row-span-1 ">
            <p className="text-base text-maintextcolor">{review.name}</p>
            <p className="text-base text-secondarycolor">{review.role}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
