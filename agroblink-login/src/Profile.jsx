import React, { useEffect, useState } from "react";
import { Pencil, LogOut, MapPin, PackageCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate, useLocation } from "react-router-dom";
import { Home, Repeat, Grid, Printer } from "lucide-react";

const ProfilePage = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [user, setUser] = useState({ name: "", email: "" });

  useEffect(() => {
    // Load user data from localStorage on mount
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const isActive = (path) => location.pathname.toLowerCase() === path.toLowerCase();

  return (
    <div className="min-h-screen bg-gray-50 px-4 py-6 pb-24">
      {/* User Info */}
      <div className="bg-white rounded-2xl shadow-md p-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
        <div className="flex items-center gap-4">
          <img
            src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
            alt="User"
            className="w-16 h-16 rounded-full object-cover"
          />
          <div>
            <h2 className="text-xl font-semibold text-gray-800">{user.name || "Guest User"}</h2>
            <p className="text-sm text-gray-500">{user.email || "No email available"}</p>
          </div>
        </div>
        <Button variant="destructive" className="gap-2 inline-flex items-center">
          <Pencil size={16} />
          Edit Profile
        </Button>
      </div>

      {/* Order Summary */}
      <section className="bg-white rounded-2xl shadow-md p-6 mb-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-gray-800">Order History</h3>
          <Button variant="ghost" className="text-sm text-lime-600">
            View All
          </Button>
        </div>
        <div className="flex items-center gap-4 text-sm text-gray-600">
          <PackageCheck size={24} className="text-lime-500" />
          <p>12 Orders Placed</p>
        </div>
      </section>

      {/* Address Section */}
      <section className="bg-white rounded-2xl shadow-md p-6 mb-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-gray-800">Saved Address</h3>
          <Button variant="ghost" className="text-sm text-lime-600">
            Manage
          </Button>
        </div>
        <div className="flex gap-4 items-start text-sm text-gray-700">
          <MapPin size={20} className="mt-1 text-lime-500" />
          <div>
            <p>201, Krishna Residency, Andheri East</p>
            <p>Mumbai, Maharashtra - 400069</p>
            <p>+91 9876543210</p>
          </div>
        </div>
      </section>

      {/* Logout */}
      <div className="flex justify-center mt-8">
        <Button
          variant="destructive"
          className="gap-2 inline-flex items-center"
          onClick={() => {
            localStorage.removeItem("user"); // clear user info on logout
            navigate("/login"); // redirect to login page
          }}
        >
          <LogOut size={16} />
          Logout
        </Button>
      </div>

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

export default ProfilePage;
