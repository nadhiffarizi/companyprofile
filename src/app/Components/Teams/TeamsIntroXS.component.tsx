import * as React from "react";
import { Badge } from "@/components/ui/badge";

export default function TeamsInfoXS() {
  return (
    <div className="w-full bg-[#F4D4EB]">
      {/**Main div */}
      <div className="flex flex-col mx-7 py-6 h-full ">
        <div className="flex flex-col justify-start items-start w-full ">
          <div className="w-full ">
            <Badge className="w-24 h-8 text-sm flex justify-center ">
              Our Team
            </Badge>
          </div>
          <div className="flex justify-start items-start w-full h-[200px] py-5">
            <h1 className="text-maintextcolor tracking-wide text-[2.3rem] ">
              Our Vision, Mission, and how we do things
            </h1>
          </div>
          <div className="w-full py-7 ">
            <p className="text-lg text-secondarycolor tracking-wide leading-9 ">
              Saasland HR provides cost-effective HR solutions for startups and
              SMBs. helping them establish efficient HR operations, manage
              growing teams.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
