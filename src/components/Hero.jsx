"use client";
import React from "react";
import Image from "next/image";
import Button from "../components/Button";

const Hero = () => {
  return (
    <div>
      <div className="bg-gradient-to-r from-indigo-500 to-purple-500 "></div>
      <section className="relative bg-gradient-to-r from-indigo-500 to-purple-500 py-20 overflow-hidden ">
        <div className="flex justify-center z-50 items-center bottom-20 md:px-30">
          <Image
            className="z-1 h-[200] w-[200] md:h-[400] md:w-[400] absolute right-70 md:right-300 opacity-5"
            src="/images/pokeball.png"
            alt="pokeball"
            width={400}
            height={400}
          />
          <Image
            className="w-[300] h-[190] md:w-[700] md:h-[393]"
            src="/images/team.png"
            alt="ivysaur"
            width={700}
            height={700}
          />
           <Image
            className="z-1 h-[200] w-[200] md:w-[400] md:h-[400] absolute left-70 md:left-300 opacity-5"
            src="/images/pokeball.png"
            alt="pokeball"
            width={400}
            height={400}
          />
        </div>
        {/* Bottom convex SVG */}
        <div className="absolute left-0 w-full ">
          <svg
            className="relative block w-[calc(100%+1.3px)] h-[100px]"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 500 100"
            preserveAspectRatio="none"
          >
            <path
              d="M0,0 C150,100 350,100 500,0 L500,100 L0,100 Z"
              className="fill-black"
            />
          </svg>
        </div>
      </section>
    </div>
  );
};

export default Hero;
