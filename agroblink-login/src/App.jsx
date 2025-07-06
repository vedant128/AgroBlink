
import './App.css'
import './tailwind.css'; 
import React from "react";
import AGROblink from "./agroblinklogin";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AGROblinkSignUp from "./sign_up"; // your signup page
import HomePage from "./Homepage";
import Profile from "./Profile";
import  Orders from "./orders";
import Categories from "./categories";

function App() {
  return (
    <Router>
      <Routes>

        <Route path="/" element={<AGROblink />} />

        <Route path="/signup" element={<AGROblinkSignUp />} />

      <Route path="/Homepage" element={<HomePage />} />

      <Route path="/Orders" element={<Orders />} />

      <Route path="/Profile" element={<Profile />} />

      <Route path="/categories" element={<Categories />} />

      </Routes>
    </Router>
  );
}


export default App
