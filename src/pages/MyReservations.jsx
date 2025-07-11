import { useEffect, useState, useContext } from "react";
import axios from "axios";
import DeleteIcon from "@mui/icons-material/Delete";
import { Navigate } from "react-router-dom";
import AccountNav from "./AccountNav.jsx";
import { UserContext } from "../UserContext.jsx";

const MyReservations = () => {
  const [bookings, setBookings] = useState([]);
  const [sortOrder, setSortOrder] = useState("desc"); // asc or desc
  const [search, setSearch] = useState("");
  const { user } = useContext(UserContext);

  if (!user?.isAdmin) return <Navigate to="/" />;

  useEffect(() => {
    axios
      .get("/admin/bookings", { withCredentials: true })
      .then(({ data }) => setBookings(data))
      .catch((err) => console.error("Failed to load bookings:", err));
  }, []);

  const handleDelete = async (bookingId) => {
    if (!window.confirm("Are you sure you want to delete this reservation?"))
      return;

    try {
      await axios.delete(`/bookings/${bookingId}`, { withCredentials: true });
      setBookings((prev) => prev.filter((b) => b._id !== bookingId));
    } catch (err) {
      console.error("Delete failed:", err);
      alert("Failed to delete reservation.");
    }
  };

  const filtered = bookings.filter((b) => {
    const name = b.user?.name?.toLowerCase() || "";
    const email = b.user?.email?.toLowerCase() || "";
    return (
      name.includes(search.toLowerCase()) ||
      email.includes(search.toLowerCase())
    );
  });

  const sorted = [...filtered].sort((a, b) => {
    const dateA = new Date(a.checkIn);
    const dateB = new Date(b.checkIn);
    return sortOrder === "asc" ? dateA - dateB : dateB - dateA;
  });

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <AccountNav />
      <h1 className="text-2xl font-semibold mb-6">My Reservations</h1>

      {/* Filters */}
      <div className="flex flex-col md:flex-row gap-4 mb-6">
        <input
          type="text"
          placeholder="Search by name or email"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border rounded-xl px-4 py-2 w-full md:w-1/2"
        />
        <select
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value)}
          className="border rounded-xl px-4 py-2 w-full md:w-1/4"
        >
          <option value="desc">Newest Check-in</option>
          <option value="asc">Oldest Check-in</option>
        </select>
      </div>

      {sorted.length === 0 ? (
        <p className="text-gray-500">No reservations found.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full table-auto border border-gray-300 rounded-lg shadow-sm">
            <thead className="bg-gray-200 text-left">
              <tr>
                <th className="p-3">Booked By</th>
                <th className="p-3">Property</th>
                <th className="p-3">Check-in</th>
                <th className="p-3">Check-out</th>
                <th className="p-3">Total Price</th>
                <th className="p-3">Max Guests</th>
                <th className="p-3">Actions</th>
              </tr>
            </thead>
            <tbody>
              {sorted.map((booking) => (
                <tr key={booking._id} className="border-t hover:bg-gray-50">
                  <td className="p-3">
                    <div>{booking.user?.name || "No name"}</div>
                    <div className="text-sm text-gray-500">
                      {booking.user?.email || "No email"}
                    </div>
                  </td>
                  <td className="p-3">
                    {booking.place?.title || "Deleted Place"}
                  </td>
                  <td className="p-3">{booking.checkIn?.slice(0, 10)}</td>
                  <td className="p-3">{booking.checkOut?.slice(0, 10)}</td>
                  <td className="p-3">
                    {booking.price ? `R ${booking.price}` : "N/A"}
                  </td>
                  <td className="p-3">{booking.place?.maxGuests ?? "N/A"}</td>
                  <td className="p-3">
                    <button
                      onClick={() => handleDelete(booking._id)}
                      className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-full text-sm flex items-center gap-1"
                    >
                      <DeleteIcon fontSize="small" />
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default MyReservations;

// import { useEffect, useState, useContext } from "react";
// import axios from "axios";
// import DeleteIcon from "@mui/icons-material/Delete";
// import { Navigate } from "react-router-dom";
// import AccountNav from "./AccountNav.jsx";
// import { UserContext } from "../UserContext.jsx";

// const MyReservations = () => {
//   const [bookings, setBookings] = useState([]);
//   const [sortOrder, setSortOrder] = useState("desc"); // asc or desc
//   const [search, setSearch] = useState("");
//   const { user } = useContext(UserContext);

//   if (!user?.isAdmin) return <Navigate to="/" />;

//   useEffect(() => {
//     axios
//       .get("/admin/bookings", { withCredentials: true })
//       .then(({ data }) => setBookings(data))
//       .catch((err) => console.error("Failed to load bookings:", err));
//   }, []);

//   const handleDelete = async (bookingId) => {
//     if (!window.confirm("Are you sure you want to delete this reservation?"))
//       return;

//     try {
//       await axios.delete(`/bookings/${bookingId}`, { withCredentials: true });
//       setBookings((prev) => prev.filter((b) => b._id !== bookingId));
//     } catch (err) {
//       console.error("Delete failed:", err);
//       alert("Failed to delete reservation.");
//     }
//   };

//   // Filter by user name or email
//   const filtered = bookings.filter((b) => {
//     const name = b.user?.name?.toLowerCase() || "";
//     const email = b.user?.email?.toLowerCase() || "";
//     return (
//       name.includes(search.toLowerCase()) ||
//       email.includes(search.toLowerCase())
//     );
//   });

//   // Sort by check-in date
//   const sorted = [...filtered].sort((a, b) => {
//     const dateA = new Date(a.checkIn);
//     const dateB = new Date(b.checkIn);
//     return sortOrder === "asc" ? dateA - dateB : dateB - dateA;
//   });

//   return (
//     <div className="max-w-6xl mx-auto px-4 py-8">
//       <AccountNav />
//       <h1 className="text-2xl font-semibold mb-6">My Reservations</h1>

//       {/* Filters */}
//       <div className="flex flex-col md:flex-row gap-4 mb-6">
//         <input
//           type="text"
//           placeholder="Search by name or email"
//           value={search}
//           onChange={(e) => setSearch(e.target.value)}
//           className="border rounded-xl px-4 py-2 w-full md:w-1/2"
//         />
//         <select
//           value={sortOrder}
//           onChange={(e) => setSortOrder(e.target.value)}
//           className="border rounded-xl px-4 py-2 w-full md:w-1/4"
//         >
//           <option value="desc">Newest Check-in</option>
//           <option value="asc">Oldest Check-in</option>
//         </select>
//       </div>

//       {sorted.length === 0 ? (
//         <p className="text-gray-500">No reservations found.</p>
//       ) : (
//         <div className="overflow-x-auto">
//           <table className="w-full table-auto border border-gray-300 rounded-lg shadow-sm">
//             <thead className="bg-gray-200 text-left">
//               <tr>
//                 <th className="p-3">Booked By</th>
//                 <th className="p-3">Property</th>
//                 <th className="p-3">Check-in</th>
//                   <th className="p-3">Check-out</th>

//                 <th className="p-3">Actions</th>
//               </tr>
//             </thead>
//             <tbody>
//               {sorted.map((booking) => (
//                 <tr key={booking._id} className="border-t hover:bg-gray-50">
//                   <td className="p-3">
//                     <div>{booking.user?.name || "No name"}</div>
//                     <div className="text-sm text-gray-500">
//                       {booking.user?.email || "No email"}
//                     </div>
//                   </td>
//                   <td className="p-3">
//                     {booking.place?.title || "Deleted Place"}
//                   </td>
//                   <td className="p-3">{booking.checkIn?.slice(0, 10)}</td>
//                   <td className="p-3">{booking.checkOut?.slice(0, 10)}</td>
//                   <td className="p-3">
//                     <button
//                       onClick={() => handleDelete(booking._id)}
//                       className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-full text-sm flex items-center gap-1"
//                     >
//                       <DeleteIcon fontSize="small" />
//                       Delete
//                     </button>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       )}
//     </div>
//   );
// };

// export default MyReservations;

// import { useEffect, useState, useContext } from "react";
// import axios from "axios";
// import DeleteIcon from "@mui/icons-material/Delete";
// import { Navigate } from "react-router-dom";
// import AccountNav from "./AccountNav.jsx";
// import { UserContext } from "../UserContext.jsx";

// const MyReservations = () => {
//   const [bookings, setBookings] = useState([]);
//   const { user } = useContext(UserContext);

//   // ✅ Redirect if not an admin
//   if (!user?.isAdmin) return <Navigate to="/" />;

//   // ✅ Load all bookings from admin route
//   useEffect(() => {
//     axios
//       .get("/admin/bookings", { withCredentials: true })
//       .then(({ data }) => setBookings(data))
//       .catch((err) => console.error("Failed to load bookings:", err));
//   }, []);

//   // ✅ Delete reservation
//   const handleDelete = async (bookingId) => {
//     if (!window.confirm("Are you sure you want to delete this reservation?"))
//       return;

//     try {
//       await axios.delete(`/bookings/${bookingId}`, {
//         withCredentials: true,
//       });
//       setBookings((prev) => prev.filter((b) => b._id !== bookingId));
//     } catch (err) {
//       console.error("Delete failed:", err);
//       alert("Failed to delete reservation.");
//     }
//   };

//   return (
//     <div className="max-w-6xl mx-auto px-4 py-8">
//       <AccountNav />
//       <h1 className="text-2xl font-semibold mb-6">My Reservations</h1>

//       {bookings.length === 0 ? (
//         <p className="text-gray-500">No reservations found.</p>
//       ) : (
//         <div className="overflow-x-auto">
//           <table className="w-full table-auto border border-gray-300 rounded-lg shadow-sm">
//             <thead className="bg-gray-200 text-left">
//               <tr>
//                 <th className="p-3">Booked By</th>
//                 <th className="p-3">Property</th>
//                 <th className="p-3">Check-in</th>
//                 <th className="p-3">Check-out</th>
//                 <th className="p-3">Actions</th>
//               </tr>
//             </thead>
//             <tbody>
//               {bookings.map((booking) => (
//                 <tr key={booking._id} className="border-t hover:bg-gray-50">
//                   <td className="p-3">
//                     <div>{booking.user?.name || "No name"}</div>
//                     <div className="text-sm text-gray-500">
//                       {booking.user?.email || "No email"}
//                     </div>
//                   </td>
//                   <td className="p-3">
//                     {booking.place?.title || "Deleted Place"}
//                   </td>
//                   <td className="p-3">{booking.checkIn?.slice(0, 10)}</td>
//                   <td className="p-3">{booking.checkOut?.slice(0, 10)}</td>
//                   <td className="p-3">
//                     <button
//                       onClick={() => handleDelete(booking._id)}
//                       className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-full text-sm flex items-center gap-1"
//                     >
//                       <DeleteIcon fontSize="small" />
//                       Delete
//                     </button>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       )}
//     </div>
//   );
// };

// export default MyReservations;
