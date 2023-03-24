import React from "react";
import banner from "../assets/banner.svg";

const Banner = () => {
  return (
    <div
      className=" h-[40rem] sm:h-screen w-full flex flex-col justify-end items-center sm:items-end "
      style={{
        backgroundImage: `url(${banner})`,
        backgroundRepeat: "no-repeat",
        // backgroundAttachment: "fixed",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
        
      <div className="flex flex-col gap-4 sm:gap-5 pb-10 sm:pb-40   sm:pr-[100px] md:pr-[100px] lg:pr-[100px] xl:pr-[450px]">
        <h1 className="font-bold text-md sm:text-xl">NEW TREND</h1>
        <h1 className=" text-4xl sm:text-6xl font-[700]">COLLUSION</h1>
        <p className=" text-md sm:text-xl font-semibold">
          An exclusive selection of this season's trends.
        </p>
        <div className="flex flex-col gap-y-5 gap-x-5 sm:flex-row">
          <div className="w-full  sm:w-48 h-8 bg-black text-white p-4 flex justify-center items-center cursor-pointer">
            Discover
          </div>
          <div className="w-full sm:w-48  h-8 bg-black text-white p-4 flex justify-center items-center cursor-pointer">
            Shop Now
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
