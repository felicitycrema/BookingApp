// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import AccountNav from "./AccountNav";
// import { differenceInCalendarDays, format } from "date-fns";
// import { Link } from "react-router-dom";

// const BookingsPage = () => {
//   const [bookings, setBookings] = useState([]);

//   useEffect(() => {
//     axios.get("/bookings").then((response) => {
//       setBookings(response.data);
//     });
//   }, []);

//   return (
//     <div className="p-4">
//       <AccountNav />
//       <div className="mt-8">
//         {bookings.length > 0 ? (
//           bookings.map((booking) => (
//             <Link
//               to={`/account/bookings/${booking._id}`}
//               key={booking._id}
//               className="block bg-gray-200 rounded-2xl p-4 mb-4 hover:bg-gray-300 transition"
//               >
//                   <div className="m48">
//                       <PlaceImg place={booking.place} />
//           </div>
//               <div className="text-xl font-semibold mb-1">
//                 {booking.place?.title}
//               </div>
//               <div className="text-sm text-gray-700">
//                 {format(new Date(booking.checkIn), "yyyy-MM-dd")} →{" "}
//                 {format(new Date(booking.checkOut), "yyyy-MM-dd")} (
//                 {differenceInCalendarDays(
//                   new Date(booking.checkOut),
//                   new Date(booking.checkIn)
//                 )}{" "}
//                 nights)
//               </div>
//               <div className="text-sm mt-1">
//                 Total price:{" "}
//                 <span className="font-semibold">${booking.price}</span>
//               </div>
//             </Link>
//           ))
//         ) : (
//           <div className="text-gray-600">No bookings found.</div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default BookingsPage;

import React, { useEffect, useState } from "react";
import axios from "axios";
import AccountNav from "./AccountNav";
import { Link } from "react-router-dom";
import PlaceImg from "./PlaceImg";
import BookingDates from "../BookingDates";

const BookingsPage = () => {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    axios.get("/bookings").then((response) => {
      setBookings(response.data);
    });
  }, []);

  return (
    <div className="p-4">
      <AccountNav />
      <div className="mt-8">
        {bookings.length > 0 ? (
          bookings.map((booking) => (
            <Link
              to={`/account/bookings/${booking._id}`}
              key={booking._id}
              className="flex gap-4 bg-gray-200 rounded-2xl p-4 mb-4 hover:bg-gray-300 transition"
            >
              {/* Image Section */}
              <div className="w-80 flex-shrink-0">
                <PlaceImg place={booking.place} />
              </div>

              {/* Text Section */}
              <div className="py-3 pr-3 grow">
                <h2 className="text-xl font-semibold mb-1">
                  {booking.place?.title}
                </h2>
                <BookingDates booking={booking} />

                {/* <div className="text-sm text-gray-700">
                  {format(new Date(booking.checkIn), "yyyy-MM-dd")} →{" "}
                  {format(new Date(booking.checkOut), "yyyy-MM-dd")} (
                    {differenceInCalendarDays(
                    new Date(booking.checkIn),
                    new Date(booking.checkOut)                    
                  )}{" "}
                  nights)
                </div>

                <div className="text-sm mt-1">
                  Total price:{" "}
                  <span className="font-semibold">${booking.price}</span>
                </div> */}
              </div>
            </Link>
          ))
        ) : (
          <div className="text-gray-600">No bookings found.</div>
        )}
      </div>
    </div>
  );
};

export default BookingsPage;
