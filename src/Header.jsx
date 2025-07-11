// import { useContext, useState, useEffect } from "react";
// import { UserContext } from "./UserContext";
// import { Link, useNavigate } from "react-router-dom";
// import SearchIcon from "@mui/icons-material/Search";
// import MenuIcon from "@mui/icons-material/Menu";
// import AccountCircleIcon from "@mui/icons-material/AccountCircle";
// import LanguageIcon from "@mui/icons-material/Language";
// import GuestsBreakdown from "./pages/GuestsBreakdown.jsx"; // adjust the path if needed

// const Header = () => {
//   const { user } = useContext(UserContext);
//   const [location, setLocation] = useState("");
//   const [checkIn, setCheckIn] = useState("");
//   const [checkOut, setCheckOut] = useState("");
//   const [guests, setGuests] = useState(1);

//   const [guestDetails, setGuestDetails] = useState({
//     adults: 1,
//     children: 0,
//     infants: 0,
//     totalGuests: 1,
//   });

//   const [showGuestModal, setShowGuestModal] = useState(false);
//   const navigate = useNavigate();

//   const handleSearch = () => {
//     const params = new URLSearchParams();
//     if (location) params.append("q", location);
//     if (checkIn) params.append("checkIn", checkIn);
//     if (checkOut) params.append("checkOut", checkOut);
//     if (guests) params.append("guests", guests);
//     navigate(`/search?${params.toString()}`);
//   };

//   useEffect(() => {
//     setGuests(guestDetails.totalGuests);
//   }, [guestDetails]);

//   return (
//     <div>
//       <header className="flex justify-between items-center px-4 py-2 border-b sticky top-0 bg-black z-50 shadow-sm">
//         <Link to="/" className="flex items-center gap-1 text-white">
//           <span className="font-bold text-xl text-primary">airbnb</span>
//         </Link>

//         <div className="hidden md:flex space-x-6 justify-center flex-1 text-white text-sm font-medium">
//           {["Places to stay", "Experiences", "Online Experiences"].map(
//             (item) => (
//               <div
//                 key={item}
//                 className="cursor-pointer hover:underline transition"
//               >
//                 {item}
//               </div>
//             )
//           )}
//         </div>

//         <div className="flex items-center space-x-4 text-white">
//           <p className="text-sm font-medium hidden md:inline cursor-pointer">
//             Become a host
//           </p>
//           <LanguageIcon className="cursor-pointer text-gray-400" />

//           <div className="relative group cursor-pointer">
//             <Link
//               to={user ? "/account" : "/login"}
//               className="flex items-center gap-2 border px-4 py-2 rounded-full hover:shadow-md transition"
//             >
//               <MenuIcon />
//               {user?.avatarUrl ? (
//                 <img
//                   src={user.avatarUrl}
//                   alt="avatar"
//                   className="w-8 h-8 rounded-full object-cover border"
//                 />
//               ) : (
//                 <AccountCircleIcon fontSize="medium" />
//               )}
//               {!!user && <div className="hidden md:block">{user.name}</div>}
//             </Link>

//             <div className="absolute right-0 top-14 z-50 bg-white border rounded-md shadow-md p-3 w-48 text-sm hidden group-hover:block">
//               {user ? (
//                 <>
//                   <div className="mb-2 font-semibold">{user.name}</div>
//                   <Link
//                     to="/account"
//                     className="block px-2 py-1 hover:bg-gray-100 rounded"
//                   >
//                     My Account
//                   </Link>
//                   <Link
//                     to="/account?subpage=places"
//                     className="block px-2 py-1 hover:bg-gray-100 rounded"
//                   >
//                     My Places
//                   </Link>
//                   <Link
//                     to="/"
//                     onClick={() => {
//                       fetch("http://localhost:4000/logout", {
//                         method: "POST",
//                         credentials: "include",
//                       });
//                     }}
//                     className="block mt-2 px-2 py-1 text-red-500 hover:bg-gray-100 rounded"
//                   >
//                     Sign out
//                   </Link>
//                 </>
//               ) : (
//                 <>
//                   <Link
//                     to="/login"
//                     className="block px-2 py-1 hover:bg-gray-100 rounded"
//                   >
//                     Sign in
//                   </Link>
//                   <Link
//                     to="/register"
//                     className="block px-2 py-1 hover:bg-gray-100 rounded"
//                   >
//                     Create account
//                   </Link>
//                 </>
//               )}
//             </div>
//           </div>
//         </div>
//       </header>

