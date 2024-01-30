"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export const About = () => {
  return (
    <div className="min-w-full h-[100vh] flex flex-col  items-center justify-between overflow-hidden">
      <div className="max-w-[70%] mx-auto flex flex-col gap-10 xl:gap-20 h-full justify-center relative">
        <div className="text-5xl xl:text-7xl font-bold text-black underline">
          ABOUT US
        </div>

        <p className="leading-10 text-sm md:text-xl line-clamp-[12]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit ex
          quae distinctio dolore reprehenderit quam facilis similique dicta
          cupiditate, est doloremque blanditiis ducimus eligendi animi officia
          at, laudantium nobis obcaecati optio pariatur veniam amet rerum
          dolorum? Sapiente quam veritatis amet aut nemo, laudantium iure enim
          a. Eius similique vel deleniti cumque nesciunt fugiat velit, minus
          voluptate totam tempora autem voluptates officia necessitatibus
          molestias. Recusandae officia doloremque perferendis? Sit natus totam
          quis dicta! Atque enim odit neque, modi aliquid dolores vel odio
          magni. Rerum impedit, facilis odio maiores commodi consequatur minima
          fuga magnam odit, rem quos vero, sint asperiores quidem praesentium!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat dolore
          iste velit accusantium deleniti recusandae, quibusdam laborum iure
          explicabo necessitatibus cumque doloribus, totam consequatur earum
          dolor dignissimos magnam ea. Delectus adipisci accusamus quam, sint id
          veniam possimus corporis. Praesentium officia recusandae culpa
          accusantium magnam molestiae illo obcaecati, maxime quibusdam hic
          accusamus provident eveniet. Optio facilis, maxime consequatur
          laudantium suscipit perferendis eum perspiciatis a nesciunt dolor
          officiis voluptatem iste laborum corporis alias. Quasi ducimus
          corrupti eligendi, non et sequi quis provident itaque, rem adipisci,
          quaerat in consequatur fugit nihil iusto ullam cumque voluptatum
          harum. Illo ducimus voluptatibus optio sunt placeat reprehenderit!
        </p>

        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ type: "spring", delay: 0.5 }}
          className="absolute w-fit h-fit -top-10 right-36 hidden xl:block  -z-10"
        >
          <Image
            alt="about us"
            src="/aboutus.jpg"
            className="max-w-[25em] w-full max-h-fit object-cover "
            width={400}
            height={400}
          />
        </motion.div>
      </div>

      <div className="h-full w-full max-h-[20%] bg-white overflow-hidden">
        <div className="flex gap-24">
          <div className="flex items-center  whitespace-nowrap gap-24 text-9xl font-extrabold px-5 horizontalAutoScroll text-red-500/80">
            <span>ABOUT US</span>
            <span>ABOUT US</span>
            <span>ABOUT US</span>
            <span>ABOUT US</span>
          </div>

          <div className="flex items-center  whitespace-nowrap gap-24 text-9xl font-extrabold px-5 horizontalAutoScroll text-red-500/80">
            <span>ABOUT US</span>
            <span>ABOUT US</span>
            <span>ABOUT US</span>
            <span>ABOUT US</span>
          </div>
        </div>
      </div>
    </div>
  );
};
