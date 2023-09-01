"use client";
import { useState } from "react";
import Link from "next/link";
import { FiShoppingCart } from "react-icons/fi";
import { CgProfile } from "react-icons/cg";
import { useSelector } from "react-redux";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { cartItems } = useSelector((state: any) => state.cart);
  const { data } = useSelector((state: any) => state.user);
  console.log("user,", data);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-gray-800 p-4 top-0 left-0 fixed w-full z-50">
      <div className="container  flex justify-around items-center w-full">
        <Link
          href="/"
          className=" bg-clip-text text-transparent bg-gradient-to-r from-gray-300 to-gray-400 text-2xl font-semibold"
        >
          Next Commerce
        </Link>
        <div className="lg:hidden">
          <button
            className="text-white focus:outline-none"
            onClick={toggleMenu}
          >
            <svg
              className="h-6 w-6 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path
                fillRule="evenodd"
                d="M21 18H3a1 1 0 0 1 0-2h18a1 1 0 1 1 0 2zm0-6H3a1 1 0 1 1 0-2h18a1 1 0 1 1 0 2zm0-6H3a1 1 0 0 1 0-2h18a1 1 0 0 1 0 2z"
              />
            </svg>
          </button>
        </div>
        <div
          className={`lg:flex hidden lg:items-center lg:justify-evenly w-[40%] `}
        >
          <ul className="lg:flex w-[100%] justify-around space-x-4">
            <li>
              <Link href="/products" className="text-white hover:text-gray-300">
                Products
              </Link>
            </li>
            {!data && (
              <Link href="/login " className="text-white hover:text-gray-300">
                Login
              </Link>
            )}
            <li>
              {data && (
                <Link
                  href="/account"
                  className="text-white hover:text-gray-300 flex items-center gap-2"
                >
                  <CgProfile className="text-xl" />
                  {data && data.name}
                </Link>
              )}
            </li>
            <li className="ml-10">
              <Link
                href="/cart"
                className="text-white text-2xl hover:text-gray-300 relative"
              >
                <span className="absolute text-black h-4 text-[14px] font-semibold mb-4 rounded-full bg-white w-4 flex items-center  justify-center  bottom-0 right-[-10px]">
                  {cartItems.length}
                </span>
                <FiShoppingCart className="text-2xl" />
              </Link>
            </li>
          </ul>
        </div>
        <div
          className={`lg:hidden ${
            isMenuOpen ? "flex" : "hidden"
          } absolute top-0 left-0 w-full mt-20 bg-white`}
        >
          <ul className="flex flex-col justify-center space-x-4 items-center">
            <li>
              <Link href="/products" className="text-black hover:text-gray-300">
                Products
              </Link>
            </li>
            <li>
              <Link href="/cart" className="text-black hover:text-gray-300">
                Cart
              </Link>
            </li>
            <li>
              <Link href="/account" className="text-black hover:text-gray-300">
                Account
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
