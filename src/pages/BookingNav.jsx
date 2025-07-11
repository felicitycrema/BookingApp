import React from "react";
import { SlidersHorizontal } from "lucide-react"; // for filters icon

const BookingNav = () => {
  return (
    <div className="w-full px-4 sm:px-8 py-4 bg-white shadow-md rounded-2xl flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
      {/* Left: Location + Dates + Guests */}
      <div className="flex flex-wrap gap-2 sm:gap-4 items-center text-gray-800 text-sm sm:text-base">
        <div className="font-semibold">Homes in Himalaya</div>
        <div className="border-l h-4 mx-2" />
        <div>Check in / Check out</div>
        <div className="border-l h-4 mx-2" />
        <div>Aug 19 – 20</div>
        <div className="border-l h-4 mx-2" />
        <div>Guests</div>
        <button className="ml-1 text-blue-600 hover:underline">
          Add guests
        </button>
      </div>

      {/* Right: Filters */}
      <button className="flex items-center gap-2 text-sm sm:text-base text-gray-800 border px-3 py-2 rounded-full hover:bg-gray-100">
        <SlidersHorizontal className="w-4 h-4" />
        Filters
        <span className="ml-1 text-gray-500">(0)</span>
      </button>
    </div>
  );
};

export default BookingNav;
