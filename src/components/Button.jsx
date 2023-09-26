import React from "react";

function Button({ styles }) {
  return (
    <div className="hover:scale-110 ml-2">
      <button
        type="button"
        className={`py-4 px-6 bg-blue-gradient font-poppins font-medium rounded-md text-[18px] text-primary outline-none ${styles}`}
      >
        Get Started
      </button>
    </div>
  );
}

export default Button;
