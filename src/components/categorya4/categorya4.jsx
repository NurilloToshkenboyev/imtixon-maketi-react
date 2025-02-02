import React from "react";

export const Frucity = () => {
  return (
    <div className="container flex justify-between items-center pb-[180px]">
      <div className="bg-[url('/fresh-img.png')] bg-cover bg-center bg-no-repeat w-[680px] h-[367px] pt-[110px] pb-[110px] pl-[50px] pr-[350px]">
        <p className="text-fifth text-[20px] font-[400] mb-[5px]">
          Natural!!
        </p>
        <h1 className="text-fifth text-[35px] font-[800]">
          Get Garden Fresh Fruits
        </h1>
      </div>
      <div className="bg-[url('/fresh-img2.png')] bg-cover bg-center bg-no-repeat w-[680px] h-[367px] pt-[110px] pb-[110px] pl-[50px] pr-[350px]">
        <p className="text-secondary text-[20px] font-[400] mb-[5px]">
          Natural!!
        </p>
        <h1 className="text-primary text-[40px] font-[800]">
          Get 10% off on Vegetables
        </h1>
      </div>
    </div>
    
  );
};