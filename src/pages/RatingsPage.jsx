import React, { useEffect, useState } from "react";
import axios from "axios";
import AccountNav from "./AccountNav";
import PlaceImg from "./PlaceImg";
import BookingDates from "../BookingDates";
import { Link } from "react-router-dom";

const RatingsPage = () => {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    axios
      .get("/bookings", { withCredentials: true }) // Ensure auth cookie is sent
      .then((response) => {
        setBookings(response.data);
      })
      .catch((err) => {
        console.error("Error loading bookings:", err);
      });
  }, []);

  // Filter only bookings that have ended
  const pastBookings = bookings.filter(
    (booking) => new Date(booking.checkOut) < new Date()
  );

  return (
    <div className="p-4">
      <AccountNav />
      <h1 className="text-2xl font-semibold mb-6">Your Reviews & Ratings</h1>

      {pastBookings.length === 0 ? (
        <div className="text-gray-600">You have no past bookings yet.</div>
      ) : (
        pastBookings.map((booking) => (
          <div
            key={booking._id}
            className="bg-gray-100 rounded-2xl p-4 mb-6 flex gap-4 items-start"
          >
            <div className="w-60">
              <PlaceImg place={booking.place} />
            </div>
            <div className="flex-grow">
              <h2 className="text-xl font-semibold mb-1">
                {booking.place?.title}
              </h2>

              <BookingDates booking={booking} />

              {booking.review ? (
                <div className="mt-4">
                  <div className="text-yellow-600 font-semibold">
                    ⭐ {booking.review.rating} / 5
                  </div>
                  <div className="text-gray-700 mt-1 whitespace-pre-wrap">
                    {booking.review.comment}
                  </div>
                </div>
              ) : (
                <div className="mt-4 text-sm text-gray-600 italic">
                  No review submitted yet.
                </div>
              )}

              <Link
                to={`/account/bookings/${booking._id}/review`}
                className="inline-block mt-3 text-blue-600 hover:underline text-sm"
              >
                {booking.review ? "Edit your review" : "Leave a review"}
              </Link>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default RatingsPage;

// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import AccountNav from "./AccountNav";
// import PlaceImg from "./PlaceImg";
// import BookingDates from "../BookingDates";
// import { Link } from "react-router-dom";

// const RatingsPage = () => {
//   const [bookings, setBookings] = useState([]);

//   useEffect(() => {
//     axios.get("/bookings").then((response) => {
//       setBookings(response.data);
//     });
//   }, []);

//   return (
//     <div className="p-4">
//       <AccountNav />
//       <h1 className="text-2xl font-semibold mb-6">Your Reviews & Ratings</h1>
//       {bookings.length === 0 && (
//         <div className="text-gray-600">You have no past bookings yet.</div>
//       )}
//       {bookings.map((booking) => (
//         <div
//           key={booking._id}
//           className="bg-gray-100 rounded-2xl p-4 mb-6 flex gap-4 items-start"
//         >
//           <div className="w-60">
//             <PlaceImg place={booking.place} />
//           </div>
//           <div className="flex-grow">
//             <h2 className="text-xl font-semibold mb-1">
//               {booking.place?.title}
//             </h2>
//             <BookingDates booking={booking} />
//             {booking.review ? (
//               <div className="mt-4">
//                 <div className="text-yellow-600 font-semibold">
//                   ⭐ {booking.review.rating} / 5
//                 </div>
//                 <div className="text-gray-700 mt-1">
//                   {booking.review.comment}
//                 </div>
//               </div>
//             ) : (
//               <div className="mt-4 text-sm text-gray-600 italic">
//                 {/* No review submitted yet. */}
//               </div>
//             )}
//             <Link
//               to={`/account/bookings/${booking._id}/review`}
//               className="inline-block mt-3 text-blue-600 hover:underline text-sm"
//             >
//               {booking.review ? "Edit your review" : "Leave a review"}
//             </Link>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default RatingsPage;
