import * as React from "react";
import Image from "next/image";
import ITeamMember from "@/interface/teamMember.interface";

export function CardTeamsXS({ member }: { member: ITeamMember }) {
  return (
    <div className="flex justify-center w-full h-full ">
      <div className="w-full max-w-[550px] h-full bg-maintextcolor rounded-3xl py-6 px-5">
        <div className="grid grid-rows-6 w-full h-full">
          <div className="row-span-2 ">
            {/**profile picture row */}
            <div className="flex justify-start w-full h-full">
              <img
                height={300}
                width={300}
                alt="profilereview"
                src={member.imgUrl}
                className="w-[120px] h-auto rounded-3xl"
              />
            </div>
          </div>
          <div className=" flex items-center justify-start row-span-1 ">
            <h1 className="text-2xl text-[#F9FDE6] ">{member.title}</h1>
          </div>
          <div className="flex items-start row-span-2 ">
            <p className="text-lg leading-loose text-[#F9FDE6]">
              "{member.message}"
            </p>
          </div>
          <div className="row-span-1 ">
            <p className="text-base text-[#F9FDE6]">{member.name}</p>
            <p className="text-base text-[#F9FDE6]">{member.role}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
