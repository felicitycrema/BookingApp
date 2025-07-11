// import React from "react";
// import { Link, useLocation, useNavigate } from "react-router-dom";
// import ApartmentIcon from "@mui/icons-material/Apartment";
// import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";

// // Replace with actual user data
// const user = {
//   name: "John Doe",
//   avatarUrl: "/default-avatar.png",
// };

// const AccountNav = () => {
//   const { pathname } = useLocation();
//   const navigate = useNavigate();

//   let subpage = pathname.split("/")[2] || "profile";

//   const handleLogout = () => {
//     localStorage.removeItem("token");
//     navigate("/login");
//   };

//   function linkClasses(type = null) {
//     let classes =
//       "relative group inline-flex items-center gap-2 py-2 px-4 rounded-full transition-colors";
//     if (type === subpage) {
//       classes += " bg-red-300 text-white";
//     } else {
//       classes += " bg-gray-200 text-gray-800";
//     }
//     return classes;
//   }

//   return (
//     <nav className="w-full flex flex-wrap justify-center gap-2 mt-8">
//       {/* Profile */}
//       <Link className={linkClasses("profile")} to={"/account"}>
//         <div className="relative inline-block">
//           <img
//             src={user.avatarUrl || "/default-avatar.png"}
//             alt={user.name}
//             className="w-8 h-8 rounded-full object-cover border border-white shadow"
//           />
//           <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full" />
//         </div>
//         <span>My Profile</span>
//         <div className="absolute -top-8 left-1/2 -translate-x-1/2 hidden group-hover:block text-sm bg-black text-white px-2 py-1 rounded z-10">
//           View or edit your profile
//         </div>
//       </Link>

//       {/* Reservations */}
//       <Link
//         className={linkClasses("my-reservations")}
//         to={"/account/my-reservations"}
//       >
//         <CalendarMonthIcon className="w-6 h-6" />
//         <span>My Reservations</span>
//         <div className="absolute -top-8 left-1/2 -translate-x-1/2 hidden group-hover:block text-sm bg-black text-white px-2 py-1 rounded z-10">
//           See your upcoming reservations
//         </div>
//       </Link>

//       {/* Bookings */}
//       <Link className={linkClasses("bookings")} to={"/account/bookings"}>
//         <CalendarMonthIcon className="w-6 h-6" />
//         <span>My bookings</span>
//         <div className="absolute -top-8 left-1/2 -translate-x-1/2 hidden group-hover:block text-sm bg-black text-white px-2 py-1 rounded z-10">
//           View booking history
//         </div>
//       </Link>

//       {/* Places */}
//       <Link className={linkClasses("places")} to={"/account/places"}>
//         <ApartmentIcon className="w-6 h-6" />
//         <span>My accommodation</span>
//         <div className="absolute -top-8 left-1/2 -translate-x-1/2 hidden group-hover:block text-sm bg-black text-white px-2 py-1 rounded z-10">
//           Manage your listings
//         </div>
//       </Link>

//       {/* Logout */}
//       <button
//         onClick={handleLogout}
//         className="relative group inline-flex items-center gap-2 py-2 px-4 rounded-full bg-gray-200 text-gray-800 hover:bg-red-100 transition-colors"
//       >
//         🚪 Logout
//         <div className="absolute -top-8 left-1/2 -translate-x-1/2 hidden group-hover:block text-sm bg-black text-white px-2 py-1 rounded z-10">
//           Sign out of your account
//         </div>
//       </button>
//     </nav>
//   );
// };

// export default AccountNav;

// import React from "react";
// import { Link, useLocation } from "react-router-dom";
// import ApartmentIcon from "@mui/icons-material/Apartment";
// import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";

// // 🔁 Replace with your actual user data
// const user = {
//   name: "John Doe",
//   avatarUrl: "/default-avatar.png", // replace with real avatar URL
// };

// const AccountNav = () => {
//   const { pathname } = useLocation();
//   let subpage = pathname.split("/")[2] || "profile";

//   if (subpage === undefined) {
//     subpage = "profile";
//   }

//   function linkClasses(type = null) {
//     let classes =
//       "inline-flex items-center gap-2 py-2 px-4 rounded-full transition-colors";
//     if (type === subpage) {
//       classes += " bg-red-300 text-white";
//     } else {
//       classes += " bg-gray-200 text-gray-800";
//     }
//     return classes;
//   }

//   return (
//     <nav className="w-full flex justify-center gap-2 mt-8">
//       <Link className={linkClasses("profile")} to={"/account"}>
//         <div className="relative inline-block">
//           <img
//             src={user.avatarUrl || "/default-avatar.png"}
//             alt={user.name}
//             className="w-8 h-8 rounded-full object-cover border border-white shadow"
//           />
//           <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full" />
//         </div>
//         My Profile
//       </Link>

//       <Link
//         className={linkClasses("my-reservations")}
//         to={"/account/my-reservations"}
//       >
//         <CalendarMonthIcon className="w-6 h-6" />
//         My Reservations
//       </Link>

//       <Link className={linkClasses("bookings")} to={"/account/bookings"}>
//         <CalendarMonthIcon className="w-6 h-6" />
//         My bookings
//       </Link>

//       <Link className={linkClasses("places")} to={"/account/places"}>
//         <ApartmentIcon className="w-6 h-6" />
//         My accommodation
//       </Link>
//     </nav>
//   );
// };

// export default AccountNav;

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
        <AccountCircleIcon className="w-8 h-8 text-gray-600" />
        My Profile
      </Link>

      <Link
        className={linkClasses("my-reservations")}
        to={"/account/my-reservations"}
      >
        <AccountCircleIcon />
        My Reservations
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
