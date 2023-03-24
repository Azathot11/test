import React from "react";
import { generalPadding } from "../utils/generalStyles";
import { BiTargetLock } from "react-icons/bi";
import { BsFacebook, BsInstagram } from "react-icons/bs";
import { AiOutlineTwitter, AiFillLinkedin } from "react-icons/ai";
import {foorterElements} from '../utils/data'

const Footer = () => {
  return (
    <div className="w-full h-full">
    <div
      className={`w-full ${generalPadding} py-20 sm:py-40 grid grid-cols-1 sm:grid-cols-2 bg-[#F2F8FC] gap-y-10 gap-x-5`}
    >
      <div className="w-full flex flex-col gap-y-4">
        <h1 className="font-extrabold text-2xl">YOUR LOGO</h1>
        <p>
          We earned a reputation of being good at what we do.
          <br /> Let us take your online shop to new dimension in,
          <br /> success!
        </p>
        <div className="w-full flex items-center gap-5">
          <BiTargetLock />
          <p>Comilla, Bangladesh 3500</p>
        </div>
        <div>
          <p className="underline">kawsarahmed0210@gmail.com</p>
          <p>01647470457</p>
        </div>
        <div className="flex gap-4 items-center text-sm">
          <BsFacebook />
          <BsInstagram />
          <AiOutlineTwitter />
          <AiFillLinkedin />
        </div>
      </div>
      <div className="w-full flex flex-col gap-y-10">
        <h1 className="font-extrabold text-2xl">RECIVE EMAIL UPDATES</h1>
        <div className="flex items-center justify-between relative">
          <input
            className="w-full h-8 bg-white "
            placeholder="Your Email Address"
          />
          <p className="font-semibold absolute right-0 pr-5">JOIN</p>
        </div>
        <div className="w-full grid grid-cols-3 gap-4">
            {foorterElements.map((elements,i)=>(
                <div key={i}>
                <h1 className="font-bold">{elements.title}</h1>
                <ul key={i} className="flex flex-col gap-y-3 text-xs">
                {elements.elements.map((element,i)=>(
                     <li className="">{element}</li>
                     ))}
                 </ul>
               
            </div>
            )) }
        </div>
      </div>
    </div>
    <div className="w-full h-12 flex justify-center items-center text-xs bg-[#E7F5F8] rounded-b-2xl">
    Copyright © 2020 . Your company name  All rights reserved
    </div>
    </div>
  );
};

export default Footer;