//       <section className="bg-black flex justify-center text-center items-center px-4 py-3 shadow-sm">
//         <form
//           onSubmit={(e) => {
//             e.preventDefault();
//             handleSearch();
//           }}
//           className="flex items-center gap-2 rounded-full py-2 px-4 shadow-md hover:shadow-lg transition"
//         >
//           <div className="bg-white hidden md:flex items-center gap-2 rounded-full py-2 px-4 shadow-md hover:shadow-lg transition">
//             <input
//               type="text"
//               placeholder="Anywhere"
//               value={location}
//               onChange={(e) => setLocation(e.target.value)}
//               className="bg-transparent outline-none w-28"
//             />
//             <div className="border-l border-gray-300 h-6" />
//             <input
//               type="date"
//               value={checkIn}
//               onChange={(e) => setCheckIn(e.target.value)}
//               className="bg-transparent outline-none w-28"
//               placeholder="Check-in"
//             />
//             <div className="border-l border-gray-300 h-6" />
//             <input
//               type="date"
//               value={checkOut}
//               onChange={(e) => setCheckOut(e.target.value)}
//               className="bg-transparent outline-none w-28"
//               placeholder="Check-out"
//             />
//             <div className="border-l border-gray-300 h-6" />
//             <input
//               type="text"
//               value={`${guestDetails.totalGuests} guest${
//                 guestDetails.totalGuests > 1 ? "s" : ""
//               }${
//                 guestDetails.infants > 0
//                   ? `, ${guestDetails.infants} infant${
//                       guestDetails.infants > 1 ? "s" : ""
//                     }`
//                   : ""
//               }`}
//               readOnly
//               onClick={() => setShowGuestModal(true)}
//               className="bg-transparent outline-none w-36 cursor-pointer"
//               placeholder="Guests"
//             />
//             <button
//               type="submit"
//               className="ml-2 flex items-center justify-center w-8 h-8 bg-red-500 text-white rounded-full hover:bg-red-600 transition"
//             >
//               <SearchIcon fontSize="small" />
//             </button>
//           </div>
//         </form>
//       </section>

//       {/* Guests Modal */}
//       {showGuestModal && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
//           <div className="bg-white p-6 rounded-xl relative w-[90%] max-w-md">
//             <button
//               onClick={() => setShowGuestModal(false)}
//               className="absolute top-3 right-4 text-gray-500 text-xl hover:text-gray-700"
//             >
//               ✕
//             </button>
//             <GuestsBreakdown
//               onChange={(data) => {
//                 setGuestDetails(data);
//               }}
//             />
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Header;

// import { useContext, useState } from "react";
// import { UserContext } from "./UserContext";
// import { Link, useNavigate } from "react-router-dom";
// import SearchIcon from "@mui/icons-material/Search";
// import MenuIcon from "@mui/icons-material/Menu";
// import AccountCircleIcon from "@mui/icons-material/AccountCircle";
// import LanguageIcon from "@mui/icons-material/Language";

// const Header = () => {
//   const { user } = useContext(UserContext);
//   const [query, setQuery] = useState("");
//   const navigate = useNavigate();

//   const [location, setLocation] = useState("");
//   const [checkIn, setCheckIn] = useState("");
//   const [checkOut, setCheckOut] = useState("");
//   const [guests, setGuests] = useState(1);

//   const handleSearch = () => {
//     const params = new URLSearchParams();
//     if (location) params.append("q", location);
//     if (checkIn) params.append("checkIn", checkIn);
//     if (checkOut) params.append("checkOut", checkOut);
//     if (guests) params.append("guests", guests);
//     navigate(`/search?${params.toString()}`);
//   };

//   return (
//     <div>
//       <header className="flex justify-between items-center px-4 py-2 border-b sticky top-0 bg-black z-50 shadow-sm">
//         {/* Logo */}
//         <Link to="/" className="flex items-center gap-1 text-white">
//           <span className="font-bold text-xl text-primary">airbnb</span>
//         </Link>

//         {/* Middle Navigation */}
//         <div className="hidden md:flex space-x-6 justify-center flex-1 text-white text-sm font-medium">
//           {["Places to stay", "Experiences", "Online Experiences"].map(
//             (item) => (
//               <div
//                 key={item}
//                 className="cursor-pointer hover:underline transition"
//               >
//                 {item}
//               </div>
//             )
//           )}
//         </div>

