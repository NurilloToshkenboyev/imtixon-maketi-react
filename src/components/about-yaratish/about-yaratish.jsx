import React from "react";
import { Button } from "../ui/button/button";
export const AboutCrative = () => {
  return (
    <div className="container flex gap-[120px]  ">
      <div>
        <img className="mt-[-100px]" src="AboutImages.png" alt="img" />
      </div>
      <div className="w-[690px]">
        <p className="font-[400px] text-[25px] mb-[10px] text-secondary">
          About Us
        </p>
        <h1 className="text-primary text-[50px] font-[800px] mb-[14px] w-[500px]">
          We do Creative Things for Success
        </h1>
        <p className="text-seventh text-[16px] font-[400px] mb-[15px]">
          Simply dummy text of the printing and typesetting industry. Lorem had
          ceased to been the industry's standard dummy text ever since the
          1500s, when an unknown printer took a galley.
        </p>
        <p className="text-seventh text-[16px] font-[400px] mb-[15px]">
          Simply dummy text of the printing and typesetting industry. Lorem had
          ceased to been the industry's standard dummy text ever since the
          1500s, when an unknown printer took a galley.
        </p>
        <ul className="flex gap-[10px] mb-[50px]">
          <li className="flex items-center gap-[15px]">
            <img src="AboutIcon.png" alt="img" />
            <h1 className=" w-[226px] text-primary text-[25px] font-[500px]">
              Modern Agriculture Equipment
            </h1>
          </li>
          <li className="flex items-center gap-[15px] ">
            <img src="AboutIcon2.png" alt="img" />
            <h1 className=" w-[226px] text-primary text-[25px] font-[500px] ">
              No growth hormones are used
            </h1>
          </li>
        </ul>
        <span className="pt-[20px] pb-[20px] pl-[40px] pr-[40px] text-green-500 bg-primary rounded-[16px]">
          <Button>Explore More</Button>
        </span>
      </div>
    </div>
  );
};
