// import { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import axios from "axios";
// import AddIcon from "@mui/icons-material/Add";
// import AccountNav from "./AccountNav";

// const PlacesPage = () => {
//   const [places, setPlaces] = useState([]);

//   useEffect(() => {
//     axios.get("http://localhost:4000/user-places").then(({ data }) => {
//       setPlaces(data);
//     });
//   }, []);

//   return (
//     <div className="p-4">
//       <AccountNav />
//       <div className="text-center mt-8">
//         List of all added places
//         <br />
//         <Link
//           to={"/account/places/new"}
//           className="inline-flex items-center gap-2 bg-red-300 text-white py-2 px-4 rounded-full"
//         >
//           <AddIcon fontSize="small" />
//           Add new places
//         </Link>
//       </div>

//       <div className="mt-4">
//         {Array.isArray(places) && places.length > 0 ? (
//           places.map((place) => (
//             <Link
//               key={place._id}
//               to={"/account/places/" + place._id}
//               className="cursor-pointer flex gap-4 bg-gray-100 p-4 rounded-2xl"
//             >
//               <div className="flex w-32 h-32 bg-gray-300 grow shrink-0">
//                 {Array.isArray(place.photos) && place.photos.length > 0 && (
//                   <img
//                     className="object-cover"
//                     src={"http://localhost:4000/upload/" + place.photos[0]}
//                     alt={place.title || "Place photo"}
//                   />
//                 )}
//               </div>
//               <div className="grow-0 shrink">
//                 <h2 className="text-xl">{place.city}</h2>
//                 <h2 className="text-xl">{place.title}</h2>
//                 <p className="text-sm mt-2">{place.description}</p>
//               </div>
//             </Link>
//           ))
//         ) : (
//           <p className="text-center text-gray-500 mt-8">No places added yet.</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default PlacesPage;

// import { useState, useEffect } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import axios from "axios";
// import AddIcon from "@mui/icons-material/Add";
// import EditIcon from "@mui/icons-material/Edit";
// import DeleteIcon from "@mui/icons-material/Delete";
// import AccountNav from "./AccountNav";

// const PlacesPage = () => {
//   const [places, setPlaces] = useState([]);
//   const navigate = useNavigate();

//   useEffect(() => {
//     fetchPlaces();
//   }, []);

//   const fetchPlaces = () => {
//     axios
//       .get("http://localhost:4000/user-places")
//       .then(({ data }) => setPlaces(data))
//       .catch((err) => console.error("Error loading places:", err));
//   };

//   const handleDelete = async (placeId) => {
//     const confirm = window.confirm(
//       "Are you sure you want to delete this place?"
//     );
//     if (!confirm) return;

//     try {
//       await axios.delete(`http://localhost:4000/places/${placeId}`, {
//         withCredentials: true,
//       });
//       // Refresh places list
//       setPlaces((prev) => prev.filter((p) => p._id !== placeId));
//     } catch (err) {
//       console.error("Failed to delete:", err);
//     }
//   };

//   return (
//     <div className="p-4">
//       <AccountNav />

//       <div className="text-center mt-8">
//         List of all added places
//         <br />
//         <Link
//           to={"/account/places/new"}
//           className="inline-flex items-center gap-2 bg-red-300 text-white py-2 px-4 rounded-full mt-2"
//         >
//           <AddIcon fontSize="small" />
//           Add new places
//         </Link>
//       </div>

//       <div className="mt-6 space-y-4">
//         {Array.isArray(places) && places.length > 0 ? (
//           places.map((place) => (
//             <div
//               key={place._id}
//               className="flex flex-col md:flex-row gap-4 bg-gray-100 p-4 rounded-2xl"
//             >
//               <div className="w-full md:w-32 h-32 bg-gray-300 flex-shrink-0 rounded-lg overflow-hidden">
//                 {place.photos?.[0] && (
//                   <img
//                     className="object-cover w-full h-full"
//                     src={`http://localhost:4000/upload/${place.photos[0]}`}
//                     alt={place.title || "Place"}
//                   />
//                 )}
//               </div>

