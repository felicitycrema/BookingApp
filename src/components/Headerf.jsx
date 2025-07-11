import React, { useContext } from "react";
import LanguageIcon from "@mui/icons-material/Language";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { UserContext } from "../UserContext.jsx";

const Headerf = () => {
  const { user } = useContext(UserContext);

  return (
    <header className="flex justify-between items-center px-6 py-4 shadow-md bg-white sticky top-0 z-50">
      {/* Logo */}
      <div className="flex items-center">
        <img
          src="https://1000logos.net/wp-content/uploads/2023/01/Airbnb-logo.png"
          alt="Airbnb Logo"
          className="h-8 object-contain"
        />
      </div>

      {/* Middle navigation */}
      <div className="hidden md:flex space-x-8 justify-center flex-1">
        {["Places to stay", "Experiences", "Online Experiences"].map((item) => (
          <div
            key={item}
            className="cursor-pointer text-gray-700 hover:underline"
          >
            <span>{item}</span>
          </div>
        ))}
      </div>

      {/* Search Bar */}
      {/* <div className="flex flex-1 justify-center md:justify-end max-w-md">
        <div className="flex items-center border rounded-full px-4 py-2 shadow-sm w-full">
          <input
            type="text"
            placeholder="Search..."
            className="flex-grow outline-none text-sm text-gray-600 placeholder-gray-400"
          />
          <SearchIcon className="text-red-400" />
        </div>
      </div> */}

      {/* Right Section */}
      <div className="flex items-center space-x-4 ml-4">
        <p className="text-sm font-medium hidden md:inline cursor-pointer">
          Become a host
        </p>
        <LanguageIcon className="cursor-pointer" />

        <div className="relative group">
          <div className="flex items-center gap-2 border rounded-full px-2 py-1 cursor-pointer hover:shadow-md transition">
            <ExpandMoreIcon />
            <AccountCircleIcon />
          </div>

          <div className="absolute right-0 mt-2 w-40 bg-white border rounded-lg shadow-lg hidden group-hover:block z-50 text-sm">
            <div className="flex flex-col p-2">
              {user ? (
                <>
                  <span className="px-3 py-2 hover:bg-gray-100 rounded cursor-pointer">
                    Account
                  </span>
                  <span className="px-3 py-2 hover:bg-gray-100 rounded cursor-pointer">
                    Log out
                  </span>
                </>
              ) : (
                <>
                  <span className="px-3 py-2 hover:bg-gray-100 rounded cursor-pointer">
                    Sign Up
                  </span>
                  <span className="px-3 py-2 hover:bg-gray-100 rounded cursor-pointer">
                    Log in
                  </span>
                </>
              )}
              <span className="px-3 py-2 hover:bg-gray-100 rounded cursor-pointer">
                Help
              </span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Headerf;
