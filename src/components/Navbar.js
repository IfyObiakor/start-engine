import React from "react";
import logo from "../images/logo.png";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="w-full flex p-3 navbar main-navbar">
    <img src={logo} alt="Start-Engine" className="w-[100px] h-[35px] my-4 pl-3" />

    <ul className="list-none sm:flex hidden justify-end items-center flex-1">
      <li>
        <Link>Start Investing</Link>
      </li>
      <li>
        <Link>Learn</Link>
      </li>
      <li>
        <Link>Earn Bonus Shares</Link>
      </li>
      <li>
        <Link>Raise Capital</Link>
      </li>
      <li>
        <Link>Log In</Link>
      </li>
    </ul>
    <button className="py-0 px-7 bg-lightGreen rounded-[10px] text-white font-bold outline-none">
      <Link>Sign Up</Link>
    </button>
  </nav>
  );
}

export default Navbar;
