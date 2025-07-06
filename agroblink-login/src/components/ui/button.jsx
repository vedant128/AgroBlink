// src/components/ui/button.jsx

import React from "react";

export const Button = ({ children, className = "", ...props }) => {
  return (
    <button
      className={`px-4 py-2 bg-lime-500 hover:bg-lime-600 text-white rounded-full font-semibold ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
