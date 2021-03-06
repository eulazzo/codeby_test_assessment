import React from "react";

const Button = ({ text, resetCart }) => {
  return (
    <div
      onClick={resetCart}
      className="bg-btnColor hover:bg-blue-800 mt-5 mx-3 py-3 font-extrabold cursor-pointer text-center rounded-md mb-5"
    >
      <p className="text-white">{text}</p>
    </div>
  );
};

export default Button;
