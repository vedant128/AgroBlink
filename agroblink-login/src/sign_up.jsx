import React, { useState } from "react";
import bg from "./assets/bg.png";
import { Eye, EyeOff } from "lucide-react";
import { Link } from "react-router-dom";
import axios from "./api/axios";

const AGROblinkSignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [profileImage, setProfileImage] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProfileImage(URL.createObjectURL(file));
    }
  };

  const handleSignUp = async () => {
    if (!username || !email || !password || !confirmPassword) {
      alert("Please fill in all fields.");
      return;
    }

    if (password !== confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    try {
      const res = await axios.post("/auth/signup", {
        username,
        email,
        password,
      });

      alert("Signup successful!");
      console.log(res.data);
    } catch (err) {
      console.error(err.response?.data || err.message);
      alert("Signup failed. " + (err.response?.data?.message || err.message));
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

        {/* Profile Image Upload */}
        <div className="mb-6">
          <div
            className="w-16 h-16 rounded-full mx-auto mb-2 bg-cover bg-center border-2 border-lime-400"
            style={{
              backgroundImage: profileImage
                ? `url(${profileImage})`
                : `url('https://cdn-icons-png.flaticon.com/512/149/149071.png')`,
            }}
          />

          <input
            type="file"
            accept="image/*"
            id="profile-upload"
            onChange={handleImageChange}
            className="hidden"
          />

          <label
            htmlFor="profile-upload"
            className="cursor-pointer block text-sm text-lime-400 hover:underline"
          >
            Upload Profile Image
          </label>
        </div>

        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full mb-3 px-4 py-2 rounded-full text-white border border-white bg-transparent placeholder-white"
        />

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full mb-3 px-4 py-2 rounded-full text-white border border-white bg-transparent placeholder-white"
        />

        {/* Password input with toggle */}
        <div className="relative w-full mb-3">
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

        {/* Confirm Password input with toggle */}
        <div className="relative w-full mb-6">
          <input
            type={showConfirmPassword ? "text" : "password"}
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="w-full px-4 py-2 rounded-full text-white border border-white bg-transparent placeholder-white pr-12"
          />
          <button
            type="button"
            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            className="absolute inset-y-0 right-4 flex items-center text-white"
          >
            {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
          </button>
        </div>

        <button
          onClick={handleSignUp}
          className="w-full bg-lime-400 hover:bg-lime-500 text-black font-bold py-2 rounded-full mb-4"
        >
          Sign Up
        </button>

        <p className="text-sm text-gray-300">
          Already have account?{" "}
          <Link to="/" className="text-blue-400 underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default AGROblinkSignUp;
