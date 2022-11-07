import React from "react";
import { Utensils } from "../assets/icons";

const Categories = () => {
  return (
    <div>
      <hr className="py-6" />
      <div>
        <h1 className="font-poppins text-3xl font-bold text-center">
          Categories
        </h1>
      </div>
      <div className="grid grid-cols-4 gap-10 my-10 mx-28">
        <div className=" card">
          <div className="flex flex-col items-center">
            <Utensils className="w-8 h-8" />
            <h2>Restaurants</h2>
          </div>
        </div>
        <div className="card">
          <div className="flex flex-col items-center">
            <Utensils className="w-8 h-8" />
            <h2>Restaurants</h2>
          </div>
        </div>
        <div className="card">
          <div className="flex flex-col items-center">
            <Utensils className="w-8 h-8" />
            <h2>Restaurants</h2>
          </div>
        </div>
        <div className="   card">
          <div className="flex flex-col items-center">
            <Utensils className="w-8 h-8" />
            <h2>Restaurants</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;
