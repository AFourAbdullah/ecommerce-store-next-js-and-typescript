// components/CategoryCard.tsx
import Image from "next/image";
import React from "react";

interface CategoryCardProps {
  name: string;
  iconUrl: string;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ name, iconUrl }) => {
  return (
    <div className="flex flex-col items-center p-4 bg-white shadow-md rounded-lg">
      <Image src={iconUrl} alt={`${name} Icon`} className="w-12 h-12 mb-2" />
      <h3 className="text-lg font-semibold">{name}</h3>
    </div>
  );
};

export default CategoryCard;
