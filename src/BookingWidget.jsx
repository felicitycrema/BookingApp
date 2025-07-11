import { useEffect, useContext, useState } from "react";
import { differenceInCalendarDays } from "date-fns";
import axios from "axios";
import { Navigate } from "react-router-dom";
import { UserContext } from "./UserContext";

const BookingWidget = ({ place }) => {
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [numberOfGuests, setNumberOfGuests] = useState(1);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [weeklyDiscount, setDiscount] = useState(0);
  const [cleaningFee, setCleaningFee] = useState(0);
  const [serviceFee, setServiceFee] = useState(0);
  const [occupancyTaxFee, setOccupancyTaxFee] = useState(0);
  const [redirect, setRedirect] = useState("");
  const { user } = useContext(UserContext);

  useEffect(() => {
    if (user) {
      setName(user.name);
    }
  }, [user]);

  const numberOfNights =
    checkIn && checkOut
      ? differenceInCalendarDays(new Date(checkOut), new Date(checkIn))
      : 0;

  // Calculate subtotal: price * nights * guests
  const subtotal = numberOfNights * place.price * numberOfGuests;

  useEffect(() => {
    if (numberOfNights > 0) {
      // Flat cleaning fee from place (or fallback to 0)
      setCleaningFee(place.cleaningFee || 0);

      // Weekly discount (percentage) applied if 7+ nights (or 3+ for your original logic)
      // Discount amount = subtotal * weeklyDiscountPercent
      setDiscount(
        numberOfNights >= 3 ? subtotal * (place.weeklyDiscount || 0) : 0
      );

      // Service fee (percentage)
      setServiceFee(subtotal * (place.serviceFee || 0));

      // Occupancy tax (percentage)
      setOccupancyTaxFee(subtotal * (place.occupancyTaxFee || 0));
    } else {
      // Reset all fees if no nights selected
      setCleaningFee(0);
      setDiscount(0);
      setServiceFee(0);
      setOccupancyTaxFee(0);
    }
  }, [numberOfNights, numberOfGuests, place]);

  // Calculate total price
  const total =
    subtotal - weeklyDiscount + cleaningFee + serviceFee + occupancyTaxFee;

  async function bookThisPlace() {
    try {
      const response = await axios.post("/bookings", {
        checkIn,
        checkOut,
        numberOfGuests,
        name,
        phone,
        place: place._id,
        // price: total.toFixed(2), // send total price here
        price: Number(total.toFixed(2)),
        weeklyDiscount,
        cleaningFee,
        serviceFee,
        occupancyTaxFee,
      });
      const bookingId = response.data._id;
      setRedirect(`/account/bookings/${bookingId}`);
    } catch (error) {
      console.error("Booking failed:", error.response?.data || error.message);
      alert("Booking failed. Please check your input or login again.");
    }
  }

  if (redirect) {
    return <Navigate to={redirect} />;
  }

  return (
    <div className="bg-gray-300 shadow-md rounded-2xl p-4 space-y-6">
      <div className="text-center text-2xl font-semibold">
        Price: ${place.price}
        <span className="text-sm font-normal"> / night</span>
      </div>

      {/* Date inputs */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-gray-200 p-4 rounded-xl">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Check-in
          </label>
          <input
            type="date"
            value={checkIn}
            onChange={(e) => setCheckIn(e.target.value)}
            className="w-full border border-gray-300 rounded-lg px-4 py-2"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Check-out
          </label>
          <input
            type="date"
            value={checkOut}
            onChange={(e) => setCheckOut(e.target.value)}
            className="w-full border border-gray-300 rounded-lg px-4 py-2"
          />
        </div>
      </div>

      {/* Guest count */}
      <div className="bg-gray-200 p-4 rounded-xl">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Number of guests
        </label>
        <input
          type="number"
          min={1}
          value={numberOfGuests}
          onChange={(e) => setNumberOfGuests(parseInt(e.target.value) || 1)}
          className="w-full border border-gray-300 rounded-lg px-4 py-2"
        />
      </div>

      {/* Name and phone */}
      {numberOfNights > 0 && (
        <div className="bg-white p-4 rounded-xl space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Your full name
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-4 py-2"
              placeholder="John Doe"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Your mobile number
            </label>
            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-4 py-2"
              placeholder="e.g. 082 123 4567"
            />
          </div>
        </div>
      )}

      {/* Booking button */}
      <button
        onClick={bookThisPlace}
        className="w-full bg-red-600 text-white text-lg font-semibold py-3 rounded-xl hover:bg-red-700 transition mt-4"
        disabled={numberOfNights <= 0 || !name || !phone}
      >
        Reserve
        {numberOfNights > 0 && (
          <span className="block text-sm font-normal mt-1">
            Total: ${total.toFixed(2)} for {numberOfNights} night
            {numberOfNights > 1 ? "s" : ""}          
          </span>
        )}
      </button>

      <span className="text-gray-600 text-center block">
        You won't be charged yet
      </span>

      {/* Price Breakdown */}
      {numberOfNights > 0 && (
        <div className="grid grid-cols-2 gap-y-3 text-sm text-gray-700 mt-2">
          <span>
            ${place.price} x {numberOfNights} nights x {numberOfGuests} guest
            {numberOfGuests > 1 ? "s" : ""}
          </span>
          <span className="text-right">${subtotal.toFixed(2)}</span>

          <span>Weekly discount</span>
          <span className="text-right">-${weeklyDiscount.toFixed(2)}</span>

          <span>Cleaning fee</span>
          <span className="text-right">${cleaningFee.toFixed(2)}</span>

          <span>Service fee</span>
          <span className="text-right">${serviceFee.toFixed(2)}</span>

          <span>Occupancy taxes and fees</span>
          <span className="text-right">${occupancyTaxFee.toFixed(2)}</span>

          <span className="font-semibold">Total</span>
          <span className="text-right font-semibold">${total.toFixed(2)}</span>
        </div>
      )}
    </div>
  );
};

export default BookingWidget;
