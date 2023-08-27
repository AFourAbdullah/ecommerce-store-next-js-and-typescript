import CategorySection from "@/components/Categories";
import Hero from "@/components/Hero";
import Image from "next/image";
import { FcMultipleSmartphones } from "react-icons/fc";
import { BsLaptopFill } from "react-icons/bs";
import { GiRunningShoe } from "react-icons/gi";
import { BsCameraFill } from "react-icons/bs";
// import { BsLaptopFill } from "react-icons/bs";

export default function Home() {
  const categories = [
    {
      name: "SmartPhones",
      iconUrl: <FcMultipleSmartphones />,
    },
    {
      name: "Laptops",
      iconUrl: <BsLaptopFill />,
    },
    {
      name: "Footwear",
      iconUrl: <GiRunningShoe />,
    },
    {
      name: "Camera",
      iconUrl: <BsCameraFill />,
    },
  ];
  return (
    <main className="overflow-x-hidden">
      <Hero />
      <CategorySection categories={categories} />
    </main>
  );
}
