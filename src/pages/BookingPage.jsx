// import { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import axios from "axios";
// import PlaceGallery from "./PlaceGallery.jsx";
// import BookingDates from "../BookingDates.jsx";
// import PlaceMap from "../PlaceMap.jsx";
// import AddressLink from "../AddressLink.jsx";

// const BookingPage = () => {
//   const { id } = useParams();
//   const [booking, setBooking] = useState(null);

//   useEffect(() => {
//     if (id) {
//       axios.get("/bookings").then((response) => {
//         const foundBooking = response.data.find(({ _id }) => _id === id);
//         if (foundBooking) {
//           setBooking(foundBooking);
//         }
//       });
//     }
//   }, [id]);

//   if (!booking) return "Loading...";

//   // Create a filtered place object with only general photos
//   const placeWithGeneralPhotos = {
//     ...booking.place,
//     photos: {
//       general: booking.place.photos?.general || [],
//     },
//   };

//   return (
//     <div className="m-8">
//       <h1 className="text-3xl font-bold mb-2">{booking.place.title}</h1>

//       <AddressLink>{booking.place.address}</AddressLink>

//       <div className="bg-gray-200 p-6 my-6 rounded-2xl flex items-center justify-between">
//         <div>
//           <h2 className="text-2xl mb-4">Your booking information</h2>
//           <BookingDates booking={booking} />
//         </div>
//         <div className="text-white bg-red-500 p-6 rounded-2xl">
//           <div>Total Price</div>
//           <div className="text-2xl">${booking.price}</div>
//         </div>
//       </div>

//       {/* ✅ Only show general photos */}
//       <PlaceGallery place={placeWithGeneralPhotos} />
//     </div>
//   );
// };

// export default BookingPage;

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import PlaceGallery from "./PlaceGallery.jsx";
import BookingDates from "../BookingDates.jsx";
import PlaceMap from "../PlaceMap.jsx";
import AddressLink from "../AddressLink.jsx";
import IosShareIcon from "@mui/icons-material/IosShare";

const BookingPage = () => {
  const { id } = useParams();
  const [booking, setBooking] = useState(null);

  useEffect(() => {
    if (id) {
      axios.get("/bookings").then((response) => {
        const foundBooking = response.data.find(({ _id }) => _id === id);
        if (foundBooking) {
          setBooking(foundBooking);
        }
      });
    }
  }, [id]);

  if (!booking) return "Loading...";

  return (
    <div className="m-8">
      <h1 className="text-3xl font-bold mb-2">{booking.place.title}</h1>

      {/* Optional: Address link */}
      <AddressLink>{booking.place.address}</AddressLink>

      {/* ✅ Map */}
      {/* <PlaceMap address={booking.place.address} price={booking.price} /> */}
      <div className="flex justify-end items-center gap-4">
        <span className="flex items-center gap-1">
          <IosShareIcon />
          Share
        </span>
        <span className="flex items-center gap-1">♥️ Save</span>
      </div>
      <div className="bg-gray-200 p-6 my-6 rounded-2xl flex items-center justify-between">
        <div>
          <h2 className="text-2xl mb-4">Your booking information</h2>
          <span>Total Guests:</span>
          <BookingDates booking={booking} />
        </div>
        <div className="text-white bg-red-500 p-6 rounded-2xl">
          <div>Total Price</div>
          <div className="text-2xl">${booking.price}</div>
        </div>
      </div>

      <PlaceGallery place={booking.place} />
    </div>
  );
};

export default BookingPage;
