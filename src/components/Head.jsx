import React, { useContext } from "react";
import LanguageIcon from "@mui/icons-material/Language";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { UserContext } from "../UserContext";
import { Link } from "react-router-dom";

const Head = () => {
  const { user } = useContext(UserContext);

  return (
    <div className="bg-black">
      {/* Top Bar */}
      <div className="flex items-center justify-between px-6 py-4  text-white shadow-md sticky top-0 z-50">
        {/* Logo */}
        <img
          src="https://1000logos.net/wp-content/uploads/2023/01/Airbnb-logo.png"
          alt="Airbnb Logo"
          className=" mx-20 h-8 object-contain"
        />

        {/* Center Nav */}
        <ul className="hidden md:flex space-x-6 font-medium text-white text-sm">
          <li className="cursor-pointer hover:underline">Places to stay</li>
          <li className="cursor-pointer hover:underline">Experiences</li>
          <li className="cursor-pointer hover:underline">Online Experiences</li>
        </ul>

        {/* Right Section */}
        <div className="flex items-center space-x-4 text-white">
          <p className="hidden md:block text-sm font-medium cursor-pointer">
            Become a host
          </p>
          <LanguageIcon className="cursor-pointer text-gray-600" />

          {/* Dropdown */}
          <div className="relative group">
            <div className="flex items-center gap-2 border px-4 py-2 rounded-full hover:shadow transition cursor-pointer">
              <ExpandMoreIcon />
              <AccountCircleIcon />
            </div>

            <div className="absolute right-0 mt-2 w-48 bg-gray-500 border rounded-lg shadow-lg hidden group-hover:block text-sm z-50">
              <div className="flex flex-col p-2">
                {user ? (
                  <>
                    <Link to="/">
                      <span className="px-3 py-2 hover:bg-gray-500 rounded">
                        Account
                      </span>
                    </Link>
                    <span className="px-3 py-2 hover:bg-gray-500 rounded">
                      Log out
                    </span>
                  </>
                ) : (
                  <>
                    <span className="px-3 py-2 hover:bg-gray-500 rounded">
                      Sign Up
                    </span>
                    <span className="px-3 py-2 hover:bg-gray-500 rounded">
                      Log in
                    </span>
                  </>
                )}
                <span className="px-3 py-2 hover:bg-gray-500 rounded">
                  settings
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Search Input Below Header */}
      <div className="flex justify-center py-4 bg-black shadow-sm">
        <div className="border bg-white flex items-center rounded-full px-4 py-2 w-full max-w-md shadow-sm">
          <input
            type="text"
            placeholder="Search..."
            className="flex-grow outline-none text-sm text-gray-600 placeholder-gray-400"
          />
          <SearchIcon className="text-red-400" />
        </div>
      </div>

      {/* Hero Section */}
      <header className="mx-6 rounded-xl relative bg-[url('http://localhost:4000/upload/photo1751202159689.jpg')] bg-cover bg-center h-[90vh] flex items-center justify-center">
        {/* Black Overlay */}
        <div className="absolute inset-0 bg-black/60 rounded-xl z-0 w-60" />

        {/* Content */}
        <div className="text-center text-white p-8 rounded-lg relative z-10">
          <h1 className="text-3xl md:text-5xl font-semibold mb-4">
            Not sure where to go? Perfect.
          </h1>
          {/* <button className="mt-4 px-6 py-3 bg-red-500 font-medium rounded-full hover:shadow-lg transition">
            I'm flexible
          </button> */}
          {/* <Link to="/">
            <button className="mt-4 px-6 py-3 bg-red-500 font-medium rounded-full hover:shadow-lg transition">
              I'm flexible
            </button>
          </Link> */}

          <button className="px-6 py-3 bg-red-500 text-white rounded-full hover:bg-red-600 transition">
            Explore Now
          </button>
        </div>
      </header>
    </div>
  );
};

export default Head;
