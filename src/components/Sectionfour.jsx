import React from "react";
import { generalPadding } from "../utils/generalStyles";
import image13 from "../assets/13.svg";
import image15 from "../assets/15.svg";
import image16 from "../assets/16.svg";

const SectionFour = () => {
  return (
    <div
      className={`w-full min-h-full pt-20 pb-60 ${generalPadding} flex flex-col gap-3`}
    >
      <h1 className="font-bold text-lg text-center capitalize">
        Choose Your Favorite Color
      </h1>
      <p className="text-lg text-center">
        Shop our new arrivals from established brands
      </p>
      <div
        className={`w-full grid grid-cols-1 sm:grid-cols-2 gap-4 justify-center mt-10`}
      >
        <div className="w-full sm:pt-20">
          <img
            src={image13}
            alt="gallery"
            className="w-full object-cover lg:h-96 xl:h-550px"
          />
        </div>
        <div className="flex flex-col relative">
          <div className="w-full">
            <img src={image15} alt="" />
          </div>
          <div className="w-full absolute flex justify-end mt-40 sm:mt-40 md:mt-60 lg:mt-40 xl:mt-60">
            <div className="pl-4 pt-4 bg-white">
              <img src={image16} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionFour;