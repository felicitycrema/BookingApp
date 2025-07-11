import { useState } from "react";
import { DateRange } from "react-date-range";
import { format } from "date-fns";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
// import BookOnlineOutlinedIcon from "@mui/icons-material/BookOnlineOutlined";
// import BorderClearOutlinedIcon from "@mui/icons-material/BorderClearOutlined";

const BookingCalendar = () => {
  const [selectionRange, setSelectionRange] = useState({
    startDate: new Date(),
    endDate: new Date(),
    key: "selection",
  });

  const handleSelect = (ranges) => {
    setSelectionRange(ranges.selection);
  };

  const handleClear = () => {
    setSelectionRange({
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    });
  };

  const handleReserve = () => {
    const { startDate, endDate } = selectionRange;
    alert(
      `Reserving from ${format(startDate, "dd MMM yyyy")} to ${format(
        endDate,
        "dd MMM yyyy"
      )}`
    );
    // You can replace the alert with API logic here
  };

  return (
    <div className="mt-6 p-4 bg-white rounded-2xl shadow-md max-w-3xl mx-4">
      <h2 className="mx-10 text-2xl font-semibold mb-2">
        7 Nights in Johannesburg
      </h2>

      <span className="block mx-10 text-sm text-gray-600 mb-4">
        {`Selected: ${format(
          selectionRange.startDate,
          "dd MMM yyyy"
        )} - ${format(selectionRange.endDate, "dd MMM yyyy")}`}
      </span>

      <div className="flex justify-center overflow-x-auto">
        <DateRange
          ranges={[selectionRange]}
          onChange={handleSelect}
          moveRangeOnFirstSelection={false}
          months={2}
          direction="horizontal"
          minDate={new Date()}
        />
      </div>

      <div className="m-10 flex text-center justify-between gap-4 mt-4">
        <button
          onClick={handleClear}
          className="bg-gray-200 text-gray-800 px-4 py-2 rounded-full hover:bg-gray-300 transition"
        >
          Clear
          {/* <BorderClearOutlinedIcon
            onClick={handleClear}
            className="bg-red-500 text-white px-4 py-2 rounded-full hover:bg-gray-300 transition"
          /> */}
        </button>

        <button
          onClick={handleReserve}
          className="bg-red-500 text-white px-6 py-2 rounded-full hover:bg-red-600 transition"
        >
          Reserve Dates
        </button>
      </div>
    </div>
  );
};

export default BookingCalendar;

// import { useState } from "react";
// import { DateRange } from "react-date-range";
// import { format } from "date-fns";
// import "react-date-range/dist/styles.css";
// import "react-date-range/dist/theme/default.css";

// const BookingCalendar = () => {
//   const [selectionRange, setSelectionRange] = useState({
//     startDate: new Date(),
//     endDate: new Date(),
//     key: "selection",
//   });

//   const handleSelect = (ranges) => {
//     setSelectionRange(ranges.selection);
//   };

//   const handleClear = () => {
//     setSelectionRange({
//       startDate: new Date(),
//       endDate: new Date(),
//       key: "selection",
//     });
//   };

//   return (
//     <div className="p-4 bg-white rounded-2xl shadow-md max-w-3xl mx-auto">
//       <h2 className="text-2xl font-semibold mb-2 text-center">
//         7 Nights in Johannesburg
//       </h2>

//       <span className="block text-center text-sm text-gray-600 mb-4">
//         {`Selected: ${format(
//           selectionRange.startDate,
//           "dd MMM yyyy"
//         )} - ${format(selectionRange.endDate, "dd MMM yyyy")}`}
//       </span>

//       <div className="flex justify-center overflow-x-auto">
//         <DateRange
//           ranges={[selectionRange]}
//           onChange={handleSelect}
//           moveRangeOnFirstSelection={false}
//           months={2}
//           direction="horizontal"
//           minDate={new Date()}
//         />
//       </div>

//       <div className="flex justify-center mt-4">
//         <button
//           onClick={handleClear}
//           className="bg-red-500 text-white px-4 py-2 rounded-full hover:bg-red-600 transition"
//         >
//           Clear Dates
//         </button>
//       </div>
//     </div>
//   );
// };

// export default BookingCalendar;

// import { useState } from "react";
// import { DateRange } from "react-date-range";
// import { format } from "date-fns";
// import "react-date-range/dist/styles.css";
// import "react-date-range/dist/theme/default.css";

// const BookingCalendar = () => {
//   const [selectionRange, setSelectionRange] = useState({
//     startDate: new Date(),
//     endDate: new Date(),
//     key: "selection",
//   });

//   const handleSelect = (ranges) => {
//     setSelectionRange(ranges.selection);
//   };

//   const handleClear = () => {
//     setSelectionRange({
//       startDate: new Date(),
//       endDate: new Date(),
//       key: "selection",
//     });
//   };

//   return (
//     <div className="p-4 bg-white rounded-2xl shadow-md max-w-3xl mx-auto">
//       <h2 className="text-2xl font-semibold mb-4 text-center">7 Nights in Johannesburg</h2>
//       <span></span>

//       <div className="text-center text-gray-700 mb-4">
//         {`Selected: ${format(
//           selectionRange.startDate,
//           "dd MMM yyyy"
//         )} - ${format(selectionRange.endDate, "dd MMM yyyy")}`}
//       </div>

//       <div className="flex justify-center overflow-x-auto">
//         <DateRange
//           ranges={[selectionRange]}
//           onChange={handleSelect}
//           moveRangeOnFirstSelection={false}
//           months={2}
//           direction="horizontal"
//           minDate={new Date()}
//         />
//       </div>

//       <div className="flex justify-center mt-4">
//         <button
//           onClick={handleClear}
//           className="bg-red-500 text-white border px-4 py-2 rounded-full hover:bg-red-50 transition"
//         >
//           Clear Dates
//         </button>
//       </div>
//     </div>
//   );
// };

// export default BookingCalendar;
