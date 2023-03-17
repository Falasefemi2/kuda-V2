"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const CustomText = ({ text, para, img, img2 }) => {
  const textVariants = {
    initial: { x: -50, opacity: 0 },
    animate: { x: 0, opacity: 1 },
  };
  return (
    <motion.div
      className="mt-[12.5%]"
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="flex items-center justify-between">
        <div className="w-[45%]">
          <div className="max-w-[420px]">
            <motion.h1
              variants={textVariants}
              initial="initial"
              animate="animate"
              transition={{ duration: 0.5 }}
              className="leading-[1.38] text-4xl mb-5 font-black text-primary-color"
            >
              <span>{text}</span>
            </motion.h1>
            <motion.p
              variants={textVariants}
              initial="initial"
              animate="animate"
              transition={{ duration: 0.5, delay: 0.2 }}
              className="max-w-[350px] text-black-color text-base"
            >
              {para}
            </motion.p>
          </div>
        </div>
        <div className="w-[55%] relative">
          <Image
            src={img}
            height={565}
            width={498}
            alt="img"
            className="block"
          />
          <motion.img
            src={img2}
            height={407}
            width={499}
            alt="img2"
            className="absolute top-[-30px] right-[-20px]"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          />
        </div>
      </div>
    </motion.div>
  );
};

export default CustomText;
