import * as React from "react";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { TeamsXS } from "../Teams/TeamsXS.component";

export function AboutXS() {
  return (
    <div className="w-full bg-[#F9FDE6]">
      {/**Main div */}
      <div className="flex flex-col mx-7 py-6 h-full ">
        <div className="flex flex-col justify-start items-start w-full ">
          <div className="w-full ">
            <Badge className="w-24 h-8 text-sm flex justify-center ">
              About Us
            </Badge>
          </div>
          <div className="flex justify-start items-start w-full h-[200px] py-5">
            <h1 className="text-maintextcolor tracking-wide text-[2.3rem] ">
              Automate payroll processing, tax calculations
            </h1>
          </div>
          <div className="w-full h-[250px] py-7 ">
            <p className="text-lg text-secondarycolor tracking-wide leading-9 ">
              Saasland HR provides cost-effective HR solutions for startups and
              SMBs. helping them establish efficient HR operations, manage
              growing teams.
            </p>
          </div>
        </div>
        <div className="w-full h-[320px] ">
          <Image
            src={`/Media/aboutpicture.webp`}
            height={500}
            width={500}
            alt="aboutpicture"
            className="w-full h-full"
          />
        </div>
        <div className="flex flex-col justify-start items-start w-full h-[450px] mt-10 py-10 ">
          <div className="w-full">
            <Badge className="w-24 h-8 text-sm flex justify-center ">
              History
            </Badge>
          </div>
          <div className="flex justify-start items-start w-full h-[200px] py-5 ">
            <h1 className="text-maintextcolor tracking-normal text-[2.3rem] ">
              Where we came from
            </h1>
          </div>
          <div className="w-full h-[250px] ">
            <p className="text-lg text-secondarycolor tracking-wide leading-9 ">
              Saasland HR provides cost-effective HR solutions for startups and
              SMBs. helping them establish efficient HR operations, manage
              growing teams.
            </p>
          </div>
        </div>
        <div className="flex flex-col justify-start items-start w-full ">
          <div className="w-full ">
            <Badge className="w-28 h-10 text-sm flex justify-center ">
              Our Team
            </Badge>
          </div>
          <TeamsXS />
        </div>
      </div>
    </div>
  );
}
