import React from "react";
import { Link } from "react-router-dom";
export default function Navbar() {
  return (
    <div>
      <nav>
        <ul className="flex justify-between  gap-8  px-5 py-2 bg-[#151515] text-white items-center ">
          <li>
            <Link to="/">Logo</Link>
          </li>
          <li>
            <Link to="/">
              <button className="border-2 px-4 py-2 rounded-lg border-red-500  hover:bg-white hover:text-red-600 hover:border-red-600 transition-all ease-in duration-200 font-merriweather">
                Contact Us
              </button>
            </Link>
          </li>
        </ul>
      </nav>
      <nav>
        <ul
          className="flex justify-center text-[15px]  gap-8 py-2 bg-[whitesmoke] uppercase  font-merriweather"
          style={{ boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px" }}
        >
          <li className="hover:text-red-600 border-b-2 border-[whitesmoke] rounded-sm  py-1 hover:border-b-red-400 transition-all ease-in duration-200">
            <Link to="/">Home</Link>
          </li>
          <li className="hover:text-red-600 border-b-2 border-[whitesmoke] rounded-sm  py-1 hover:border-b-red-400 transition-all ease-in duration-200">
            <Link to="/Aboutus">About Us</Link>
          </li>
          <li className="hover:text-red-600 border-b-2 border-[whitesmoke] rounded-sm  py-1 hover:border-b-red-400 transition-all ease-in duration-200">
            <Link to="/Services">Services</Link>
          </li>
          <li className="hover:text-red-600 border-b-2 border-[whitesmoke] rounded-sm  py-1 hover:border-b-red-400 transition-all ease-in duration-200">
            <Link to="/Products">Products</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}