import React from "react";

function Button({ styles }) {
  return (
    <button
      type="button"
      className={`py-4 px-6 bg-blue-gradient font-popping font-medium rounded-md text-[18px] text-primary outline-none ${styles}`}
    >
      Get Started
    </button>
  );
}

export default Button;
