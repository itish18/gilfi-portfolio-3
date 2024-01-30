"use client";

import Image from "next/image";

import { BsTwitterX } from "react-icons/bs";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";

import { motion } from "framer-motion";

export const Navbar = () => {
  return (
    <motion.div
      initial={{ x: "-100px" }}
      animate={{ x: 0 }}
      transition={{ type: "tween", duration: 1 }}
      className="overflow-y-hidden border border-black max-w-[50px] md:max-w-[76px] fixed w-full max-h-[100vh] bg-white h-full flex flex-col items-center justify-between py-10 px-2 z-50 border-r border-black/50"
    >
      <Image
        alt="profileImage"
        src="https://images.pexels.com/photos/1559486/pexels-photo-1559486.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&dpr=1"
        width={50}
        height={50}
        className="rounded-full object-cover"
      />

      <div className="flex flex-col gap-5">
        <BsTwitterX
          color="black"
          className="border-2 rounded-full border-black w-9 h-9 p-2 cursor-pointer"
        />
        <FaGithub
          color="black"
          className="border-2 rounded-full border-black w-9 h-9 p-2 cursor-pointer"
        />
        <FaLinkedinIn
          color="black"
          className="border-2 rounded-full border-black w-9 h-9 p-2 cursor-pointer"
        />
      </div>
    </motion.div>
  );
};
