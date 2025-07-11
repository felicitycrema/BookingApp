// // src/pages/IndexPage.jsx
// import React, { useContext } from "react";
// import { UserContext } from "../UserContext";
// import axios from "axios";
// import { Navigate } from "react-router-dom";

// const IndexPage = () => {
//   const { user, setUser, ready } = useContext(UserContext);

//   const handleLogout = async () => {
//     try {
//       await axios.post("/logout");
//       setUser(null);
//     } catch (err) {
//       console.error("Logout error:", err);
//     }
//   };

//   if (!ready) {
//     return <div className="text-center mt-8">Loading...</div>;
//   }

//   if (!user) {
//     return <Navigate to="/login" />;
//   }

//   return (
//     <div className="p-4 max-w-2xl mx-auto">
//       <h1 className="text-2xl font-bold mb-4">Welcome, {user.name}!</h1>
//       <p>Email: {user.email}</p>

//       <button
//         onClick={handleLogout}
//         className="mt-4 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-full"
//       >
//         Logout
//       </button>
//     </div>
//   );
// };

// export default IndexPage;

// import { useEffect, useState } from "react";

// const IndexPage = () => {
//   const [places, setPlaces] = useState([]);

//   useEffect(() => {
//     fetch("/places")
//       .then((response) => {
//         if (!response.ok) {
//           throw new Error("Failed to fetch places");
//         }
//         return response.json();
//       })
//       .then((data) => {
//         setPlaces(data);
//       })
//       .catch((error) => {
//         console.error("Error fetching places:", error);
//       });
//   }, []);

//   return (
//     <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
//       {places.length > 0 &&
//         places.map((place) => (
//           <div key={place._id || place.id} className="border rounded p-2">
//             {place.photos?.[0] && (
//               <img
//                 src={`http://localhost:4000/upload/${place.photos[0]}`}
//                 alt={place.title || "Place"}
//                 className="w-full h-48 object-cover rounded"
//               />
//             )}
//             <h2 className="mt-2 font-semibold">{place.title}</h2>
//           </div>
//         ))}
//     </div>
//   );
// };

// export default IndexPage;
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const IndexPage = () => {
  const [places, setPlaces] = useState([]);

  useEffect(() => {
    axios
      .get("/places")
      .then((res) => {
        setPlaces(res.data);
      })
      .catch((error) => {
        console.error(
          "Error fetching places:",
          error.response?.data || error.message
        );
      });
  }, []);

  return (
    <div className="px-2 md:px-4 lg:px-6 mt-8">
      <div className="grid gap-x-4 gap-y-6 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {places.length > 0 &&
          places.map((place) => (
            <Link
              to={`/place/${place._id}`}
              key={place._id || place.id}
              className="cursor-pointer"
            >
              <div className="bg-gray-500 mb-2 rounded-2xl flex">
                {place.photos?.[0] && (
                  <img
                    src={`http://localhost:4000/upload/${place.photos[0]}`}
                    alt={place.title || "Place"}
                    className="object-cover aspect-square rounded-2xl w-full"
                  />
                )}
              </div>
              <h2 className="font-bold text-md">{place.address}</h2>
              <h3 className="text-sm text-gray-500">{place.title}</h3>
              <div className="mt-1">
                <span className="font-bold">${place.price} per night</span>
              </div>
            </Link>
          ))}
      </div>
    </div>
  );
};

export default IndexPage;



// import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import axios from "axios";

// const IndexPage = () => {
//   const [places, setPlaces] = useState([]);

//   useEffect(() => {
//     axios
//       .get("/places")
//       .then((res) => {
//         setPlaces(res.data);
//       })
//       .catch((error) => {
//         console.error(
//           "Error fetching places:",
//           error.response?.data || error.message
//         );
//       });
//   }, []);

//   return (
//     <div className="mt-8 grid gap-x-6 gap-y-8 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
//       {places.length > 0 &&
//         places.map((place) => {
//           const firstPhoto =
//             place.photos?.general?.[0] || place.photos?.sleeping?.[0] || null;

//           return (
//             <Link
//               to={`/place/${place._id}`}
//               key={place._id}
//               className="cursor-pointer"
//             >
//               <div className="bg-gray-500 mb-2 rounded-2xl overflow-hidden">
//                 {firstPhoto ? (
//                   <img
//                     src={`http://localhost:4000/upload/${firstPhoto}`}
//                     alt={place.title || "Place"}
//                     className="object-cover aspect-square w-full"
//                   />
//                 ) : (
//                   <div className="aspect-square flex items-center justify-center text-white bg-gray-400">
//                     No photo
//                   </div>
//                 )}
//               </div>
//               <h2 className="font-bold text-md">{place.address}</h2>
//               <h3 className="text-sm text-gray-500">{place.title}</h3>
//               <div className="mt-1">
//                 <span className="font-bold">${place.price} per night</span>
//               </div>
//             </Link>
//           );
//         })}
//     </div>
//   );
// };

// export default IndexPage;


// import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import axios from "axios";

// const IndexPage = () => {
//   const [places, setPlaces] = useState([]);

//   useEffect(() => {
//     axios
//       .get("/places")
//       .then((res) => {
//         setPlaces(res.data);
//       })
//       .catch((error) => {
//         console.error(
//           "Error fetching places:",
//           error.response?.data || error.message
//         );
//       });
//   }, []);

//   return (
//     <div className="mt-8 grid gap-x-6 gap-y-8 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
//       {places.length > 0 &&
//         places.map((place) => {
//           const firstGeneralPhoto = place.photos?.general?.[0] || null;

//           return (
//             <Link
//               to={`/place/${place._id}`}
//               key={place._id}
//               className="cursor-pointer"
//             >
//               <div className="bg-gray-500 mb-2 rounded-2xl overflow-hidden">
//                 {firstGeneralPhoto ? (
//                   <img
//                     src={`http://localhost:4000/upload/${firstGeneralPhoto}`}
//                     alt={place.title || "Place"}
//                     className="object-cover aspect-square w-full"
//                   />
//                 ) : (
//                   <div className="aspect-square flex items-center justify-center text-white bg-gray-400">
//                     No photo
//                   </div>
//                 )}
//               </div>
//               <h2 className="font-bold text-md">{place.address}</h2>
//               <h3 className="text-sm text-gray-500">{place.title}</h3>
//               <div className="mt-1">
//                 <span className="font-bold">${place.price} per night</span>
//               </div>
//             </Link>
//           );
//         })}
//     </div>
//   );
// };

// export default IndexPage;
