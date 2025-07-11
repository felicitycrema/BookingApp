import React, { useEffect, useState } from "react";
import axios from "axios";
import AccountNav from "./AccountNav";
import { Link } from "react-router-dom";
import PlaceImg from "./PlaceImg";
import BookingDates from "../BookingDates";
import { loadStripe } from "@stripe/stripe-js";


const BookingsPage = () => {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    axios
      .get("/bookings", { withCredentials: true })
      .then((response) => {
        setBookings(response.data);
      })
      .catch((err) => console.error("Error loading bookings:", err));
  }, []);

  ;
  const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLIC_KEY);
  console.log("Stripe key:", import.meta.env.VITE_STRIPE_PUBLIC_KEY);

async function handlePay(bookingId) {
  try {
    const stripe = await stripePromise;
    if (!stripe) throw new Error("Stripe failed to load");

    const { data } = await axios.post(
      "http://localhost:4000/payments/checkout-session",
      { bookingId }
    );

    console.log("Stripe session ID:", data.id); // ✅ optional debug

    await stripe.redirectToCheckout({ sessionId: data.id }); // ✅ FIXED
  } catch (err) {
    console.error("Payment initiation failed:", err);
  }
}

  

  return (
    <div className="p-4">
      <AccountNav />
      <div className="mt-8">
        {bookings.length > 0 ? (
          bookings.map((booking) => (
            <div
              key={booking._id}
              className="bg-gray-100 rounded-2xl p-4 mb-6 shadow-md"
            >
              <div className="flex gap-4">
                {/* Image */}
                <div className="w-80 flex-shrink-0">
                  <PlaceImg place={booking.place} />
                </div>

                {/* Info Section */}
                <div className="flex flex-col justify-between grow py-2">
                  <div>
                    <Link
                      to={`/account/bookings/${booking._id}`}
                      className="text-xl font-semibold text-blue-600 hover:underline"
                    >
                      {booking.place?.title}
                    </Link>
                    <BookingDates booking={booking} />

                    {/* Review Block */}
                    {booking.review ? (
                      <div className="mt-2 p-3 bg-green-50 rounded border border-green-200">
                        <div className="flex items-center gap-2 font-semibold text-green-700">
                          <span>⭐ {booking.review.rating}/5</span>
                          {booking.review.date && (
                            <span className="text-sm font-normal text-gray-500">
                              —{" "}
                              {new Date(
                                booking.review.date
                              ).toLocaleDateString()}
                            </span>
                          )}
                        </div>
                        {booking.review.text && (
                          <p className="mt-1 text-gray-700 whitespace-pre-wrap">
                            {booking.review.text}
                          </p>
                        )}
                      </div>
                    ) : (
                      <div className="mt-2 text-gray-600 italic">
                        {/* No review yet */}
                      </div>
                    )}
                  </div>

                  {/* Buttons: Review + Pay */}
                  <div className="mt-4 flex gap-4">
                    <button
                      onClick={() => handlePay(booking._id)}
                      className="bg-green-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-red-700"
                    >
                      Pay Now
                    </button>
                    <Link
                      to={`/account/bookings/${booking._id}/review`}
                      className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-blue-700"
                    >
                      {booking.review ? "Edit Review" : "Leave Review"}
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="text-gray-600">No bookings found.</div>
        )}
      </div>
    </div>
  );
};

export default BookingsPage;

// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import AccountNav from "./AccountNav";
// import { Link } from "react-router-dom";
// import PlaceImg from "./PlaceImg";
// import BookingDates from "../BookingDates";
// import AirbnbPayment from "./AirbnbPayment";

// const BookingsPage = () => {
//   const [bookings, setBookings] = useState([]);

//   useEffect(() => {
//     axios
//       .get("/bookings", { withCredentials: true })
//       .then((response) => {
//         setBookings(response.data);
//       })
//       .catch((err) => console.error("Error loading bookings:", err));
//   }, []);

//   return (
//     <div className="p-4">
//       <AccountNav />
//       <div className="mt-8">
//         {bookings.length > 0 ? (
//           bookings.map((booking) => (
//             <div key={booking._id} className="relative">
//               <Link
//                 to={`/account/bookings/${booking._id}`}
//                 className="flex gap-4 bg-gray-200 rounded-2xl p-4 mb-4 hover:bg-gray-300 transition"
//               >
//                 {/* Image Section */}
//                 <div className="w-80 flex-shrink-0">
//                   <PlaceImg place={booking.place} />
//                 </div>

//                 {/* Text Section */}
//                 <div className="py-3 pr-3 grow">
//                   <h2 className="text-xl font-semibold mb-1">
//                     {booking.place?.title}
//                   </h2>
//                   <BookingDates booking={booking} />

//                   {/* Review Status */}
//                   {booking.review ? (
//                     <div className="mt-2 p-3 bg-green-50 rounded border border-green-200">
//                       <div className="flex items-center gap-2 font-semibold text-green-700">
//                         <span>⭐ {booking.review.rating}/5</span>
//                         {booking.review.date && (
//                           <span className="text-sm font-normal text-gray-500">
//                             —{" "}
//                             {new Date(booking.review.date).toLocaleDateString()}
//                           </span>
//                         )}
//                       </div>
//                       {booking.review.text && (
//                         <p className="mt-1 text-gray-700 whitespace-pre-wrap">
//                           {booking.review.text}
//                         </p>
//                       )}
//                     </div>
//                   ) : (
//                     <div className="mt-2 text-gray-600 italic">
//                       {/* No review yet */}
//                     </div>
//                   )}
//                 </div>
//               </Link>

//               {/* Floating Leave/Edit Review Button */}
//               <Link
//                 to={`/account/bookings/${booking._id}/review`}
//                 className="absolute top-2 right-2 bg-blue-600 text-white px-3 py-1 rounded-lg text-sm shadow hover:bg-blue-700 z-10"
//               >
//                 {booking.review ? "Edit Review" : "Leave Review"}
//               </Link>
//             </div>
//           ))
//         ) : (
//           <div className="text-gray-600">No bookings found.</div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default BookingsPage;

// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import AccountNav from "./AccountNav";
// import { Link } from "react-router-dom";
// import PlaceImg from "./PlaceImg";
// import BookingDates from "../BookingDates";

// const BookingsPage = () => {
//   const [bookings, setBookings] = useState([]);

//   useEffect(() => {
//     axios.get("/bookings", { withCredentials: true }).then((response) => {
//       setBookings(response.data);
//     });
//   }, []);

//   return (
//     <div className="p-4">
//       <AccountNav />
//       <div className="mt-8">
//         {bookings.length > 0 ? (
//           bookings.map((booking) => (
//             <div key={booking._id} className="relative">
//               <Link
//                 to={`/account/bookings/${booking._id}`}
//                 className="flex gap-4 bg-gray-200 rounded-2xl p-4 mb-4 hover:bg-gray-300 transition"
//               >
//                 {/* Image Section */}
//                 <div className="w-80 flex-shrink-0">
//                   <PlaceImg place={booking.place} />
//                 </div>

//                 {/* Text Section */}
//                 <div className="py-3 pr-3 grow">
//                   <h2 className="text-xl font-semibold mb-1">
//                     {booking.place?.title}
//                   </h2>
//                   <BookingDates booking={booking} />

//                   {/* Review Status */}
//                   {booking.review ? (
//                     <div className="mt-2 text-green-700 font-medium">
//                       ⭐ You rated this place {booking.review.rating}/5
//                     </div>
//                   ) : (
//                     <div className="mt-2 text-gray-600 italic">
//                       No review yet
//                     </div>
//                   )}
//                 </div>
//               </Link>

//               {/* Floating Leave Review Button */}
//               <Link
//                 to={`/account/bookings/${booking._id}/review`}
//                 className="absolute top-2 right-2 bg-blue-600 text-white px-3 py-1 rounded-lg text-sm shadow hover:bg-blue-700 z-10"
//               >
//                 {booking.review ? "Edit Review" : "Leave Review"}
//               </Link>
//             </div>
//           ))
//         ) : (
//           <div className="text-gray-600">No bookings found.</div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default BookingsPage;

// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import AccountNav from "./AccountNav";
// import { Link } from "react-router-dom";
// import PlaceImg from "./PlaceImg";
// import BookingDates from "../BookingDates";

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
//             <div key={booking._id} className="relative">
//               <Link
//                 to={`/account/bookings/${booking._id}`}
//                 className="flex gap-4 bg-gray-200 rounded-2xl p-4 mb-4 hover:bg-gray-300 transition"
//               >
//                 {/* Image Section */}
//                 <div className="w-80 flex-shrink-0">
//                   <PlaceImg place={booking.place} />
//                 </div>

//                 {/* Text Section */}
//                 <div className="py-3 pr-3 grow">
//                   <h2 className="text-xl font-semibold mb-1">
//                     {booking.place?.title}
//                   </h2>
//                   <BookingDates booking={booking} />
//                 </div>
//               </Link>

//               {/* Floating Leave Review Button */}
//               <Link
//                 to={`/account/bookings/${booking._id}/review`}
//                 className="absolute top-2 right-2 bg-blue-600 text-white px-3 py-1 rounded-lg text-sm shadow hover:bg-blue-700 z-10"
//               >
//                 Leave Review
//               </Link>
//             </div>
//           ))
//         ) : (
//           <div className="text-gray-600">No bookings found.</div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default BookingsPage;
