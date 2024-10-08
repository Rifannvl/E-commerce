// src/components/FavoriteProduct.js
import React, { useState, useEffect } from "react";
import axios from "axios";
import Aos from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";

export default function FavoriteProduct() {
  Aos.init();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fungsi untuk mengambil data dari API menggunakan metode axios
    const fetchProducts = async () => {
      try {
        const response = await axios.get(
          "https://fakestoreapi.com/products?limit=10"
        );
        setProducts(response.data);
      } catch (err) {
        setError("Terjadi kesalahan saat mengambil data.");
      } finally {
        setLoading(false);
      }
    };

    // Memanggil fungsi fetchProducts saat komponen di-mount
    fetchProducts();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="container mx-auto  mt-10">
      <h1 className="text-3xl font-bold mb-6 text-center text-white">
        Favorite Products
      </h1>
      <p className="text-lg mb-6 text-center text-white">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus faucibus
        massa dignissim tempus.
      </p>
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white p-4 rounded-lg shadow-xl shadow-gray-700 flex flex-col items-center"
            data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
          >
            <img
              src={product.image}
              alt={product.name}
              className="mx-auto py-4 aspect-square w-full object-contain hover:scale-110 transition duration-300"
            />

            <div className="grid grid-cols-2 gap-4">
              <h2 className="text-xs md:text-sm lg:text-md font-bold mb-2 text-start w-full">
                {product.category}
              </h2>
              <p className=" text-xs md:text-sm lg:text-md font-bold mb-4 text-center w-full ">
                $ {product.price}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
