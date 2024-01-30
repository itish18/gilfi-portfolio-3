"use client";

import { FaArrowRightLong } from "react-icons/fa6";
import { motion } from "framer-motion";
import { Dancing_Script } from "next/font/google";

const dancing = Dancing_Script({ subsets: ["latin"] });

export const Hero = () => {
  return (
    <div className="overflow-hidden  flex flex-col  justify-between h-full min-w-full text-white  relative">
      <video
        width="100%"
        height="100%"
        autoPlay
        muted
        loop
        className="absolute -z-20 object-cover h-full max-h-[100vh] "
      >
        <source src="/video.mp4" type="video/mp4" className="object-cover" />
      </video>
      <div className="w-full h-full bg-black/50 absolute -z-10" />
      <div className=" pl-14 md:pl-[90px] py-8 px-10  flex flex-col h-full justify-between">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className={`${dancing.className} text-2xl`}
        >
          YOUR NAME
        </motion.div>
        <div className="max-w-[40%] w-full h-full  mx-auto flex flex-col items-center justify-center gap-2 text-6xl  xl:text-9xl font-bold tracking-widest text-center">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: 1, type: "spring" }}
            className="max-[1024px]:min-w-[8em] w-full h-[2px] bg-white rounded-full my-4"
          />
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.2, type: "spring" }}
            className="drop-shadow-[0_2px_7px_white]"
          >
            VIDEO
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.4, type: "spring" }}
            className="text-[18vmin] hollow-text"
          >
            EDITOR
          </motion.div>
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: 1, type: "spring" }}
            className="max-[1024px]:min-w-[8em] w-full h-[2px] bg-white rounded-full my-4"
          />
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.8 }}
            className="text-2xl lg:text-6xl tracking-wider font-semibold"
          >
            PORTFOLIO
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="flex justify-end text-2xl font-semibold items-center gap-3 pr-4"
        >
          <span>Scroll</span>
          <FaArrowRightLong />
        </motion.div>
      </div>
    </div>
  );
};
