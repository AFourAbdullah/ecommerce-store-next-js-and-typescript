"use client";
interface Product {
  _id: number;
  images: Image[];
  name: string;
  description: string;
  price: number;
  category: string;
  stock: number;
  ratings: number;
}
interface Image {
  url: string;
  // Add any other properties related to the image here if needed
}
import axios from "axios";
import { NextRequest } from "next/server";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

export default function Product(
  { params }: { params: { id: string } },
  request: NextRequest
) {
  const [productDetails, setProductDetails] = useState<Product>();
  //   const { searchParams } = new URL(request.url);
  const id = params.id;
  const [loading, setLoading] = useState(false);
  const getDetails = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get(`/api/products/${id}`);
      if (data.error) {
        return toast.error(data.error);
      }
      setProductDetails(data.data);
      setLoading(false);
      console.log(data);
    } catch (error: any) {
      toast.error(error.message);
      setLoading(false);
    }
  };
  useEffect(() => {
    getDetails();
    console.log(id);
  }, [id]);

  return (
    <div className="container mx-auto p-4 mt-7">
      {loading ? (
        <p>Loading...</p>
      ) : productDetails ? (
        <div className="flex">
          <div className="w-1/2 h-1/2">
            <img
              src={productDetails.images[0].url}
              alt={productDetails.name}
              className="max-w-full h-full object-cover"
            />
          </div>
          <div className="w-1/2 p-4">
            <h1 className="text-2xl font-semibold">{productDetails.name}</h1>
            <p className="text-gray-600">{productDetails.description}</p>
            <p className="text-lg font-semibold mt-2">
              ${productDetails.price}
            </p>
            <button className="bg-blue-500 text-white px-4 py-2 mt-4 rounded">
              Add to Cart
            </button>
          </div>
        </div>
      ) : (
        <p>Product not found.</p>
      )}
    </div>
  );
}
