"use client";

import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";
import { FaTimes, FaBars } from "react-icons/fa";
import { Navlinks } from "@/data";
import Image from "next/image";

const Testing = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  return (
    <motion.div
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 120 }}
      className="fixed w-full left-0 top-0 z-[99] bg-white h-[65px]  box-shadow flex items-center justify-between"
    >
      <div className="flex justify-between items-center w-full max-w-[1500px] mx-auto md:pl-[60px] md:pr-[60px] px-[14px] md:px-[20px]">
        <div className="flex items-center">
          <Link href="/" className="min-w-[100px]">
            <svg
              width="99"
              height="22"
              viewBox="0 0 99 22"
              fill="none"
              className="h-4 md:h-[20px] flex w-auto"
            >
              <path
                d="M58.4144 6.81538V21.764H54.0773V19.5807C53.6053 20.3675 52.9857 20.9674 52.2186 21.3804C51.4515 21.7935 50.586 22 49.6222 22C47.7537 22 46.3572 21.4788 45.4327 20.4363C44.5083 19.3938 44.046 17.8203 44.046 15.7157V6.81538H48.5011V15.8042C48.5011 17.6138 49.278 18.5186 50.8319 18.5186C51.7563 18.5186 52.5038 18.2038 53.0742 17.5744C53.6446 16.945 53.9298 16.1189 53.9298 15.0961V6.81538H58.4144ZM75.4086 0V21.764H71.0125V19.5512C70.5601 20.3183 69.9209 20.9182 69.0947 21.3509C68.2686 21.7836 67.3344 22 66.2919 22C65.0134 22 63.8726 21.6755 62.8695 21.0165C61.8663 20.3576 61.0894 19.4332 60.5288 18.2432C59.9682 17.0532 59.6929 15.696 59.6929 14.1618C59.6929 12.6276 59.9682 11.2803 60.5288 10.11C61.0894 8.93965 61.8663 8.03487 62.8596 7.39562C63.8529 6.75637 64.9937 6.44166 66.2919 6.44166C67.295 6.44166 68.2096 6.65802 69.0357 7.07108C69.8619 7.49396 70.5011 8.07421 70.9535 8.82164V0H75.4086ZM70.1274 17.4761C70.7175 16.7188 71.0125 15.637 71.0125 14.2208C71.0125 12.8243 70.7175 11.7523 70.1175 10.9951C69.5176 10.2378 68.6817 9.8641 67.5999 9.8641C66.4984 9.8641 65.6428 10.2378 65.0331 10.9852C64.4233 11.7327 64.1184 12.7948 64.1184 14.1717C64.1184 15.5878 64.4233 16.6795 65.0331 17.4564C65.6428 18.2333 66.4984 18.6169 67.5999 18.6169C68.7014 18.6071 69.5373 18.2333 70.1274 17.4761ZM92.4126 6.81538V21.764H88.0165V19.5512C87.5641 20.3183 86.9249 20.9182 86.0988 21.3509C85.2727 21.7836 84.3384 22 83.2959 22C81.9977 22 80.8569 21.6853 79.8636 21.0559C78.8703 20.4265 78.0934 19.5315 77.5328 18.3612C76.9723 17.1909 76.6969 15.8435 76.6969 14.3093C76.6969 12.7751 76.9723 11.4081 77.5328 10.2083C78.0934 9.00849 78.8703 8.08404 79.8735 7.42512C80.8766 6.7662 82.0174 6.44166 83.2959 6.44166C84.3384 6.44166 85.2727 6.66786 86.0988 7.12025C86.9249 7.57264 87.5641 8.18239 88.0165 8.94949V6.81538H92.4126ZM87.1314 17.4859C87.7215 16.7385 88.0165 15.6567 88.0165 14.2405C88.0165 12.8243 87.7215 11.7425 87.1314 10.9852C86.5413 10.228 85.6956 9.85427 84.5941 9.85427C83.4926 9.85427 82.637 10.2477 82.0272 11.0344C81.4175 11.8212 81.1126 12.9128 81.1126 14.3093C81.1126 15.7059 81.4077 16.768 82.0076 17.5056C82.6075 18.2432 83.4631 18.6071 84.5842 18.6071C85.6956 18.6071 86.5413 18.2333 87.1314 17.4859ZM43.1511 21.9803H37.624L31.6839 15.2043V21.9803H27.1797V0H31.6839V13.3456L37.3585 6.86455H42.7675L36.3455 14.1225L43.1511 21.9803Z"
                fill="#40196D"
              ></path>
              <path
                d="M14.8207 21.9803L6.17613 12.0277L10.8967 21.9803H7.62181L2.80286 11.831L4.80912 21.9803H2.79303L0.786768 11.8114V21.9803H0V0H0.786768V10.9656L2.82253 0H4.82879L2.78319 11.0148L7.70049 0H10.9361L6.04828 10.9754L14.9289 0H20.0134L10.8181 11.3491L20.0527 21.9803H14.8207Z"
                fill="#40196D"
              ></path>
              <path
                d="M96.146 21.7447C97.493 21.7447 98.585 20.6527 98.585 19.3057C98.585 17.9587 97.493 16.8667 96.146 16.8667C94.799 16.8667 93.707 17.9587 93.707 19.3057C93.707 20.6527 94.799 21.7447 96.146 21.7447Z"
                fill="#40196D"
              ></path>
            </svg>
          </Link>
          <ul className="hidden ml-[15%] sm:flex items-center">
            {Navlinks.map((link, index) => (
              <li
                className={`text-primary-color cursor-pointer text-[16px] ${
                  index === Navlinks.length - 1 ? "mr-0" : "mr-[42px]"
                }`}
                key={link.id}
              >
                {link.name}
              </li>
            ))}
          </ul>
        </div>
        <div
          className="sm:hidden flex flex-1 justify-end items-center"
          onClick={handleClick}
        >
          {click ? <FaTimes /> : <FaBars />}
          <div
            className={`${
              click ? "flex" : "hidden"
            } p-6 bg-black absolute top-20 right-0 mx-4 my-2`}
          >
            <ul className="hidden ml-[15%] sm:flex items-center">
              {Navlinks.map((link) => (
                <li key={link.id}>{link.name}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className="flex items-center ml-auto">
          <Link
            href="https://app.kuda.com"
            className="text-[0.875rem] w-full max-w-full font-bold text-primary-color"
          >
            Sign In
          </Link>
          <Link
            href="/joinkuda"
            className="h-[43px] text-sm min-w-[136px] max-w-[136px] ml-10 font-bold leading-[1] flex items-center justify-center p-[15px] bg-primary-color text-white rounded-lg transition duration-600 transform hover:-translate-y-1 hover:scale-110"
          >
            Join Kuda
          </Link>
          <div className="relative mr-0 ml-[28px] h-[42px]">
            <div className="flex items-center text-primary-color h-10 cursor-pointer">
              <div className="ml-[7px] flex">
                <Image
                  src="data:image/png;base64,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"
                  height={100}
                  width={100}
                  className=""
                  alt="world"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Testing;
