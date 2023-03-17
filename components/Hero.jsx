"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const Hero = () => {
  const textVariants = {
    initial: { x: -50, opacity: 0 },
    animate: { x: 0, opacity: 1 },
  };

  return (
    <div className="flex min-h-[555px] overflow-hidden">
      <div className="flex flex-col md:flex-row items-center justify-between min-h-[540px] overflow-hidden w-full">
        <div className="w-[100%] md:w-[48%] mx-auto">
          <div className="pt-2 text-center md:text-left max-w-[420px]mx-auto">
            <motion.h1
              variants={textVariants}
              initial="initial"
              animate="animate"
              transition={{ duration: 0.5 }}
              className="font-black text-primary-color md:mb-5 text-[32px] md:text-4xl"
            >
              <span>
                The money app
                <br />
                for Africans.
              </span>
            </motion.h1>
            <motion.p
              variants={textVariants}
              initial="initial"
              animate="animate"
              transition={{ duration: 0.5, delay: 0.2 }}
              className="md:mb-5 text-md md:text-xl font-semibold leading-6"
            >
              <span>
                Save, spend, send and invest money
                <br />
                across borders.
              </span>
            </motion.p>
            <motion.div
              variants={textVariants}
              initial="initial"
              animate="animate"
              transition={{ duration: 0.5, delay: 0.2 }}
              className="md:hidden text-center my-5 flex gap-3 justify-center"
            >
              <Image
                src="/appstore.png"
                height={100}
                width={100}
                alt="app"
                className="w-28"
              />
              <Image
                src="/googleplaystore.png"
                height={100}
                width={100}
                alt="google"
                className="w-28"
              />
            </motion.div>

            <motion.div
              variants={textVariants}
              initial="initial"
              animate="animate"
              transition={{ duration: 0.5, delay: 0.4 }}
              className="hidden md:block"
            >
              <Link
                href="/joinkuda"
                className="mt-8 max-w-[152px] text-base w-full font-bold leading-[1] flex items-center p-[15px]  justify-center text-white bg-primary-color h-12 rounded-[10px] text-center md:text-left mx-auto md:mx-0"
              >
                Join Kuda
              </Link>
            </motion.div>
          </div>
        </div>
        <motion.div
          initial={{ x: "100%", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-[52%] relative"
        >
          <img
            src="/phone.png"
            alt="phone"
            className="w-full"
            style={{ maxWidth: "400px" }}
          />
          <img
            src="/kuda.png"
            alt="kuda"
            className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-[-1] w-[80%] opacity-50 rotate-[-15deg]"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
