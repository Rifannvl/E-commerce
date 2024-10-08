// src/pages/ProductsList.js
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import BaseLayout from "../layout/BaseLayout";
import { Link } from "react-router-dom";
import ProductSkeleton from "../components/ProductSkeleton"; // Import Skeleton
import Breadcrumbs from "../components/Breadcrumbs";

export default function ProductsList() {
  const [products, setProducts] = useState([]); // Daftar produk
  const [loading, setLoading] = useState(true); // Status loading
  const [searchTerm, setSearchTerm] = useState(""); // State untuk kata kunci pencarian
  const [selectedCategory, setSelectedCategory] = useState(""); // State untuk kategori yang dipilih
  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      });
  }, []);

  // Mengambil kategori unik dari produk
  const categories = [...new Set(products.map((product) => product.category))];

  // Memfilter produk berdasarkan kata kunci pencarian dan kategori yang dipilih
  const filteredProducts = products.filter((product) => {
    const matchesSearchTerm = product.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory
      ? product.category === selectedCategory
      : true;
    return matchesSearchTerm && matchesCategory;
  });

  if (loading) {
    return (
      <div className="container mx-auto p-6">
        <ul className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 h-screen">
          {Array.from({ length: 8 }).map((_, index) => (
            <ProductSkeleton key={index} />
          ))}
        </ul>
      </div>
    );
  }

  const breadcrumbItems = [
    { label: "Home", path: "/" },
    { label: "Products", path: "/products" }, // Anda dapat menyesuaikan ini sesuai rute yang ada
  ];

  return (
    <BaseLayout>
      <Breadcrumbs items={breadcrumbItems} />
      <div className="bg-gradient-to-br from-gray-800 via-gray-900 to-black min-h-screen">
        <div className="container mx-auto p-6 bg-gray-900 rounded-lg shadow-lg ">
          <h1 className="text-center text-xl lg:text-4xl font-bold text-white mb-6">
            Find Your Desired Products
          </h1>
          <form className="mb-6">
            <div className="relative flex items-center bg-gray-800 rounded-lg overflow-hidden">
              <input
                type="text"
                id="search"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search products..."
                className="w-full h-12 px-4 text-gray-200 bg-gray-800 outline-none placeholder-gray-500"
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="absolute right-4 text-gray-500 h-6 w-6"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <div className="flex flex-wrap gap-2 mt-4 justify-center">
              <button
                type="button"
                onClick={() => setSelectedCategory("")}
                className={`py-1 px-2 sm:py-2 sm:px-4 rounded-full border transition-colors duration-300 ${
                  selectedCategory === ""
                    ? "bg-gray-600 text-white"
                    : "bg-gray-800 text-gray-400"
                } hover:bg-gray-700`}
              >
                All Categories
              </button>
              {categories.map((category, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => setSelectedCategory(category)}
                  className={`py-1 px-2 sm:py-2 sm:px-4 rounded-full border transition-colors duration-300 ${
                    selectedCategory === category
                      ? "bg-gray-600 text-white"
                      : "bg-gray-800 text-gray-400"
                  } hover:bg-gray-700`}
                >
                  {category}
                </button>
              ))}
            </div>
          </form>
        </div>

        <div className="container mx-auto p-6">
          <ul className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredProducts.length > 0 ? (
              filteredProducts.map((product) => (
                <li
                  key={product.id}
                  className="bg-gray-800 text-white rounded-lg shadow-lg overflow-hidden flex flex-col"
                >
                  <img
                    src={product.image}
                    alt={product.title}
                    className=" w-full h-24 lg:h-48 object-cover"
                  />
                  <div className="p-4 flex-grow">
                    <h3 className="text-xs md:text-lg lg:text-xl font-semibold mb-2 line-clamp-2">
                      {product.title}
                    </h3>
                    <p className="text-xs lg:text-sm mb-2 ">
                      {product.category}
                    </p>
                    <p className="text-xs md:text-sm lg:text-lg font-bold mb-4">
                      $ {product.price}
                    </p>
                  </div>
                  <Link
                    to={`/products/${product.id}`}
                    className="block text-center bg-yellow-500 text-gray-900 py-2 rounded-lg hover:bg-yellow-600 transition-colors duration-300"
                  >
                    View
                  </Link>
                </li>
              ))
            ) : (
              <p className="text-gray-400 text-center">No products found</p>
            )}
          </ul>
        </div>
      </div>
    </BaseLayout>
  );
}
