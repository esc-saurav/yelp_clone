import React from "react";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <>
      <div className="px-28 py-10 bg-gray-200 flex flex-col gap-10">
        <div className=" flex justify-center">
          <div className="flex-1">
            <h1 className="mb-3 text-lg font-bold font-poppins">About</h1>
            <div className="flex flex-col gap-1">
              <Link to="">Hello</Link>
              <Link to="">Hello</Link>
              <Link to="">Hello</Link>
              <Link to="">Hello</Link>
            </div>
          </div>
          <div className="flex-1">
            <h1 className="mb-3 text-lg font-bold font-poppins">About</h1>
            <div className="flex flex-col gap-1">
              <Link to="">Hello</Link>
              <Link to="">Hello</Link>
              <Link to="">Hello</Link>
              <Link to="">Hello</Link>
            </div>
          </div>

          <div className="flex-1">
            <h1 className="mb-3 text-lg font-bold font-poppins">About</h1>
            <div className="flex flex-col gap-1">
              <Link to="">Hello</Link>
              <Link to="">Hello</Link>
              <Link to="">Hello</Link>
              <Link to="">Hello</Link>
            </div>
          </div>

          <div className="flex-1">
            <h1 className="mb-3 text-lg font-bold font-poppins">About</h1>
            <div className="flex flex-col gap-1">
              <Link to="">Hello</Link>
              <Link to="">Hello</Link>
              <Link to="">Hello</Link>
              <Link to="">Hello</Link>
            </div>
          </div>
        </div>
        <p className="text-sm">
          Copyright © 2004–2022 Yelp Inc. Yelp, Yelp logo, Yelp burst and
          related marks are registered trademarks of Yelp.
        </p>
      </div>
    </>
  );
};

export default Footer;
