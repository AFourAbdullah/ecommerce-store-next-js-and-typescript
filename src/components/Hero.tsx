"use client";
import React from "react";
import Carousel from "react-material-ui-carousel";
import Lottie from "lottie-react";
import animationData from "../assets/animation_llthhaf5.json";
import Link from "next/link";
import Image from "next/image";

const Hero = () => {
  const images = [
    "/camwra.png",
    "/shoes.png",
    "/hp.png",
    "/lp.png",
    "/phone.png",
  ];

  return (
    <div className="w-screen flex flex-col md:flex-row justify-around items-center h-screen overflow-x-hidden border-2 border-black ">
      <div className="w-full md:w-[40%] flex-shrink-0 px-4 h-[300px] flex flex-col justify-between items-start  z-10">
        <h1 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
          Welcome To Next Commerce
        </h1>
        <h4 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-slate-800 to-slate-400">
          Shop, Click, Delight: Your Online Retail Heaven!
        </h4>
        <button className="bg-black text-white text-lg py-3 px-6 rounded-lg hover:bg-slate-800">
          <Link href="/products" className="text-white">
            Shop Now
          </Link>
        </button>
      </div>
      <div className="w-[40%] z-10 h-[500px] flex items-center">
        <img src="/maaain.png" alt="" className="w-full  object-cover" />
      </div>
    </div>
  );
};

export default Hero;