//               <div className="flex-1">
//                 <h2 className="text-xl font-semibold">{place.city}</h2>
//                 <h2 className="text-xl">{place.title}</h2>
//                 <p className="text-sm mt-2 text-gray-700">
//                   {place.description}
//                 </p>

//                 <div className="mt-4 flex gap-4">
//                   <Link
//                     to={`/account/places/${place._id}`}
//                     className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
//                   >
//                     <EditIcon fontSize="small" />
//                     Update
//                   </Link>

//                   <button
//                     onClick={() => handleDelete(place._id)}
//                     className="flex items-center gap-2 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
//                   >
//                     <DeleteIcon fontSize="small" />
//                     Delete
//                   </button>
//                 </div>
//               </div>
//             </div>
//           ))
//         ) : (
//           <p className="text-center text-gray-500 mt-8">No places added yet.</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default PlacesPage;

// import { useState, useEffect } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import axios from "axios";
// import AddIcon from "@mui/icons-material/Add";
// import EditIcon from "@mui/icons-material/Edit";
// import DeleteIcon from "@mui/icons-material/Delete";
// import AccountNav from "./AccountNav";

// const PlacesPage = () => {
//   const [places, setPlaces] = useState([]);
//   const navigate = useNavigate();

//   useEffect(() => {
//     fetchPlaces();
//   }, []);

//   const fetchPlaces = () => {
//     axios
//       .get("http://localhost:4000/user-places")
//       .then(({ data }) => setPlaces(data))
//       .catch((err) => console.error("Error loading places:", err));
//   };

//   const handleDelete = async (placeId) => {
//     const confirm = window.confirm(
//       "Are you sure you want to delete this place?"
//     );
//     if (!confirm) return;

//     try {
//       await axios.delete(`http://localhost:4000/places/${placeId}`, {
//         withCredentials: true,
//       });
//       // Refresh places list
//       setPlaces((prev) => prev.filter((p) => p._id !== placeId));
//     } catch (err) {
//       console.error("Failed to delete:", err);
//     }
//   };

//   return (
//     <div className="p-4">
//       <AccountNav />

//       <div className="text-center mt-8">
//         List of all added places
//         <br />
//         <Link
//           to={"/account/places/new"}
//           className="inline-flex items-center gap-2 bg-red-300 text-white py-2 px-4 rounded-full mt-2"
//         >
//           <AddIcon fontSize="small" />
//           Add new places
//         </Link>
//       </div>

//       <div className="mt-6 space-y-4">
//         {Array.isArray(places) && places.length > 0 ? (
//           places.map((place) => (
//             <div
//               key={place._id}
//               className="flex flex-col md:flex-row gap-4 bg-gray-100 p-4 rounded-2xl"
//             >
//               {/* Image + Buttons */}
//               <div className="w-full md:w-32 flex flex-col items-center gap-2">
//                 <div className="w-full h-32 bg-gray-300 rounded-lg overflow-hidden">
//                   {place.photos?.[0] && (
//                     <img
//                       className="object-cover w-full h-full"
//                       src={`http://localhost:4000/upload/${place.photos[0]}`}
//                       alt={place.title || "Place"}
//                     />
//                   )}
//                 </div>

//                 <Link
//                   to={`/account/places/${place._id}`}
//                   className="flex items-center gap-2 px-3 py-1 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition w-full justify-center text-sm"
//                 >
//                   <EditIcon fontSize="small" />
//                   Update
//                 </Link>

//                 <button
//                   onClick={() => handleDelete(place._id)}
//                   className="flex items-center gap-2 px-3 py-1 bg-red-500 text-white rounded-lg hover:bg-red-600 transition w-full justify-center text-sm"
//                 >
//                   <DeleteIcon fontSize="small" />
//                   Delete
//                 </button>
//               </div>

