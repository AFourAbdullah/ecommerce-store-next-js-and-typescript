"use client";
import Link from "next/link";
import axios from "axios";

import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { useState, useEffect } from "react";
interface USERDETAILS {
  _id: number;
  name: string;
  email: string;
  password: string;
}
export default function userProfile({ params }: any) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [userId, setUserId] = useState("");
  const [userDetails, setUserDetails] = useState<USERDETAILS>();

  async function getDetails() {
    const response = await axios.get("/api/me");
    setUserId(response.data.data._id);
    setUserDetails(response.data.data);
  }
  useEffect(() => {
    getDetails();
  }, []);
  const logout = async () => {
    try {
      const response = await axios.get("/api/logout");
      toast.success(response.data.message);
      router.push("/login");
    } catch (error: any) {
      toast.error(error.message);
    }
  };
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1 className="text-4xl">Profile of {userId}</h1>
      <h1 className="text-4xl">Name {userDetails && userDetails.name}</h1>
      <button
        onClick={logout}
        className="p-2 bg-slate-900 text-white hover:bg-slate-700 cursor-pointer border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600"
      >
        Logout
      </button>
    </div>
  );
}
