import React, { useState } from "react";
import bg from "./assets/bg.png";
import { Eye, EyeOff } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import axios from "./api/axios"; // fixed import path

const AGROblink = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    if (!email || !password) {
      alert("Please enter both email and password.");
      return;
    }

    try {
      const response = await axios.post("/auth/login", { email, password });
      localStorage.setItem("token", response.data.token);
      alert("Login successful!");
      navigate("/Homepage");
    } catch (error) {
      console.error(error.response?.data || error.message);
      alert("Login failed. " + (error.response?.data?.message || error.message));
    }
  };

  return (
    <div
      className="w-screen h-screen bg-cover bg-center bg-no-repeat flex items-center justify-center"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div
        className="rounded-xl w-96 p-6 text-white text-center shadow-lg"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.8)" }}
      >
        <h1 className="text-3xl font-bold mb-6">
          AGRO<span className="text-lime-400">blink</span>
        </h1>
        <div
          className="w-16 h-16 bg-cover bg-center rounded-full mx-auto mb-6"
          style={{
            backgroundImage:
              "url('https://cdn-icons-png.flaticon.com/512/149/149071.png')",
          }}
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full mb-3 px-4 py-2 rounded-full text-white border border-white bg-transparent placeholder-white"
        />
        <div className="relative w-full mb-4">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-2 rounded-full text-white border border-white bg-transparent placeholder-white pr-12"
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute inset-y-0 right-4 flex items-center text-white"
          >
            {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
          </button>
        </div>
        <p className="text-sm text-gray-300 mb-4 cursor-pointer hover:underline">
          Forgot Password?
        </p>
        <button
          onClick={handleLogin}
          className="w-full bg-lime-400 hover:bg-lime-500 text-black font-bold py-2 rounded-full mb-4"
        >
          Login
        </button>
        <button className="w-full flex items-center justify-center gap-3 bg-white text-black font-semibold py-2 rounded-full mb-4">
          <img
            src="https://developers.google.com/identity/images/g-logo.png"
            alt="Google"
            className="w-5 h-5"
          />
          Sign in with Google
        </button>
        <p className="text-sm text-gray-300">
          Don’t have an account?{" "}
          <Link to="/signup" className="text-blue-400 underline">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default AGROblink;
