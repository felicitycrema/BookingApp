import React from "react";

const AirbnbPayment = ({
  pricePerNight,
  numberOfNights,
  serviceFeePercent = 10,
  occupancyTaxPercent = 8,
  cleaningFee = 0,
  totalGuests = 1,
  onPay = () => alert("Payment submitted!"),
}) => {
  const basePrice = pricePerNight * numberOfNights;
  const serviceFee = (serviceFeePercent / 100) * basePrice;
  const occupancyTax = (occupancyTaxPercent / 100) * basePrice;
  const total = basePrice + serviceFee + occupancyTax + cleaningFee;

  return (
    <div className="max-w-md p-6 bg-white rounded-2xl shadow-md border border-gray-200">
      <h2 className="text-2xl font-semibold mb-6">Your reservation</h2>

      {/* Price per night */}
      <div className="flex justify-between mb-2 text-gray-700">
        <span>
          ${pricePerNight} x {numberOfNights} night
          {numberOfNights > 1 ? "s" : ""}
        </span>
        <span>${basePrice.toFixed(2)}</span>
      </div>

      {/* Cleaning fee */}
      {cleaningFee > 0 && (
        <div className="flex justify-between mb-2 text-gray-700">
          <span>Cleaning fee</span>
          <span>${cleaningFee.toFixed(2)}</span>
        </div>
      )}

      {/* Service fee */}
      <div className="flex justify-between mb-2 text-gray-700">
        <span>Service fee ({serviceFeePercent}%)</span>
        <span>${serviceFee.toFixed(2)}</span>
      </div>

      {/* Occupancy taxes */}
      <div className="flex justify-between mb-2 text-gray-700">
        <span>Occupancy taxes ({occupancyTaxPercent}%)</span>
        <span>${occupancyTax.toFixed(2)}</span>
      </div>

      <hr className="my-4" />

      {/* Total */}
      <div className="flex justify-between text-lg font-semibold">
        <span>Total</span>
        <span>${total.toFixed(2)}</span>
      </div>

      {/* Guests info */}
      <div className="mt-2 text-sm text-gray-500">
        {totalGuests} guest{totalGuests > 1 ? "s" : ""}
      </div>

      {/* Pay button */}
      <button
        onClick={onPay}
        className="w-full mt-6 bg-red-600 text-white py-3 rounded-xl text-lg font-semibold hover:bg-red-700 transition"
      >
        Pay Now
      </button>
    </div>
  );
};

export default AirbnbPayment;
