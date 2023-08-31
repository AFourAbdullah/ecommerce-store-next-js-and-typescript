"use client";
import { useState } from "react";
import Link from "next/link";
import { FaShoppingCart } from "react-icons/fa";
import { useSelector } from "react-redux";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { cartItems } = useSelector((state: any) => state.cart);

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

            <li>
              <Link href="/account" className="text-white hover:text-gray-300">
                Account
              </Link>
            </li>
            <li className="ml-10">
              <Link
                href="/cart"
                className="text-white text-2xl hover:text-gray-300 relative"
              >
                <span className="absolute text-white h-12 bg-white w-5 flex items-start  justify-end  bottom-0 right-0">
                  {cartItems.length}
                </span>
                <FaShoppingCart />
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
