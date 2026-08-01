import React from "react";

function Text({ children, className = "" }) {
  return (
    <p className={`text-sm text-gray-700 md:text-base ${className}`}>
      {children}
    </p>
  );
}

export default Text;
