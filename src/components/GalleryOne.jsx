import React from "react";
import { generalPadding } from "../utils/generalStyles";
import image1 from "../assets/1.svg";
import image2 from "../assets/2.svg";
import image3 from "../assets/3.svg";
import image4 from "../assets/4.svg";

const GalleryOne = () => {
  return (
    <div className={` w-full h-full ${generalPadding} pt-20 `}>
      <div className={` grid  sm:grid-cols-2 `}>
        <div className=" w-full flex flex-col gap-2">
          <div className="w-full">
            <img src={image1} alt="gallery" className=" w-full object-fill" />
          </div>
          <div className=" w-full flex gap-x-2">
            <div className="w-full  ">
              <img src={image2} alt="gallery" className=" w-full object-fill" />
            </div>
            <div className="w-full">
              <img src={image3} alt="gallery" className=" w-full object-fill" />
            </div>
          </div>
        </div>
        <div className="w-full flex flex-col justify-end h-72 sm:h-full"
         style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0)),url(${image4})`,
            backgroundRepeat: "no-repeat",
            // backgroundAttachment: "fixed",
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        >
          <div className="bg-white w-36 p-1  ml-4 mb-10 flex justify-center font-semibold ">CATAGORY NAME</div>
        </div>
      </div>
    </div>
  );
};

export default GalleryOne;
