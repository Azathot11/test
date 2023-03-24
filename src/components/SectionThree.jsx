import React from 'react'
import { generalPadding } from "../utils/generalStyles";
import { menSection } from "../utils/data";

const SectionThree = () => {
  return (
    <div className={` w-full h-full ${generalPadding} pt-20  flex flex-col gap-3`}>
      <h1 className="font-bold text-lg text-center">MEN’S FASHION</h1>
      <p className="text-lg text-center ">
        Shop our new arrivals from established brands
      </p>
      <div className={`w-full grid grid-cols-2  sm:grid-cols-4  gap-4 justify-center`}>
        {menSection.map((element, i) => (
          <div className="w-full flex flex-col gap-y-3" key={i}>
            <img src={element.image} alt={element.title}  className="w-fullsm:w-full object-fill"/>
            <div className="w-full flex flex-col text-xs sm:text-sm">
            <p>{element.title}</p>
            <p className="font-semibold">{element.text}</p>
            <div className="flex gap-2 ">
              <s>{element.oldPrice}</s>
              <p className="text-red-500">{element.newPrice}</p>
            </div>
            </div>
            
          </div>
        ))}
      </div>
    </div>
  );
};
export default SectionThree