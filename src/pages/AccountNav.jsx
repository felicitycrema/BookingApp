import React from "react";
import { Link, useLocation } from "react-router-dom";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ApartmentIcon from "@mui/icons-material/Apartment";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";

const AccountNav = () => {
  const { pathname } = useLocation();
  let subpage = pathname.split("/")[2] || "profile";
    if (subpage === undefined) {
        subpage = 'profile';
  }
  function linkClasses(type = null) {
    let classes = "inline-flex gap-1 py-2 px-6 rounded-full";
    if (type === subpage) {
      classes += " bg-red-300 text-white";
    } else {
      classes += " bg-gray-200"; // <- fixed spacing here
    }
    return classes;
  }

  return (
    <nav className="w-full flex justify-center gap-2 mt-8">
      <Link className={linkClasses("profile")} to={"/account"}>
        <AccountCircleIcon />
        My Profile
      </Link>
      <Link className={linkClasses("bookings")} to={"/account/bookings"}>
        <CalendarMonthIcon />
        My bookings
      </Link>
      <Link className={linkClasses("places")} to={"/account/places"}>
        <ApartmentIcon />
        My accommodation
      </Link>
    </nav>
  );
};

export default AccountNav;
