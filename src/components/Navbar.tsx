import Image from "next/image";
import React from "react";
import logo from "../assets/e_logo-removebg-preview.png";
import Link from "next/link";

const Navbar = () => {
  return (
    <header className="bg-slate-800 fixed top-0 left-0 z-40 w-screen py-2 flex items-center justify-evenly">
      <Image src={logo} alt="logo" width={50} height={50} />
      <div className="md:flex w-[60%] gap-36 justify-center  hidden">
        <Link
          href="/products"
          className="text-lg text-white hover:text-gray-500 font-bold"
        >
          Products
        </Link>
        <Link
          href="/products"
          className="text-lg text-white hover:text-gray-500 font-bold"
        >
          Search
        </Link>
        <Link
          href="/products"
          className="text-lg text-white hover:text-gray-500 font-bold"
        >
          Contact Us
        </Link>
      </div>
      <div className="flex w-[20%]  justify-end gap-9">
        <Link
          href="/login"
          className="md:text-lg text-sm  rounded-md  bg-black  border-white text-gray-100 border-2  py-2 px-6 font-semibold flex items-center justify-center w-[150px] text-center"
        >
          Login
        </Link>
        <Link
          href="/signup"
          className="md:text-lg text-sm w-[100px] rounded-md bg-white text-black border-2 border-white py-2 px-6 font-semibold flex items-center justify-center md:w-[150px] text-center"
        >
          Signup
        </Link>
      </div>
    </header>
  );
};

export default Navbar;
