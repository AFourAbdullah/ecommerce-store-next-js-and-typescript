"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";
interface Image {
  url: string;
  // Add any other properties related to the image here if needed
}
interface Product {
  id: number;
  images: Image[];
  name: string;
  description: string;
  price: number;
  category: string;
  stock: number;
  ratings: number;
}

export default function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const getProducts = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get("/api/products");
      setProducts(data.data);
      console.log("datasss", data);
      setLoading(false);
    } catch (error: any) {
      console.log(error);
    }
  };
  useEffect(() => {
    getProducts();
  }, []);
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-semibold mb-4">Products</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {products.length !== 0 &&
            products.map((product: Product) => (
              <div
                key={product.id}
                className="bg-white p-4 border rounded shadow-md"
              >
                <Image
                  src={product.images[0].url} // Assuming images is an array of URLs
                  alt={product.name}
                  className="w-full h-40 object-cover mb-4"
                  width={100}
                  height={100}
                />
                <h2 className="text-lg font-semibold">{product.name}</h2>
                <p className="text-gray-500 mb-2">{product.description}</p>
                <p className="text-lg font-semibold">${product.price}</p>
                <p className="text-sm text-gray-500 mb-2">{product.category}</p>
                <p className="text-sm text-gray-500 mb-2">
                  Stock: {product.stock}
                </p>
                <div className="flex items-center">
                  <div className="mr-2 text-yellow-500">
                    {/* Render star ratings here */}
                    {/* You can use a component or HTML/CSS to render star icons */}
                  </div>
                  <p className="text-sm text-gray-500">({product.ratings})</p>
                </div>
              </div>
            ))}
        </div>
      )}
    </div>
  );
}
