import React from "react";
import { useParams, Link } from "react-router-dom";
import { ProductMalumotlar } from "../../data/malumotlar";
import { Button } from "../../components/ui/button/button";

export const Shop = () => {
  const { id } = useParams();
  const data = ProductMalumotlar.find((item) => item.id == id);

  const Products = ProductMalumotlar.slice(0, 4);

  return (
    <div>
      <div className="pb-[130px] pt-[130px] px-[50px] lg:px-[400px] bg-[url('/shop-img.png')] bg-cover bg-center bg-no-repeat">
        <h1 className="text-[#274c5b] text-[60px] font-bold"></h1>
      </div>
      <div className="flex items-center justify-between max-w-[1200px] mx-auto pb-[90px]">
        <img className="w-[501px] h-[560px]" src={data.img} alt={data.name} />
        <div className="w-[660px]">
          <h1 className="font-semibold text-[40px] mb-[9px]">{data.name}</h1>
          <p className="text-[#ffa858] mb-[9px]">{data.rating}</p>
          <p>{data.category}</p>
          <div className="flex items-center gap-4">
            <p className="text-lg font-semibold text-gray-800">
              ${data.skidkaPrice}
            </p>
            {data.price && (
              <p className="text-sm text-gray-500 line-through">
                ${data.price}
              </p>
            )}
          </div>
          <div className="flex items-center gap-[20px] mt-[30px]">
            <div className="flex items-center gap-4">
              <p>Quantity :</p>
              <Button
                variant={
                  "pt-[10px] pb-[10px] pl-[20px] pr-[20px] text-[#274c5b] rounded-[16px] font-medium text-[16px] border border-[#274c5b]"
                }
              >
                
              </Button>
            </div>
            <Button variant="pt-[10px] pb-[10px] pl-[20px] pr-[20px] bg-[#274c5b] text-white rounded-[16px] font-medium text-[16px]">
              Add To Cart
            </Button>
          </div>
        </div>
      </div>
      <div className="container pb-[140px]">
        <div className="flex gap-4 justify-center text-center mb-[50px]">
          <Button
            variant={
              "pt-[10px] pb-[10px] pl-[30px] pr-[30px] bg-[#274c5b] text-white rounded-[16px] font-semibold text-[18px]"
            }
          >
            Product Description
          </Button>
          <Button
            variant={
              "pt-[10px] pb-[10px] pl-[30px] pr-[30px] bg-[#c3c9c5] text-[#274c5b] rounded-[16px] font-semibold text-[18px]"
            }
          >
            Additional Info
          </Button>
        </div>
        <p className="text-[#525c60] text-[18px] font-normal text-center max-w-[900px] mx-auto">
          Welcome to the world of natural and organic. Here you can discover the
          bounty of nature. We have grown on the principles of health, ecology,
          and care. We aim to give our customers a healthy chemical-free meal
          for perfect nutrition. It offers about 8-10% carbs. Simple sugars —
          such as glucose and fructose — make up 70% and 80% of the carbs in
          raw.
        </p>
      </div>
      <div className="container mx-auto pb-[140px]">
        <h1 className="font-bold text-[50px] text-center text-[#274c5b] mb-[70px]">
          Related Products
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-[1200px] mx-auto">
          {Products.map((item) => (
            <Link to={`/products/shopsingle/${item.id}`} key={item.id}>
              <div className="border border-gray-200 p-4 rounded-lg shadow hover:shadow-lg transition-shadow duration-300">
                <h1 className="font-semibold text-[15px] bg-[#274c5b] w-[80px] text-center rounded-lg text-white mb-[20px]">
                  {item.category}
                </h1>
                <img
                  src={item.img}
                  alt={item.name}
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <h1 className="font-bold text-lg text-[#274c5b] mb-2">
                  {item.name}
                </h1>
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <p className="text-lg font-semibold text-gray-800">
                      ${item.currentPrice}
                    </p>
                    {item.price && (
                      <p className="text-sm text-gray-500 line-through">
                        ${item.price}
                      </p>
                    )}
                  </div>
                  <p className="text-[#ffa858]">{item.rating}★</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};