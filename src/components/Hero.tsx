"use client";
import React from "react";
import Carousel from "react-material-ui-carousel";
import Lottie from "lottie-react";
import animationData from "../assets/animation_llthhaf5.json";
import Link from "next/link";

const Hero = () => {
  // <Carousel className="carousel">
  //   {train.images &&
  //     train.images.map((item, i) => (
  //       <img
  //         src={item.url}
  //         className="CarouselImage"
  //         key={item.url}
  //         alt="trainImage"
  //       />
  //     ))}
  // </Carousel>;
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div className="w-screen flex justify-around items-center h-[500px] ">
      <div className="absolute w-screen top-0 left-0 h-full bg-black md:clip-path-mypolygon z-0"></div>
      <div className="w-[40%] px-4 h-[300px] flex flex-col justify-between items-start  z-10">
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
      <div className="w-[40%] z-10 h-[300px] flex items-center"></div>
    </div>
  );
};

export default Hero;
