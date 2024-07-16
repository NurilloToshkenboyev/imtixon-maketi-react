import React from "react";

export const Orgaines = () => {
  return (
    <div className="relative flex flex-col-reverse sm:flex-row justify-between items-center">
  <div className="w-full sm:w-[900px] overflow-hidden rounded-lg border-4 border-white">
    <img
      className="w-full h-auto rounded-lg"
      src="/orgaines-img.png"
      alt="img"
    />
  </div>
  <div className="absolute sm:relative sm:ml-0 ml-[-150px] top-10 sm:top-10 pt-10 pb-10 pl-10 pr-10 w-full sm:w-[700px] rounded-lg bg-nineth shadow-lg" style={{ boxShadow: "0 0 20px rgba(0, 0, 0, 0.7)" }}>
    <p className="text-white text-xl font-medium mb-2">Eco Friendly</p>
    <h1 className="text-primary text-4xl font-extrabold mb-8">
      Econis is a Friendly Organic Store
    </h1>
    <div>
      <h2 className="text-primary text-lg font-semibold mb-2">
        Start with Our Company First
      </h2>
      <p className="text-seventh text-base mb-8">
        Sed ut perspiciatis unde omnis iste natus error sit voluptat
        accusantium doloremque laudantium. Sed ut perspiciatis.
      </p>
    </div>
    <div>
      <h2 className="text-seventh text-lg font-semibold mb-2">
        Farming Strategies of Today
      </h2>
      <p className="text-primary text-base mb-8">
        Sed ut perspiciatis unde omnis iste natus error sit voluptat
        accusantium doloremque laudantium. Sed ut perspiciatis.
      </p>
    </div>
  </div>
</div>
  );
};