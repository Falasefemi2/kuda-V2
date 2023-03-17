"use client";

import { motion } from "framer-motion";

const CustomText = ({ text, para, img, img2 }) => {
  
  const textVariants = {
    initial: { x: -50, opacity: 0 },
    animate: { x: 0, opacity: 1 },
  };


  return (
    <motion.div
      className="mt-[120px] md:mt-[12.5%]"
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className='flex items-center justify-between flex-col md:flex-row'>
        <div className="md:w-[45%] w-full">
          <div className="md:max-w-[420px]">
            <motion.h1
              variants={textVariants}
              initial="initial"
              animate="animate"
              transition={{ duration: 0.5 }}
              className="text-primary-color font-black text-[2rem] md:text-4xl mb-[10px] md:mb-[20px] text-center md:text-left"
            >
              <span>{text}</span>
            </motion.h1>
            <motion.p
              variants={textVariants}
              initial="initial"
              animate="animate"
              transition={{ duration: 0.5, delay: 0.2 }}
              className="max-w-[350px] text-black-color text-base text-center md:text-left"
            >
              {para}
            </motion.p>
          </div>
        </div>
        <div className="w-full md:w-[55%] relative mt-[40px]">
          <motion.img
            src={img}
            height={565}
            width={498}
            alt="image"
            className="block"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          />
          <motion.img
            src={img2}
            height={407}
            width={499}
            alt="image1"
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
