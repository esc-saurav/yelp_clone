import React from "react";
import { SearchIcon } from "../assets/icons";

const Navbar = () => {
  return (
    <>
      <nav className="flex justify-between items-center px-7 mt-5 absolute w-full">
        <div>
          <img
            src="https://www.freepnglogos.com/uploads/yelp-logo-6.png"
            width={100}
            alt="logo"
          />
        </div>
        <div className="flex">
          <input
            className="w-64 border outline-none focus:border-red-400 rounded-l-lg"
            type="text"
            placeholder="  tacos, cheap dinner, Max's"
          />
          <input
            className="w-64 border outline-none px-3 py-3 focus:border-red-400"
            type="text"
            placeholder="San Francisco, CA"
          />
          <button className="bg-red-600 flex justify-center items-center px-5 rounded-r-lg ">
            <SearchIcon className="h-5 w-5 text-white" />
          </button>
        </div>
        <div className="flex gap-4">
          <p className="font-poppins text-white">For Businesses </p>
          <p className="font-poppins text-white">write a review</p>
        </div>
        <div className="flex items-center gap-4">
          <button className="font-poppins text-white rounded px-5 py-2  font-bold border-2 hover:bg-slate-600">
            Login
          </button>
          <button className="bg-red-500 font-poppins  text-white px-5 py-2 rounded font-bold">Sign UP</button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