//         {/* Right Section */}
//         <div className="flex items-center space-x-4 text-white">
//           <p className="text-sm font-medium hidden md:inline cursor-pointer">
//             Become a host
//           </p>
//           <LanguageIcon className="cursor-pointer text-gray-400" />

//           {/* Profile Dropdown */}
//           <div className="relative group cursor-pointer">
//             <Link
//               to={user ? "/account" : "/login"}
//               className="flex items-center gap-2 border px-4 py-2 rounded-full hover:shadow-md transition"
//             >
//               <MenuIcon />
//               {user?.avatarUrl ? (
//                 <img
//                   src={user.avatarUrl}
//                   alt="avatar"
//                   className="w-8 h-8 rounded-full object-cover border"
//                 />
//               ) : (
//                 <AccountCircleIcon fontSize="medium" />
//               )}
//               {!!user && <div className="hidden md:block">{user.name}</div>}
//             </Link>

//             {/* Hover Dropdown */}
//             <div className="absolute right-0 top-14 z-50 bg-white border rounded-md shadow-md p-3 w-48 text-sm hidden group-hover:block">
//               {user ? (
//                 <>
//                   <div className="mb-2 font-semibold">{user.name}</div>
//                   <Link
//                     to="/account"
//                     className="block px-2 py-1 hover:bg-gray-100 rounded"
//                   >
//                     My Account
//                   </Link>
//                   <Link
//                     to="/account?subpage=places"
//                     className="block px-2 py-1 hover:bg-gray-100 rounded"
//                   >
//                     My Places
//                   </Link>
//                   <Link
//                     to="/"
//                     onClick={() => {
//                       fetch("http://localhost:4000/logout", {
//                         method: "POST",
//                         credentials: "include",
//                       });
//                     }}
//                     className="block mt-2 px-2 py-1 text-red-500 hover:bg-gray-100 rounded"
//                   >
//                     Sign out
//                   </Link>
//                 </>
//               ) : (
//                 <>
//                   <Link
//                     to="/login"
//                     className="block px-2 py-1 hover:bg-gray-100 rounded"
//                   >
//                     Sign in
//                   </Link>
//                   <Link
//                     to="/register"
//                     className="block px-2 py-1 hover:bg-gray-100 rounded"
//                   >
//                     Create account
//                   </Link>
//                 </>
//               )}
//             </div>
//           </div>
//         </div>
//       </header>

//       <section className="bg-black flex justify-center text-center items-center px-4 py-3 shadow-sm">
//         <form
//           onSubmit={handleSearch}
//           className="flex items-center gap-2 rounded-full py-2 px-4 shadow-md hover:shadow-lg transition"
//         >
//           {/* Search Filters */}
//           <div className="bg-white hidden md:flex items-center gap-2 rounded-full py-2 px-4 shadow-md hover:shadow-lg transition">
//             <input
//               type="text"
//               placeholder="Anywhere"
//               value={location}
//               onChange={(e) => setLocation(e.target.value)}
//               className="bg-transparent outline-none w-28"
//             />
//             <div className="border-l border-gray-300 h-6" />
//             <label className="flex items-center gap-2">
//               {/* <span>Checkin</span> */}
//               <input
//                 type="date"
//                 value={checkIn}
//                 placeholder="Add dates"
//                 onChange={(e) => setCheckIn(e.target.value)}
//                 className="bg-transparent outline-none w-28"
//               />
//             </label>
//             <div className="border-l border-gray-300 h-6" />
//             <input
//               type="date"
//               value={checkOut}
//               onChange={(e) => setCheckOut(e.target.value)}
//               className="bg-transparent outline-none w-28"
//             />
//             <div className="border-l border-gray-300 h-6" />
//             <input
//               type="number"
//               min={1}
//               value={guests}
//               onChange={(e) => setGuests(e.target.value)}
//               className="bg-transparent outline-none w-16"
//               placeholder="Guests"
//             />
//             <button
//               onClick={handleSearch}
//               className="ml-2 flex items-center justify-center w-8 h-8 bg-red-500 text-white rounded-full hover:bg-red-600 transition"
//             >
//               <SearchIcon fontSize="small" />
//             </button>
//           </div>
//         </form>
//       </section>
//     </div>
//   );
// };

// export default Header;

