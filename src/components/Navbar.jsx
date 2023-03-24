import React, { useState } from "react";
import logo from "../assets/logo.svg";
import { generalPadding } from "../utils/generalStyles";
import { navElements } from "../utils/data";
import { BsCart3 } from "react-icons/bs";
import { AiOutlineSearch } from "react-icons/ai";
import { CiHeart } from "react-icons/ci";

import Modal from "./Modal";

const Navbar = () => {
  // const [resModal,setResModal] = useState(false);
  return (
    <div
      className={`fixed w-full flex justify-between gap-5 items-center h-16 bg-white ${generalPadding} rounded-t-2xl `}
    >
      <img src={logo} alt="logo" className="w-32" />
      <ul className="hidden md:flex  gap-5 items-center justify-center">
        {navElements.map((element, i) => (
          <li key={i}>{element}</li>
        ))}
      </ul>
      <div className="flex gap-5 items-center justify-center text-xl ">
        <AiOutlineSearch />
        <CiHeart />
        <BsCart3 />
        <Modal navElements={navElements} />
      </div>
      {/* <Modal/> */}
    </div>
  );
};

export default Navbar;
