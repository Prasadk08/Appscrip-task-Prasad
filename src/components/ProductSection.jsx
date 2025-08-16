"use client";
import { useState } from "react";
import Image from "next/image";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { IoReorderThreeOutline } from "react-icons/io5";

const filters = [
  { label: "CUSTOMIZABLE" },
  {
    label: "IDEAL FOR",
    options: ["All", "Men", "Women", "Baby & Kids"],
    extra: true,
  },
  { label: "OCCASION" },
  { label: "WORK" },
  { label: "FABRIC" },
  { label: "SEGMENT" },
  { label: "SUITABLE FOR" },
  { label: "RAW MATERIALS" },
  { label: "PATTERN" },
];

export default function ProductsSection({ products }) {
  const [wishlist, setWishlist] = useState([]);
  const [sidebarVisible, setSidebarVisible] = useState(false);

  const toggleWishlist = (product) => {
    if (wishlist.some((item) => item.id === product.id)) {
      setWishlist(wishlist.filter((item) => item.id !== product.id));
    } else {
      setWishlist([...wishlist, product]);
    }
  };

  const toggleSidebar = () => {
    setSidebarVisible((prev) => !prev);
  };

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-20 bg-white">
      <div className="flex gap-6">
        {/* Sidebar for Desktop */}
        <aside className="hidden md:block w-1/4">
          <div className="flex justify-between items-center mb-4">
            <p className="text-sm font-medium">{products.length} ITEMS</p>
          </div>

          {filters.map((filter, idx) => (
            <div key={idx} className="border-b py-3">
              <p className="font-medium text-sm">{filter.label}</p>
              {filter.options && (
                <ul className="mt-2 text-xs text-gray-500 space-y-1">
                  {filter.extra && (
                    <li className="text-blue-500 cursor-pointer">
                      Unselect all
                    </li>
                  )}
                  {filter.options.map((opt, i) => (
                    <li key={i} className="cursor-pointer hover:text-black">
                      {opt}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </aside>

        {/* Overlay + Sidebar for Mobile */}
        {sidebarVisible && (
          <>
            {/* Dark background */}
            <div
              className="fixed inset-0 bg-black bg-opacity-50 z-40"
              onClick={toggleSidebar}
            ></div>

            {/* Mobile Sidebar */}
            <aside className="fixed top-0 left-0 h-full w-3/4 max-w-xs bg-white shadow-lg z-50 p-4 overflow-y-auto transform transition-transform duration-300">
              <div className="flex justify-between items-center mb-4">
                <p className="text-sm font-medium">{products.length} ITEMS</p>
                <button
                  className="text-xs underline text-gray-500 hover:text-black"
                  onClick={toggleSidebar}
                >
                  HIDE FILTER
                </button>
              </div>

              {filters.map((filter, idx) => (
                <div key={idx} className="border-b py-3">
                  <p className="font-medium text-sm">{filter.label}</p>
                  {filter.options && (
                    <ul className="mt-2 text-xs text-gray-500 space-y-1">
                      {filter.extra && (
                        <li className="text-blue-500 cursor-pointer">
                          Unselect all
                        </li>
                      )}
                      {filter.options.map((opt, i) => (
                        <li key={i} className="cursor-pointer hover:text-black">
                          {opt}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </aside>
          </>
        )}

        {/* Products Grid */}
        <div className="flex-1">
          {/* Show Filter button for Mobile */}
          <div className="block md:hidden mb-4">
            <button
              onClick={toggleSidebar}
              className="flex items-center gap-2 px-3 py-2 border rounded hover:bg-gray-100 transition"
            >
              <IoReorderThreeOutline className="text-xl" />
              <span>Show Filter</span>
            </button>
          </div>

          {/* Sort */}
          <div className="flex justify-end mb-6">
            <select className="border px-3 py-2 rounded text-sm">
              <option>Recommended</option>
              <option>Newest</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
            </select>
          </div>

          {/* Product Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
            {products.map((product) => {
              const inWishlist = wishlist.some(
                (item) => item.id === product.id
              );
              return (
                <div
                  key={product.id}
                  className="border rounded-lg overflow-hidden shadow-sm hover:shadow-lg hover:scale-105 transition-all duration-300 ease-in-out bg-white group relative"
                >
                  {/* Image */}
                  <div className="relative w-full h-56 bg-gray-50 flex items-center justify-center overflow-hidden">
                    <Image
                      src={product.image}
                      alt={product.title}
                      width={300}
                      height={300}
                      priority
                      className="object-contain w-auto h-auto"
                    />
                  </div>

                  {/* Details */}
                  <div className="p-4">
                    <h3 className="text-sm font-medium line-clamp-2 min-h-[40px]">
                      {product.title}
                    </h3>
                    <p className="text-lg font-semibold text-green-600 mt-2">
                      ${product.price.toFixed(2)}
                    </p>

                    {/* Rating + Wishlist */}
                    <div className="flex justify-between items-center gap-1 mt-1 text-yellow-500">
                      <div>
                        {"★".repeat(Math.round(product.rating.rate))}
                        <span className="text-xs text-gray-500 ml-1">
                          ({product.rating.count})
                        </span>
                      </div>
                      <button
                        onClick={() => toggleWishlist(product)}
                        className="right-3 p-1"
                      >
                        {inWishlist ? (
                          <FaHeart size={22} className="text-red-500" />
                        ) : (
                          <FaRegHeart size={22} className="text-gray-500" />
                        )}
                      </button>
                    </div>

                    {/* Button */}
                    <button className="mt-4 w-full bg-black text-white py-2 text-sm rounded hover:bg-gray-800 transition-colors">
                      Add to Cart
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
