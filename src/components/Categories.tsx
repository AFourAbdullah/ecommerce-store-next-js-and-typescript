// components/CategorySection.tsx
import React from "react";
import CategoryCard from "./CategoryCard";

interface Category {
  name: string;
  iconUrl: string;
}

interface CategorySectionProps {
  categories: Category[];
}

const CategorySection: React.FC<CategorySectionProps> = ({ categories }) => {
  return (
    <div className="container mx-auto py-8">
      <h2 className="text-2xl font-semibold mb-4">Categories</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {categories.map((category, index) => (
          <CategoryCard
            key={index}
            name={category.name}
            iconUrl={category.iconUrl}
          />
        ))}
      </div>
    </div>
  );
};

export default CategorySection;
