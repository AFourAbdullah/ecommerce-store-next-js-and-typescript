"use client";
import { useState } from "react";

import Image from "next/image";
import { toast } from "react-toastify";
import axios from "axios";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function Login() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const router = useRouter();

  const [loading, setLoading] = useState(false);

  const login = async () => {
    if (!user.email || !user.password) {
      return toast.error("All fields are mandatory");
    }
    try {
      setLoading(true);
      const { data } = await axios.post("/api/login", user);
      console.log("login response is", data);
      if (data.error) {
        return toast.error(data.error);
      }
      window.localStorage.setItem("userLoggedin", JSON.stringify(data));

      router.push(`/profile/${data.user._id}`);
    } catch (error: any) {
      // toast.error(error.message);
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-screen h-screen ">
      <div className="w-5/5 bg-gradient-to-r  h-full flex items-center justify-center z-10">
        <div className="absolute top-0 left-0  flex items-start h-full  justify-end w-full bg-gray-300  z-10 md:clip-path-loginPoly">
          <img src="/loginbg.png" alt="" className="    object-cover mt-16" />
        </div>
        <div className="w-2/5 h-[300px] space-y-3   p-8 rounded-lg z-10 bg-slate-800">
          <h3 className="text-white text-xl font-semibold mb-4 text-center">
            LOGIN
          </h3>
          <input
            type="email"
            placeholder="Email"
            className="w-full px-4 py-2 border rounded focus:outline-none focus:ring focus:border-blue-300 placeholder-gray-800"
            value={user.email}
            onChange={(e) => setUser({ ...user, email: e.target.value })}
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-2 border rounded focus:outline-none focus:ring focus:border-blue-300 placeholder-gray-800"
            value={user.password}
            onChange={(e) => setUser({ ...user, password: e.target.value })}
          />
          <button
            onClick={login}
            className="w-full bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-all duration-300"
          >
            Log In
          </button>
          <h3 className="text-center mt-3 text-white">
            Not a user?{" "}
            <Link
              href="/signup"
              className="text-slate-100 underline underline-offset-2 hover:text-slate-500"
            >
              Signup Now
            </Link>
          </h3>
        </div>
      </div>
    </div>
  );
}
