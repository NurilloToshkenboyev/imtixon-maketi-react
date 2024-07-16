import React from "react";
import { Button } from "../ui/button/button";

import "./style.css";

export const Section = () => {
  return (
    <div className="pb-[100px]">
      <div className="bg-[url('/hero-bg (1).png')] bg-cover bg-center pt-[300px] pb-[300px] mx-auto hero min-h-[700px]">
        <div className="container ">
          <h1 className="font-[400px] text-[20px] text-secondary mb-[8px]">
            100% Natural Food
          </h1>
          <p className="text-5xl font-extrabold w-[426px] mb-[70px]  text-primary">
            Choose the best healthier way of life
          </p>
          <span className="pt-[20px] pb-[20px] pl-[40px] pr-[40px] text-primary  bg-third rounded-[16px]">
            <Button>Explore Now</Button>
          </span>
        </div>
      </div>
    </div>
  );
};


