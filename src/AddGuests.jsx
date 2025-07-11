// import React, { useState } from "react";

// const AddGuests = ({ value, onChange, maxGuests = 5 }) => {
//   const totalGuests = value.adults + value.children + value.infants;

//   const update = (type, delta) => {
//     const newValue = { ...value, [type]: value[type] + delta };

//     // Don't allow negative or exceed max
//     const newTotal = newValue.adults + newValue.children + newValue.infants;

//     if (newValue[type] < 0 || newTotal > maxGuests) return;

//     onChange(newValue);
//   };

//   const summary = Object.entries(value)
//     .filter(([_, count]) => count > 0)
//     .map(([type, count]) => `${count} ${type}`)
//     .join(", ");

//   return (
//     <div className="space-y-2">
//       <div className="flex gap-4">
//         {["adults", "children", "infants"].map((type) => (
//           <div key={type} className="flex flex-col items-center">
//             <span className="capitalize">{type}</span>
//             <div className="flex items-center gap-2">
//               <button
//                 onClick={() => update(type, -1)}
//                 className="px-2 py-1 bg-gray-400 rounded"
//               >
//                 -
//               </button>
//               <span>{value[type]}</span>
//               <button
//                 onClick={() => update(type, 1)}
//                 className="px-2 py-1 bg-gray-400 rounded"
//               >
//                 +
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>
//       <div className="text-sm text-gray-600">
//         {summary || "No guests selected"} (Max {maxGuests})
//       </div>
//     </div>
//   );
// };

// export default AddGuests;
  
// import React from "react";

// const AddGuests = ({ adults, children, setAdults, setChildren }) => {
//   const increase = (setter, value) => setter(value + 1);
//   const decrease = (setter, value) => setter(Math.max(0, value - 1));

//   return (
//     <div className="space-y-4">
//       <div>
//         <label className="block text-sm font-medium text-gray-700 mb-1">
//           Adults
//         </label>
//         <div className="flex items-center gap-2">
//           <button
//             type="button"
//             onClick={() => decrease(setAdults, adults)}
//             className="w-8 h-8 bg-gray-300 rounded-lg text-lg font-bold"
//           >
//             –
//           </button>
//           <span className="min-w-[2rem] text-center">{adults}</span>
//           <button
//             type="button"
//             onClick={() => increase(setAdults, adults)}
//             className="w-8 h-8 bg-gray-300 rounded-lg text-lg font-bold"
//           >
//             +
//           </button>
//         </div>
//       </div>

//       <div>
//         <label className="block text-sm font-medium text-gray-700 mb-1">
//           Children
//         </label>
//         <div className="flex items-center gap-2">
//           <button
//             type="button"
//             onClick={() => decrease(setChildren, children)}
//             className="w-8 h-8 bg-gray-300 rounded-lg text-lg font-bold"
//           >
//             –
//           </button>
//           <span className="min-w-[2rem] text-center">{children}</span>
//           <button
//             type="button"
//             onClick={() => increase(setChildren, children)}
//             className="w-8 h-8 bg-gray-300 rounded-lg text-lg font-bold"
//           >
//             +
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AddGuests;

import React from "react";

const AddGuests = ({ adults, children, setAdults, setChildren, maxGuests }) => {
  const totalGuests = adults + children;

  const increase = (setter, value, type) => {
    const newTotal =
      type === "adult" ? value + 1 + children : adults + value + 1;
    if (newTotal <= maxGuests) {
      setter(value + 1);
    }
  };

  const decrease = (setter, value, type) => {
    if (type === "adult") {
      // Must have at least 1 adult
      if (value > 1) setter(value - 1);
    } else {
      if (value > 0) setter(value - 1);
    }
  };

  return (
    <div className="space-y-4">
      {/* Adults */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Adults
        </label>
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => decrease(setAdults, adults, "adult")}
            className="w-8 h-8 bg-gray-300 rounded-lg text-lg font-bold"
          >
            –
          </button>
          <span className="min-w-[2rem] text-center">{adults}</span>
          <button
            type="button"
            onClick={() => increase(setAdults, adults, "adult")}
            disabled={totalGuests >= maxGuests}
            className="w-8 h-8 bg-gray-300 rounded-lg text-lg font-bold"
          >
            +
          </button>
        </div>
      </div>

      {/* Children */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Children
        </label>
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => decrease(setChildren, children, "child")}
            className="w-8 h-8 bg-gray-300 rounded-lg text-lg font-bold"
          >
            –
          </button>
          <span className="min-w-[2rem] text-center">{children}</span>
          <button
            type="button"
            onClick={() => increase(setChildren, children, "child")}
            disabled={totalGuests >= maxGuests}
            className="w-8 h-8 bg-gray-300 rounded-lg text-lg font-bold"
          >
            +
          </button>
        </div>
      </div>

      {totalGuests >= maxGuests && (
        <p className="text-xs text-red-500">Max {maxGuests} guests allowed</p>
      )}
    </div>
  );
};

export default AddGuests;
