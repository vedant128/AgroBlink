import React, { useState, useEffect, useRef } from "react";
import { Home, Repeat, Grid, Printer } from "lucide-react";
import { Button } from "@/components/ui/button";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

const ads = [
  "./src/assets/sb1.jpg",
  "./src/assets/sb2.jpg",
  "./src/assets/sb3.jpg",
];

const ads2 = [
  {
    img: "./src/assets/sb1.jpg",
    name: "Fresh Apples",
    price: 120,
    quantity: "1kg"
  },
  {
    img: "./src/assets/sb2.jpg",
    name: "Bananas",
    price: 40,
    quantity: "1 dozen"
  },
  {
    img: "./src/assets/sb3.jpg",
    name: "Tomatoes",
    price: 30,
    quantity: "1kg"
  }
];

const categoriesList = ["Fruits", "Vegetables", "Dairy", "Snacks"];

const HomePage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const isActive = (path) => location.pathname.toLowerCase() === path.toLowerCase();



  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  const [activeCategory, setActiveCategory] = useState(null);

  const categoriesRef = useRef(null);
  const productsRef = useRef(null);

  // Scroll Spy effect to detect which section is in view
  useEffect(() => {
    const handleScroll = () => {
      if (!categoriesRef.current || !productsRef.current) return;

      const scrollY = window.scrollY + window.innerHeight / 3; // slightly down from top

      const categoriesTop = categoriesRef.current.offsetTop;
      const productsTop = productsRef.current.offsetTop;

      if (scrollY >= productsTop) {
        setActiveCategory(null); // no category active if scrolled past categories section
      } else if (scrollY >= categoriesTop) {
        // Keep active category as the first one if none selected
        setActiveCategory((prev) => prev ?? categoriesList[0]);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    // Initialize on mount
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="h-screen flex flex-col bg-white custom-scroll">
      {/* Header */}
      <header className="flex items-center justify-between p-4 shadow-md bg-white sticky top-0 z-10">
        <div>
          <h1 className="text-2xl font-bold text-lime-600">
            AGRO<span className="text-black">blink</span>
          </h1>
          <p className="text-sm text-gray-500">
            Deliver to: <strong>Mumbai</strong>
          </p>
        </div>
        <img
          src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
          alt="User"
          className="w-10 h-10 rounded-full cursor-pointer"
        />
      </header>

      {/* Scrollable Main Content */}
      <main className="flex-grow overflow-y-auto pb-24">
        {/* Search bar */}
        <div className="p-4">
          <input
            type="text"
            placeholder="Search for fruits, vegetables, etc."
            className="w-full border border-gray-300 rounded-full px-4 py-2 focus:outline-none"
          />
        </div>

        {/* Slider */}
        <div className="px-4">
          <Slider {...sliderSettings}>
            {ads.map((url, index) => (
              <div key={index} className="rounded-lg overflow-hidden flex justify-center items-center">
                <img
                  src={url}
                  alt={`Ad ${index + 1}`}
                  className="w-full h-100 object-fit rounded-lg "
                />
              </div>
            ))}
          </Slider>
        </div>

        {/* Categories */}
        <section ref={categoriesRef} className="px-4 mt-6">
          <h2 className="text-lg font-semibold mb-2">Categories</h2>
          <div className="grid grid-cols-4 gap-4">
            {categoriesList.map((item) => (
              <div
                key={item}
                onClick={() => setActiveCategory(item)}
                className={`p-4 rounded-lg text-center text-sm font-medium cursor-pointer
                  ${
                    activeCategory === item
                      ? "bg-lime-600 text-white"
                      : "bg-lime-100 text-lime-700 hover:bg-lime-200"
                  }`}
              >
                {item}
              </div>
            ))}
          </div>
        </section>

        {/* Products */}
<section ref={productsRef} className="px-5 mt-6">
  <h2 className="text-lg font-semibold mb-2">Popular Products</h2>
  <div className="grid grid-cols-5 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
    {ads2.map((product, index) => (
      <div key={index} className="border rounded-lg p-2">
        <img
          src={product.img}
          alt={product.name}
          className="w-full h-32 object-cover mb-2 rounded"
        />
        <h3 className="text-sm font-medium">{product.name}</h3>
        <p className="text-xs text-gray-500">{product.quantity} - ₹{product.price}</p>
        <Button className="w-full mt-2">Add to Cart</Button>
      </div>
    ))}
  </div>
</section>

      </main>

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

export default HomePage;
