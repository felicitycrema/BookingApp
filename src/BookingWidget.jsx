// import { useEffect, useContext, useState } from "react";
// import { differenceInCalendarDays } from "date-fns";
// import axios from "axios";
// import { Navigate } from "react-router-dom";
// import { UserContext } from "./UserContext";

// const BookingWidget = ({ place }) => {
//   const [checkIn, setCheckIn] = useState("");
//   const [checkOut, setCheckOut] = useState("");
//   const [numberOfGuests, setNumberOfGuests] = useState(1);
//   const [name, setName] = useState("");
//   const [phone, setPhone] = useState("");
//   const [redirect, setRedirect] = useState("");
//   const { user } = useContext(UserContext);

//   useEffect(() => {
//     if (user) {
//       setName(user.name);
// }
//   }, [user]);

//   // let numberOfNights = 0;
//   // if (checkIn && checkOut) {
//   //   numberOfNights = differenceInCalendarDays(
//   //     new Date(checkOut),
//   //     new Date(checkIn)
//   //   );
//   // }

//   let numberOfNights =
//     checkIn && checkOut
//       ? differenceInCalendarDays(new Date(checkOut), new Date(checkIn))
//       : 0;

//   // async function bookThisPlace() {    
//   //   const response = await axios.post('/bookings',  {
//   //       checkIn, checkOut, numberOfGuests, name, phone,
//   //       place: place.id,
//   //       price: numberOfNights * place.price,
//   //     });  
//   //   const bookingId = response.data._id;
//   //   setRedirect(`/account/bookings/${bookingId}`);
//   // }
 
//   // if (redirect) {
//   //   return <Navigate to={redirect} />
//   // }
  
//   async function bookThisPlace() {
//     try {
//       const response = await axios.post("/bookings", {
//         checkIn,
//         checkOut,
//         numberOfGuests,
//         name,
//         phone,
//         place: place._id, // make sure you're using _id, not id
//         price: numberOfNights * place.price,
//       });
//       const bookingId = response.data._id;
//       setRedirect(`/account/bookings/${bookingId}`);
//     } catch (error) {
//       console.error("Booking failed:", error.response?.data || error.message);
//       alert("Booking failed. Please check your input or login again.");
//     }
//   }
  

//   return (
//     <div className="bg-gray-300 shadow-md rounded-2xl p-4 space-y-6">
//       <div className="text-center text-2xl">Price: ${place.price} / night</div>

//       {/* Form Fields */}
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-4 bg-gray-200 p-4 rounded-xl">
//         <div>
//           <label className="block text-sm font-medium text-gray-700 mb-2">
//             Check-in
//           </label>
//           <input
//             type="date"
//             value={checkIn}
//             onChange={(e) => setCheckIn(e.target.value)}
//             className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
//           />
//         </div>
//         <div>
//           <label className="block text-sm font-medium text-gray-700 mb-2">
//             Check-out
//           </label>
//           <input
//             type="date"
//             value={checkOut}
//             onChange={(e) => setCheckOut(e.target.value)}
//             className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
//           />
//         </div>
//         <div>
//           <label className="block text-sm font-medium text-gray-700 mb-2">
//             Number of guests
//           </label>
//           <input
//             type="number"
//             min={1}
//             value={numberOfGuests}
//             onChange={(e) => setNumberOfGuests(e.target.value)}
//             className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
//           />
//         </div>
//       </div>

//       {/* Extra Fields for Booking Info */}
//       {numberOfNights > 0 && (
//         <div className="bg-white p-4 rounded-xl space-y-4">
//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-2">
//               Your full name:
//             </label>
//             <input
//               type="text"
//               value={name}
//               onChange={(e) => setName(e.target.value)}
//               className="w-full border border-gray-300 rounded-lg px-4 py-2"
//             />
//           </div>
//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-2">
//               Your mobile number:
//             </label>
//             <input
//               type="tel"
//               value={phone}
//               onChange={(e) => setPhone(e.target.value)}
//               className="w-full border border-gray-300 rounded-lg px-4 py-2"
//             />
//           </div>
//         </div>
//       )}

//       {/* Booking Button */}
//       {/* <button className="w-full bg-red-600 text-white text-lg font-semibold py-3 rounded-xl hover:bg-red-700 transition mt-4">
//         Book this place
//         {numberOfNights > 0 && (
//           <span className="block text-sm font-normal mt-1">
//             Total: ${numberOfNights * place.price} for {numberOfNights} night(s)
//           </span>
//         )}
//       </button> */}
//       <button
//         onClick={bookThisPlace}
//         className="w-full bg-red-600 text-white text-lg font-semibold py-3 rounded-xl hover:bg-red-700 transition mt-4"
//       >
//         Book this place
//         {numberOfNights > 0 && (
//           <span className="block text-sm font-normal mt-1">
//             Total: ${numberOfNights * place.price} for {numberOfNights} night(s)
//           </span>
//         )}
//       </button>
//     </div>
//   );
// };

// export default BookingWidget;
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

  async function bookThisPlace() {
    try {
      const response = await axios.post("/bookings", {
        checkIn,
        checkOut,
        numberOfGuests,
        name,
        phone,
        place: place._id, // Make sure you use `_id`
        price: numberOfNights * place.price,
      });
      const bookingId = response.data._id;
      setRedirect(`/account/bookings/${bookingId}`);
    } catch (error) {
      console.error("Booking failed:", error.response?.data || error.message);
      alert("Booking failed. Please check your input or login again.");
    }
  }

  // Redirect if booking was successful
  if (redirect) {
    return <Navigate to={redirect} />;
  }

  return (
    <div className="bg-gray-300 shadow-md rounded-2xl p-4 space-y-6">
      <div className="text-center text-2xl">Price: ${place.price} / night</div>

      {/* Form Fields */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 bg-gray-200 p-4 rounded-xl">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Check-in
          </label>
          <input
            type="date"
            value={checkIn}
            onChange={(e) => setCheckIn(e.target.value)}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
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
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Number of guests
          </label>
          <input
            type="number"
            min={1}
            value={numberOfGuests}
            onChange={(e) => setNumberOfGuests(e.target.value)}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>

      {/* Extra Fields for Booking Info */}
      {numberOfNights > 0 && (
        <div className="bg-white p-4 rounded-xl space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Your full name:
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-4 py-2"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Your mobile number:
            </label>
            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-4 py-2"
            />
          </div>
        </div>
      )}

      {/* Booking Button */}
      <button
        onClick={bookThisPlace}
        className="w-full bg-red-600 text-white text-lg font-semibold py-3 rounded-xl hover:bg-red-700 transition mt-4"
      >
        Book this place
        {numberOfNights > 0 && (
          <span className="block text-sm font-normal mt-1">
            Total: ${numberOfNights * place.price} for {numberOfNights} night
            {numberOfNights > 1 ? "s" : ""}
          </span>
        )}
      </button>
    </div>
  );
};

export default BookingWidget;
