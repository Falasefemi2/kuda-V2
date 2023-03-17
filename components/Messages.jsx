"use client";

import { motion } from "framer-motion";

const textVariants = {
  initial: { x: -50, opacity: 0 },
  animate: { x: 0, opacity: 1 },
};

const Messages = () => {
  return (
    <div
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="mt-[120px] md:mt-[12.5%]"
    >
      <div className="flex items-center justify-between flex-col md:flex-row">
        <div className="md:w-[45%] w-full">
          <div className="md:max-w-[420px]">
            <motion.h1
              variants={textVariants}
              initial="initial"
              animate="animate"
              transition={{ duration: 0.5 }}
              className="text-primary-color font-black text-[2rem] md:text-4xl mb-[10px] md:mb-[20px] text-center md:text-left"
            >
              We’re always happy to help you.
            </motion.h1>
            <motion.p
              variants={textVariants}
              initial="initial"
              animate="animate"
              transition={{ duration: 0.5, delay: 0.2 }}
              className="max-w-[350px] text-black-color text-base text-center md:text-left"
            >
              You can chat with us on the app, slide into our DMs, tweet, leave
              an Instagram comment, send an email or call. However you choose to
              reach out, there’ll always be a friendly person there to make your
              life easy.
            </motion.p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Messages;
