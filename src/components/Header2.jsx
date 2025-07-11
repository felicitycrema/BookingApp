import { useContext } from "react";
import { UserContext } from "../UserContext";
import { Link, useNavigate } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LanguageIcon from "@mui/icons-material/Language";


const Header2 = () => {
  const { user } = useContext(UserContext);
  const navigate = useNavigate();

  return (
    <header className="flex flex-col px-6 py-4 shadow-md bg-white sticky top-0 z-50 space-y-4">
      {/* Top Row: Logo + Nav + Profile */}
      <div className="flex justify-between items-center">
        {/* Left: Logo */}
        <Link to="/" className="text-xl font-bold text-red-500">
          airbnb
        </Link>

        {/* Middle: Navigation */}
        <div className="hidden md:flex space-x-6 text-gray-700 text-sm font-medium">
          {["Places to stay", "Experiences", "Online Experiences"].map(
            (item) => (
              <span
                key={item}
                className="cursor-pointer hover:underline underline-offset-4"
              >
                {item}
              </span>
            )
          )}
        </div>

        {/* Right: Language + Profile */}
        <div className="flex items-center space-x-4">
          <p className="text-sm font-medium hidden md:inline cursor-pointer">
            Become a host
          </p>
          <LanguageIcon className="cursor-pointer text-gray-600" />
          <Link
            to={user ? "/account" : "/login"}
            className="flex items-center gap-2 border px-4 py-2 rounded-full hover:shadow-md transition"
          >
            <MenuIcon />
            {user?.avatarUrl ? (
              <img
                src={user.avatarUrl}
                alt="avatar"
                className="w-8 h-8 rounded-full object-cover border"
              />
            ) : (
              <AccountCircleIcon fontSize="medium" />
            )}
            {!!user && <div className="hidden md:block">{user.name}</div>}
          </Link>
        </div>
      </div>

  
    </header>
  );
};

export default Header2;