//               {/* Place Details */}
//               <div className="flex-1">
//                 <div className="text-gray-600 text-sm mb-1">
//                   🛏️ {place.rooms || 0} room{place.rooms === 1 ? "" : "s"} · 🛁{" "}
//                   {place.baths || 0} bath{place.baths === 1 ? "" : "s"}
//                 </div>
//                 <h2 className="text-xl font-semibold">{place.city}</h2>
//                 <h2 className="text-xl">{place.title}</h2>
//                 <p className="text-sm mt-2 text-gray-700">
//                   {place.description}
//                 </p>
//                 <h2 className="text-xl">${place.price}</h2>
//               </div>
//             </div>
//           ))
//         ) : (
//           <p className="text-center text-gray-500 mt-8">No places added yet.</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default PlacesPage;

import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import AccountNav from "./AccountNav.jsx";

const PlacesPage = () => {
  const [places, setPlaces] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchPlaces();
  }, []);

  const fetchPlaces = () => {
    axios
      .get("http://localhost:4000/user-places")
      .then(({ data }) => setPlaces(data))
      .catch((err) => console.error("Error loading places:", err));
  };

  const handleDelete = async (placeId) => {
    const confirm = window.confirm(
      "Are you sure you want to delete this place?"
    );
    if (!confirm) return;

    try {
      await axios.delete(`http://localhost:4000/places/${placeId}`, {
        withCredentials: true,
      });
      setPlaces((prev) => prev.filter((p) => p._id !== placeId));
    } catch (err) {
      console.error("Failed to delete:", err);
    }
  };

  return (
    <div className="p-4">
      <AccountNav />

      <div className="text-center mt-8">
        List of all added places
        <br />
        <Link
          to={"/account/places/new"}
          className="inline-flex items-center gap-2 bg-red-300 text-white py-2 px-4 rounded-full mt-2"
        >
          <AddIcon fontSize="small" />
          Add new places
        </Link>
      </div>

      <div className="mt-6 space-y-4">
        {Array.isArray(places) && places.length > 0 ? (
          places.map((place) => (
            <div
              key={place._id}
              className="relative flex flex-col md:flex-row gap-4 bg-gray-100 p-4 rounded-2xl"
            >
              {/* Price in top-right corner */}
              <div className="absolute bottom-1 right-2 text-gray-700 px-3 py-1 rounded-full text-xl font-semibold shadow-md">
                ${place.price}
              </div>

              {/* Image + Buttons */}
              <div className="w-full md:w-32 flex flex-col items-center gap-2">
                <div className="w-full h-32 bg-gray-300 rounded-lg overflow-hidden">
                  {place.photos?.[0] && (
                    <img
                      className="object-cover w-full h-full"
                      src={`http://localhost:4000/upload/${place.photos[0]}`}
                      alt={place.title || "Place"}
                    />
                  )}
                </div>

                <Link
                  to={`/account/places/${place._id}`}
                  className="flex items-center gap-2 px-3 py-1 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition w-full justify-center text-sm"
                >
                  <EditIcon fontSize="small" />
                  Update
                </Link>

                <button
                  onClick={() => handleDelete(place._id)}
                  className="flex items-center gap-2 px-3 py-1 bg-red-500 text-white rounded-lg hover:bg-red-600 transition w-full justify-center text-sm"
                >
                  <DeleteIcon fontSize="small" />
                  Delete
                </button>
              </div>

              {/* Place Details */}
              <div className="flex-1">
                <div className="text-gray-600 text-sm mb-1">
                  🛏️ {place.rooms || 0} room{place.rooms === 1 ? "" : "s"} · 🛁{" "}
                  {place.baths || 0} bath{place.baths === 1 ? "" : "s"}
                </div>
                <h2 className="text-xl font-semibold">{place.city}</h2>
                <h2 className="text-xl">{place.title}</h2>
                <p className="text-sm mt-2 text-gray-700">
                  {place.description}
                </p>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500 mt-8">No places added yet.</p>
        )}
      </div>
    </div>
  );
};

export default PlacesPage;
