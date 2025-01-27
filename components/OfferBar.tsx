import React from "react";

const OfferBar = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center text-center w-full bg-black p-3 text-white text-sm lg:text-2xl font-bold md:space-x-9">
      <p className="space-x-9">
        <span>2 Days</span>
        <span>21 Hours</span>
        <span>13 Minutes</span>
      </p>
      <p>Get 20% off on your first purchase using the app!</p>
    </div>
  );
};

export default OfferBar;
