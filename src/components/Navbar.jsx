import React, { use, useEffect, useState } from "react";
import { FaDatabase } from "react-icons/fa6";
import { GoHomeFill } from "react-icons/go";
import { ImBoxAdd } from "react-icons/im";
import { Link, NavLink } from "react-router";
import { AuthContext } from "../context/AuthContext";

const Navbar = () => {
  const { user, signOutUser } = use(AuthContext);

  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    const html = document.querySelector("html");
    html.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const handleTheme = (checked) => {
    console.log(checked);
    setTheme(checked ? "dark" : "light");
  };
  return (
    <div className="navbar py-1 min-h-0 z-1 shadow-sm rounded-full glass-card max-w-7xl mt-2.5 border-2 border-gray-200">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost md:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <li>
              <NavLink to={"/"}>
                <GoHomeFill />
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to={"/all-models"}>
                <FaDatabase /> All Models
              </NavLink>
            </li>
            <li>
              <NavLink to={"/add-model"}>
                <ImBoxAdd /> Add model
              </NavLink>
            </li>
          </ul>
        </div>
        <Link to={"/"} className="flex items-center gap-1 text-xl font-bold">
          AI Model
        </Link>
      </div>
      <div className="navbar-center hidden md:flex">
        <ul className="menu menu-horizontal px-1 gap-10">
          <li>
            <NavLink to={"/"}>
              <GoHomeFill />
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to={"/all-models"}>
              <FaDatabase /> All Models
            </NavLink>
          </li>
          <li>
            <NavLink to={"/add-model"}>
              <ImBoxAdd /> Add model
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="navbar-end gap-3">
        <label className="swap mt-1">
          <input
            type="checkbox"
            onChange={(e) => handleTheme(e.target.checked)}
            checked={theme === "dark"}
          />
          {/* Sun Icon */}
          <svg
            className="swap-on fill-current w-7 h-7 text-yellow-400"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M5.64 17.657l-1.414 1.415-1.415-1.415 1.415-1.414 1.414 1.414zm0-11.314l-1.414-1.415 1.415-1.415 1.414 1.415-1.415 1.415zM12 4V1h-1v3h1zm0 19v-3h-1v3h1zm8.36-5.343l1.415 1.414-1.415 1.415-1.414-1.415 1.414-1.414zM18.36 6.343l1.415-1.415-1.415-1.415-1.414 1.415 1.414 1.415zM4 13H1v-1h3v1zm19 0h-3v-1h3v1zM12 8a4 4 0 110 8 4 4 0 010-8z" />
          </svg>

          {/* Moon Icon */}
          <svg
            className="swap-off fill-current w-7 h-7 text-black"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M21.64 13.348A9 9 0 0110.652 2.36a7 7 0 109.988 10.988z" />
          </svg>
        </label>

        {user ? (
          <div className="dropdown dropdown-end z-50">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar cursor-pointer"
            >
              <div className="w-9 border-2 border-gray-300 rounded-full">
                <img
                  alt="Tailwind CSS Navbar component"
                  referrerPolicy="no-referrer"
                  src={
                    user?.photoURL ||
                    "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                  }
                />
              </div>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-50 mt-3 w-52 p-2 shadow-md shadow-white border-2 border-gray-200 "
            >
              <div className=" pb-3 border-b border-b-gray-200">
                <li className="text-sm font-bold">{user?.displayName}</li>
                <li className="text-xs">{user.email}</li>
              </div>
              <li className="mt-2">
                <Link to={"/my-purchase"}>My Purchase</Link>
              </li>

              <li>
                <Link to={"/my-models"}>My Models</Link>
              </li>

              {/*  <input
                onChange={(e) => handleTheme(e.target.checked)}
                type="checkbox"
                defaultChecked={localStorage.getItem("theme") === "dark"}
                className="toggle"
              />
               */}
              <li>
                <button
                  onClick={signOutUser}
                  className="btn btn-xs text-left bg-linear-to-r from-indigo-600 to-blue-500 hover:from-indigo-700 hover:to-blue-600 text-white mt-3"
                >
                  Logout
                </button>
              </li>
            </ul>
          </div>
        ) : (
          <Link
            to={"/login"}
            className="btn rounded-full border-gray-300 btn-sm bg-linear-to-r from-indigo-600 to-blue-500 hover:from-indigo-700 hover:to-blue-600 text-white"
          >
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