import { useContext, useState, useEffect } from "react";
import { UserContext } from "./UserContext";
import { Link, useNavigate, useLocation } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LanguageIcon from "@mui/icons-material/Language";

const Header = () => {
  const { user } = useContext(UserContext);
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  const locationData = useLocation(); // to avoid name collision with `location` state

  const [location, setLocation] = useState("");
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [guests, setGuests] = useState(1);

  const handleSearch = (e) => {
    e.preventDefault(); // prevent form reload
    const params = new URLSearchParams();
    if (location) params.append("q", location);
    if (checkIn) params.append("checkIn", checkIn);
    if (checkOut) params.append("checkOut", checkOut);
    if (guests) params.append("guests", guests);
    navigate(`/search?${params.toString()}`);
  };

  // ✅ Reset filters when returning to root "/"
  useEffect(() => {
    if (locationData.pathname === "/") {
      setLocation("");
      setCheckIn("");
      setCheckOut("");
      setGuests(1);
    }
  }, [locationData.pathname]);

  return (
    <div>
      <header className="flex justify-between items-center px-4 py-2 border-b sticky top-0 bg-black z-50 shadow-sm">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-1 text-white">
          <span className="font-bold text-xl text-primary">airbnb</span>
        </Link>

        {/* Middle Navigation */}
        <div className="hidden md:flex space-x-6 justify-center flex-1 text-white text-sm font-medium">
          {["Places to stay", "Experiences", "Online Experiences"].map(
            (item) => (
              <div
                key={item}
                className="cursor-pointer hover:underline transition"
              >
                {item}
              </div>
            )
          )}
        </div>

        {/* Right Section */}
        <div className="flex items-center space-x-4 text-white">
          <p className="text-sm font-medium hidden md:inline cursor-pointer">
            Become a host
          </p>
          <LanguageIcon className="cursor-pointer text-gray-400" />

          {/* Profile Dropdown */}
          <div className="relative group cursor-pointer">
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

            {/* Hover Dropdown */}
            <div className="absolute right-0 top-14 z-50 bg-white border rounded-md shadow-md p-3 w-48 text-sm hidden group-hover:block">
              {user ? (
                <>
                  <div className="mb-2 font-semibold">{user.name}</div>
                  <Link
                    to="/account"
                    className="block px-2 py-1 text-red-950 hover:bg-gray-100 rounded"
                  >
                    My Account
                  </Link>
                  <Link
                    // to="/account?subpage=places"
                    // to={"/account/places/new"}
                    to={"/account/places"}
                    className="block px-2 py-1 text-red-950 hover:bg-gray-100 rounded"
                  >
                    My Places
                  </Link>
                  <Link
                    to="/"
                    onClick={() => {
                      fetch("http://localhost:4000/logout", {
                        method: "POST",
                        credentials: "include",
                      });
                    }}
                    className="block mt-2 px-2 py-1 text-red-950 hover:bg-gray-100 rounded"
                  >
                    Sign out
                  </Link>
                </>
              ) : (
                <>
                  <Link
                    to="/login"
                    className="block px-2 py-1 text-red-950 hover:bg-gray-100 rounded"
                  >
                    Sign in
                  </Link>
                  <Link
                    to="/register"
                    className="block px-2 py-1 text-red-950 hover:bg-gray-100 rounded"
                  >
                    Create account
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      </header>

      <section className="bg-black flex justify-center text-center items-center px-4 py-3 shadow-sm">
        <form
          onSubmit={handleSearch}
          className="flex items-center gap-2 rounded-full py-2 px-4 shadow-md hover:shadow-lg transition"
        >
          {/* Search Filters */}
          <div className="bg-white hidden md:flex items-center gap-2 rounded-full py-2 px-4 shadow-md hover:shadow-lg transition">
            <input
              type="text"
              placeholder="Anywhere"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="bg-transparent outline-none w-28"
            />
            <div className="border-l border-gray-300 h-6" />
            <input
              type="date"
              value={checkIn}
              onChange={(e) => setCheckIn(e.target.value)}
              className="bg-transparent outline-none w-28"
            />
            <div className="border-l border-gray-300 h-6" />
            <input
              type="date"
              value={checkOut}
              onChange={(e) => setCheckOut(e.target.value)}
              className="bg-transparent outline-none w-28"
            />
            <div className="border-l border-gray-300 h-6" />
            <input
              type="number"
              min={1}
              value={guests}
              onChange={(e) => setGuests(parseInt(e.target.value) || 1)}
              className="bg-transparent outline-none w-16"
              placeholder="Guests"
            />
            <button
              type="submit"
              className="ml-2 flex items-center justify-center w-8 h-8 bg-red-500 text-white rounded-full hover:bg-red-600 transition"
            >
              <SearchIcon fontSize="small" />
            </button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default Header;


// import { useContext, useState } from "react";
// import { UserContext } from "./UserContext";
// import { Link, useNavigate } from "react-router-dom";
// import SearchIcon from "@mui/icons-material/Search";
// import MenuIcon from "@mui/icons-material/Menu";
// import AccountCircleIcon from "@mui/icons-material/AccountCircle";
// import LanguageIcon from "@mui/icons-material/Language"; // 🔧 Fix: missing import

// const Header = () => {
//   const { user } = useContext(UserContext);
//   const [query, setQuery] = useState("");
//   const navigate = useNavigate();

//   // const handleSearch = (e) => {
//   //   e.preventDefault();
//   //   if (query.trim()) {
//   //     navigate(`/search?q=${encodeURIComponent(query.trim())}`);
//   //   }
//   // };

//   const [location, setLocation] = useState("");
//   const [checkIn, setCheckIn] = useState("");
//   const [checkOut, setCheckOut] = useState("");
//   const [guests, setGuests] = useState(1);

//   const handleSearch = () => {
//     const params = new URLSearchParams();
//     if (location) params.append("q", location);
//     if (checkIn) params.append("checkIn", checkIn);
//     if (checkOut) params.append("checkOut", checkOut);
//     if (guests) params.append("guests", guests);
//     navigate(`/search?${params.toString()}`);
//   };

//   return (
//     <div>
//       <header className="flex justify-between items-center px-4 py-2 border-b sticky top-0 bg-white z-50 shadow-sm">
//         {/* Logo */}
//         <Link to="/" className="flex items-center gap-1">
//           <span className="font-bold text-xl text-primary">airbnb</span>
//         </Link>

//         {/* Middle Navigation */}
//         <div className="hidden md:flex space-x-6 justify-center flex-1 text-gray-700 text-sm font-medium">
//           {["Places to stay", "Experiences", "Online Experiences"].map(
//             (item) => (
//               <div
//                 key={item}
//                 className="cursor-pointer hover:underline transition"
//               >
//                 {item}
//               </div>
//             )
//           )}
//         </div>

//         {/* Right Section */}
//         <div className="flex items-center space-x-4">
//           <p className="text-sm font-medium hidden md:inline cursor-pointer">
//             Become a host
//           </p>
//           <LanguageIcon className="cursor-pointer text-gray-600" />

//           {/* Profile Dropdown */}
//           <div className="relative group cursor-pointer">
//             <Link
//               to={user ? "/account" : "/login"}
//               className="flex items-center gap-2 border px-4 py-2 rounded-full hover:shadow-md transition"
//             >
//               <MenuIcon />
//               {user?.avatarUrl ? (
//                 <img
//                   src={user.avatarUrl}
//                   alt="avatar"
//                   className="w-8 h-8 rounded-full object-cover border"
//                 />
//               ) : (
//                 <AccountCircleIcon fontSize="medium" />
//               )}
//               {!!user && <div className="hidden md:block">{user.name}</div>}
//             </Link>

//             {/* Hover Dropdown */}
//             <div className="absolute right-0 top-14 z-50 bg-white border rounded-md shadow-md p-3 w-48 text-sm hidden group-hover:block">
//               {user ? (
//                 <>
//                   <div className="mb-2 font-semibold">{user.name}</div>
//                   <Link
//                     to="/account"
//                     className="block px-2 py-1 hover:bg-gray-100 rounded"
//                   >
//                     My Account
//                   </Link>
//                   <Link
//                     to="/account?subpage=places"
//                     className="block px-2 py-1 hover:bg-gray-100 rounded"
//                   >
//                     My Places
//                   </Link>
//                   <Link
//                     to="/"
//                     onClick={() => {
//                       fetch("http://localhost:4000/logout", {
//                         method: "POST",
//                         credentials: "include",
//                       });
//                     }}
//                     className="block mt-2 px-2 py-1 text-red-500 hover:bg-gray-100 rounded"
//                   >
//                     Sign out
//                   </Link>
//                 </>
//               ) : (
//                 <>
//                   <Link
//                     to="/login"
//                     className="block px-2 py-1 hover:bg-gray-100 rounded"
//                   >
//                     Sign in
//                   </Link>
//                   <Link
//                     to="/register"
//                     className="block px-2 py-1 hover:bg-gray-100 rounded"
//                   >
//                     Create account
//                   </Link>
//                 </>
//               )}
//             </div>
//           </div>
//         </div>
//       </header>

//       <section className="flex justify-center text-center items-center px-4 py-3 shadow-sm">
//         <form
//           onSubmit={handleSearch}
//           className="flex items-center gap-2  rounded-full py-2 px-4 shadow-md hover:shadow-lg transition"
//         >
//           {/* Search Filters */}
//           <div className="hidden md:flex items-center gap-2  rounded-full py-2 px-4 shadow-md hover:shadow-lg transition">
//             <input
//               type="text"
//               placeholder="Anywhere"
//               value={location}
//               onChange={(e) => setLocation(e.target.value)}
//               className="bg-transparent outline-none w-28"
//             />
//             <div className="border-l border-gray-300 h-6" />
//             <input
//               type="date"
//               value={checkIn}
//               placeholder="Add dates"
//               onChange={(e) => setCheckIn(e.target.value)}
//               className="bg-transparent outline-none w-28"
//             />
//             <div className="border-l border-gray-300 h-6" />
//             <input
//               type="date"
//               value={checkOut}
//               onChange={(e) => setCheckOut(e.target.value)}
//               className="bg-transparent outline-none w-28"
//             />
//             <div className="border-l border-gray-300 h-6" />
//             <input
//               type="number"
//               min={1}
//               value={guests}
//               onChange={(e) => setGuests(e.target.value)}
//               className="bg-transparent outline-none w-16"
//               placeholder="Guests"
//             />
//             <button
//               onClick={handleSearch}
//               className="ml-2 flex items-center justify-center w-8 h-8 bg-red-500 text-white rounded-full hover:bg-red-600 transition"
//             >
//               <SearchIcon fontSize="small" />
//             </button>
//           </div>
//         </form>
//       </section>
//     </div>
//   );
// };

// export default Header;

// import { useContext, useState } from "react";
// import { UserContext } from "./UserContext";
// import { Link, useNavigate } from "react-router-dom";
// import SearchIcon from "@mui/icons-material/Search";
// import MenuIcon from "@mui/icons-material/Menu";
// import AccountCircleIcon from "@mui/icons-material/AccountCircle";

// const Header = () => {
//   const { user } = useContext(UserContext);
//   const [query, setQuery] = useState("");
//   const navigate = useNavigate();

//   const handleSearch = (e) => {
//     e.preventDefault();
//     if (query.trim()) {
//       navigate(`/search?q=${encodeURIComponent(query.trim())}`);
//     }
//   };

//   return (
//     <header className="flex justify-between items-center px-4 py-2 border-b">
//       {/* Logo */}
//       <Link to="/" className="flex items-center gap-1">
//         <span className="font-bold text-xl">airbnb</span>
//       </Link>

//       {/* Search Form */}
//       <form
//         onSubmit={handleSearch}
//         className="flex items-center gap-2 border border-gray-300 rounded-full py-2 px-4 shadow-md hover:shadow-lg transition"
//       >
//         <input
//           type="text"
//           placeholder="Search city or address"
//           value={query}
//           onChange={(e) => setQuery(e.target.value)}
//           className="outline-none bg-transparent"
//         />
//         <button
//           type="submit"
//           className="flex items-center justify-center w-8 h-8 bg-red-500 text-white rounded-full hover:bg-red-600 transition"
//         >
//           <SearchIcon fontSize="small" />
//         </button>
//       </form>

//       {/* Profile Link */}
//       <Link
//         to={user ? "/account" : "/login"}
//         className="flex items-center gap-2 border px-4 py-2 rounded-full hover:shadow-md transition"
//       >
//         <MenuIcon />
//         {user?.avatarUrl ? (
//           <img
//             src={user.avatarUrl}
//             alt="avatar"
//             className="w-8 h-8 rounded-full object-cover"
//           />
//         ) : (
//           <AccountCircleIcon fontSize="medium" />
//         )}
//         {!!user && <div>{user.name}</div>}
//       </Link>
//     </header>
//   );
// };

// export default Header;

// import { useContext, useState } from "react";
// import { UserContext } from "./UserContext";
// import { Link, useNavigate } from "react-router-dom";
// import SearchIcon from "@mui/icons-material/Search";
// import MenuIcon from "@mui/icons-material/Menu";
// import AccountCircleIcon from "@mui/icons-material/AccountCircle";

// const Header = () => {
//   const { user } = useContext(UserContext);
//   const [query, setQuery] = useState("");
//   const navigate = useNavigate();

//   const handleSearch = (e) => {
//     e.preventDefault();
//     if (query.trim()) {
//       navigate(`/search?q=${encodeURIComponent(query.trim())}`);
//     }
//   };

//   return (
//     <header className="flex justify-between items-center">
//       <Link to="/" className="flex items-center gap-1">
//         {/* SVG logo */}
//         <span className="font-bold text-xl">airbnb</span>
//       </Link>

//       {/* Search Form */}
//       <form
//         onSubmit={handleSearch}
//         className="flex items-center gap-2 border border-gray-300 rounded-full py-2 px-4 shadow-md hover:shadow-lg transition"
//       >
//         <input
//           type="text"
//           placeholder="Search city or address"
//           value={query}
//           onChange={(e) => setQuery(e.target.value)}
//           className="outline-none bg-transparent"
//         />
//         <button
//           type="submit"
//           className="flex items-center justify-center w-8 h-8 bg-red-500 text-white rounded-full hover:bg-red-600 transition"
//         >
//           <SearchIcon fontSize="small" />
//         </button>
//       </form>

//       <Link
//         to={user ? "/account" : "/login"}
//         className="flex items-center gap-2 border px-4 py-2 rounded-full hover:shadow-md transition"
//       >
//         <MenuIcon />
//         <AccountCircleIcon
//         <span>
//         avatarUrl
//           "http://localhost:4000/uploads/avatars/avatar-1751280399792.jpg"
//         </span>/>
//         {!!user && <div>{user.name}</div>}
//       </Link>
//     </header>
//   );
// };

// export default Header;

// import { useContext, useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { UserContext } from "./UserContext";
// import SearchIcon from "@mui/icons-material/Search";

// const Header = () => {
//   const { user } = useContext(UserContext);
//   const navigate = useNavigate();

// const [location, setLocation] = useState("");
// const [checkIn, setCheckIn] = useState("");
// const [checkOut, setCheckOut] = useState("");
// const [guests, setGuests] = useState(1);

// const handleSearch = () => {
//   const params = new URLSearchParams();
//   if (location) params.append("q", location);
//   if (checkIn) params.append("checkIn", checkIn);
//   if (checkOut) params.append("checkOut", checkOut);
//   if (guests) params.append("guests", guests);
//   navigate(`/search?${params.toString()}`);
// };

//   return (
//     <section className="flex justify-center text-center items-center px-4 py-3 shadow-sm">
//       {/* Search Filters */}
//       <div className="hidden md:flex items-center gap-2 border border-gray-300 rounded-full py-2 px-4 shadow-md hover:shadow-lg transition">
//         <input
//           type="text"
//           placeholder="Anywhere"
//           value={location}
//           onChange={(e) => setLocation(e.target.value)}
//           className="bg-transparent outline-none w-28"
//         />
//         <div className="border-l border-gray-300 h-6" />
//         <input
//           type="date"
//           value={checkIn}
//           placeholder="Add dates"
//           onChange={(e) => setCheckIn(e.target.value)}
//           className="bg-transparent outline-none w-28"
//         />
//         <div className="border-l border-gray-300 h-6" />
//         <input
//           type="date"
//           value={checkOut}
//           onChange={(e) => setCheckOut(e.target.value)}
//           className="bg-transparent outline-none w-28"
//         />
//         <div className="border-l border-gray-300 h-6" />
//         <input
//           type="number"
//           min={1}
//           value={guests}
//           onChange={(e) => setGuests(e.target.value)}
//           className="bg-transparent outline-none w-16"
//           placeholder="Guests"
//         />
//         <button
//           onClick={handleSearch}
//           className="ml-2 flex items-center justify-center w-8 h-8 bg-red-500 text-white rounded-full hover:bg-red-600 transition"
//         >
//           <SearchIcon fontSize="small" />
//         </button>
//       </div>

//     </section>
//   );
// };

// export default Header;
