import React, { useState } from "react";

const GuestsBreakdown = ({ onChange }) => {
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);
  const [infants, setInfants] = useState(0);

  const handleChange = (type, delta) => {
    setAdults((prev) => (type === "adults" ? Math.max(1, prev + delta) : prev));
    setChildren((prev) =>
      type === "children" ? Math.max(0, prev + delta) : prev
    );
    setInfants((prev) =>
      type === "infants" ? Math.max(0, prev + delta) : prev
    );
  };

  const totalGuests = adults + children; // Infants typically not counted

  // Optional: call parent onChange
  if (onChange) {
    onChange({ adults, children, infants, totalGuests });
  }

  return (
    <div className="p-4 bg-white rounded-xl shadow-md space-y-4 w-full max-w-md mx-auto">
      <h2 className="text-xl font-semibold text-gray-800">Guests</h2>

      {["adults", "children", "infants"].map((type) => (
        <div key={type} className="flex justify-between items-center">
          <div>
            <h3 className="text-gray-700 capitalize">{type}</h3>
            <p className="text-sm text-gray-500">
              {type === "adults"
                ? "Ages 13+"
                : type === "children"
                ? "Ages 2–12"
                : "Under 2"}
            </p>
          </div>
          <div className="flex items-center gap-2">
            <button
              className="px-3 py-1 bg-gray-200 rounded-full text-lg"
              onClick={() => handleChange(type, -1)}
              disabled={type === "adults" ? adults <= 1 : eval(type) <= 0}
            >
              −
            </button>
            <span className="min-w-[24px] text-center">{eval(type)}</span>
            <button
              className="px-3 py-1 bg-gray-200 rounded-full text-lg"
              onClick={() => handleChange(type, 1)}
            >
              +
            </button>
          </div>
        </div>
      ))}

      <div className="text-right text-gray-700 font-medium">
        Total Guests: {totalGuests} {totalGuests === 1 ? "guest" : "guests"}
        {infants > 0 && (
          <span className="text-sm text-gray-500">
            {" "}
            + {infants} infant{infants > 1 ? "s" : ""}
          </span>
        )}
      </div>
    </div>
  );
};

export default GuestsBreakdown;
