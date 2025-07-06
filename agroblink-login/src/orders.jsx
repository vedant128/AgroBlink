import React from "react";
import {
  Truck,
  CalendarDays,
  ArrowRightCircle,
  Home,
  Repeat,
  Grid,
  Printer,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate, useLocation } from "react-router-dom";

const orders = [
  {
    id: "ORD12345",
    date: "2025-06-01",
    status: "Delivered",
    total: "₹350",
    items: [
      {
        name: "Fresh Apples",
        qty: 2,
        img: "./src/assets/bg.png",
      },
      {
        name: "Bananas",
        qty: 1,
        img: "./src/assets/bg.png",
      },
    ],
  },
  {
    id: "ORD12346",
    date: "2025-05-25",
    status: "In Transit",
    total: "₹420",
    items: [
      {
        name: "Tomatoes",
        qty: 3,
        img: "./src/assets/bg.png",
      },
      {
        name: "Milk (1L)",
        qty: 1,
        img: "./src/assets/bg.png",
      },
    ],
  },
  // You can add more dummy orders here to test scrolling
];

const OrdersPage = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const isActive = (path) =>
    location.pathname.toLowerCase() === path.toLowerCase();

  return (
    <div className="h-screen flex flex-col bg-gray-50">
      {/* Content Area with Scroll */}
      <main className="flex-1 overflow-y-auto px-4 py-6 pb-32">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">My Orders</h1>

        {orders.map((order) => (
          <div
            key={order.id}
            className="bg-white rounded-xl shadow-md p-5 mb-6 space-y-4"
          >
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2">
              <div className="flex items-center gap-3 text-sm text-gray-600">
                <Truck className="text-lime-500" size={20} />
                <span>
                  Status: <strong>{order.status}</strong>
                </span>
              </div>
              <div className="flex items-center gap-3 text-sm text-gray-600">
                <CalendarDays className="text-blue-500" size={20} />
                <span>{order.date}</span>
              </div>
              <div className="text-sm text-gray-800 font-semibold">
                Total: {order.total}
              </div>
            </div>

            {/* Products */}
            <div className="flex gap-4 overflow-x-auto py-2">
              {order.items.map((item, idx) => (
                <div
                  key={idx}
                  className="min-w-[120px] bg-gray-100 rounded-lg p-2 text-center"
                >
                  <img
                    src={item.img}
                    alt={item.name}
                    className="w-full h-20 object-cover rounded"
                  />
                  <p className="text-sm font-medium mt-2">{item.name}</p>
                  <p className="text-xs text-gray-500">{item.qty} qty</p>
                </div>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex justify-end gap-3">
              <Button variant="outline" size="sm">
                View Details
              </Button>
              <Button
                variant="destructive"
                size="sm"
                className="gap-2 inline-flex items-center"
              >
                Reorder
                <ArrowRightCircle size={16} />
              </Button>
            </div>
          </div>
        ))}
      </main>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 bg-white border-t flex justify-around py-2 md:hidden z-10">
        <button
          onClick={() => navigate("/Homepage")}
          className={`flex flex-col items-center text-xs cursor-pointer font-semibold ${
            isActive("/Homepage") ? "text-lime-600" : "text-gray-400"
          }`}
        >
          <Home size={20} />
          Home
        </button>
        <button
          onClick={() => navigate("/categories")}
          className={`flex flex-col items-center text-xs cursor-pointer font-semibold ${
            isActive("/categories") ? "text-lime-600" : "text-gray-400"
          }`}
        >
          <Grid size={20} />
          Categories
        </button>
        <button
          onClick={() => navigate("/Orders")}
          className={`flex flex-col items-center text-xs cursor-pointer font-semibold ${
            isActive("/Orders") ? "text-lime-600" : "text-gray-400"
          }`}
        >
          <Repeat size={20} />
          Orders
        </button>
        <button
          onClick={() => navigate("/Profile")}
          className={`flex flex-col items-center text-xs cursor-pointer font-semibold ${
            isActive("/Profile") ? "text-lime-600" : "text-gray-400"
          }`}
        >
          <Printer size={20} />
          Profile
        </button>
      </nav>
    </div>
  );
};

export default OrdersPage;
