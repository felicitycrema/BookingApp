import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"; 
import axios from "axios";
import AddressLink from "../AddressLink.jsx";
import PlaceGallery from "./PlaceGallery.jsx";
import BookingDates from "../BookingDates.jsx";

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

  if (!booking) {
    return "Loading...";
  }

  return (
    <div className="m-8">
      {/* <p>Single booking ID: {id}</p> */}
      <h1 className="text-3xl font-bold mb-2">{booking.place.title}</h1>
      <AddressLink className="flex items-center gap-2 my-2">
        {booking.place.address}
      </AddressLink>
      <div className="bg-gray-200 p-6 my-6 rounded-2xl flex items-center justify-between">
        <div>
          <h2 className="text-2xl mb-4">Your booking information</h2>
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
