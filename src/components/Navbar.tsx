"use client";
import { useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-gray-800 p-4 fixed w-full">
      <div className="container mx-auto flex justify-between items-center">
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
          className={`lg:flex ${
            isMenuOpen ? "block" : "hidden"
          } lg:items-center lg:w-auto`}
        >
          <ul className="lg:flex space-x-4">
            <li>
              <Link href="/products" className="text-white hover:text-gray-300">
                Products
              </Link>
            </li>
            <li>
              <Link href="/cart" className="text-white hover:text-gray-300">
                Cart
              </Link>
            </li>
            <li>
              <Link href="/account" className="text-white hover:text-gray-300">
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
