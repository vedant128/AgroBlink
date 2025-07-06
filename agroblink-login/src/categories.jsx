import React, { useState } from "react";
import { Home, Repeat, Grid, Printer } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";


const categories = [
  { name: "Fruits", description: "Fresh and juicy fruits" },
  { name: "Vegetables", description: "Organic and fresh vegetables" },
  { name: "Dairy", description: "Milk, cheese, and other dairy products" },
  { name: "Snacks", description: "Tasty and healthy snacks" },
  { name: "Beverages", description: "Juices, soft drinks, and more" },
  { name: "Bakery", description: "Freshly baked goods" },
  { name: "Meat & Seafood", description: "Fresh meat and seafood" },
  { name: "Frozen Foods", description: "Frozen meals and ingredients" },
];

const CategoriesPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const isActive = (path) => location.pathname.toLowerCase() === path.toLowerCase();

  const [activeCategory, setActiveCategory] = useState(null);

  return (
    <div className="min-h-screen bg-gray-50 px-4 py-6 pb-24">
      <header className="mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Categories</h1>
        <p className="text-sm text-gray-600 mt-1">Browse all product categories</p>
      </header>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {categories.map((cat) => {
          const isActive = activeCategory === cat.name;
          return (
            <div
              key={cat.name}
              onClick={() => setActiveCategory(cat.name)}
              className={`rounded-lg p-6 cursor-pointer transition
                ${
                  isActive
                    ? "bg-lime-600 text-white"
                    : "bg-lime-100 text-lime-700 hover:bg-lime-200"
                }`}
            >
              <h2 className="font-semibold text-lg">{cat.name}</h2>
              <p className={`text-sm mt-1 ${isActive ? "text-lime-100" : "text-lime-800"}`}>
                {cat.description}
              </p>
            </div>
          );
        })}
      </div>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 bg-white border-t flex justify-around py-2 md:hidden z-10">
        <button
          onClick={() => navigate("/Homepage")}
          className={`flex flex-col items-center text-xs cursor-pointer font-semibold ${
            isActive("/Homepage") ? "text-lime-600" : "text-gray-400"
          }`}
        >
          <Home size={20} /> Home
        </button>
        <button
          onClick={() => navigate("/categories")}
          className={`flex flex-col items-center text-xs cursor-pointer font-semibold ${
            isActive("/categories") ? "text-lime-600" : "text-gray-400"
          }`}
        >
          <Grid size={20} /> Categories
        </button>
        <button
          onClick={() => navigate("/Orders")}
          className={`flex flex-col items-center text-xs cursor-pointer font-semibold ${
            isActive("/Orders") ? "text-lime-600" : "text-gray-400"
          }`}
        >
          <Repeat size={20} /> Orders
        </button>
        <button
          onClick={() => navigate("/Profile")}
          className={`flex flex-col items-center text-xs cursor-pointer font-semibold ${
            isActive("/Profile") ? "text-lime-600" : "text-gray-400"
          }`}
        >
          <Printer size={20} /> Profile
        </button>
      </nav>
    </div>
  );
};

export default CategoriesPage;
