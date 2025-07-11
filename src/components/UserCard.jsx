import { useContext, useState, useEffect } from "react";
import { UserContext } from "../UserContext";
import { format, isValid } from "date-fns";
import SafetyCheckOutlinedIcon from "@mui/icons-material/SafetyCheckOutlined";
import axios from "axios";

const UserCard = ({ user, placeId, place }) => {
  const { user: currentUser, ready } = useContext(UserContext);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [listingCount, setListingCount] = useState(null);
  const [userPlaces, setUserPlaces] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const listingsPerPage = 4;

  useEffect(() => {
    if (!user?._id) return;

    const fetchListingData = async () => {
      try {
        const [countRes, placesRes] = await Promise.all([
          axios.get(`/api/users/${user._id}/place-count`),
          axios.get(`/api/users/${user._id}/places`),
        ]);
        setListingCount(countRes.data.count);
        setUserPlaces(placesRes.data);
      } catch (err) {
        console.error("Error fetching host data:", err);
      }
    };

    fetchListingData();
  }, [user?._id]);

  if (!ready) return <div>Loading user...</div>;
  if (!user || !place) {
    return (
      <div className="text-gray-500">No user or place data available.</div>
    );
  }

  const handleSend = async () => {
    if (!message.trim()) return;

    try {
      await axios.post(
        "/api/messages",
        {
          recipientId: user._id,
          message,
          placeId,
        },
        {
          withCredentials: true,
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      setMessage("");
      setIsModalOpen(false);
      alert("Message sent successfully!");
    } catch (error) {
      console.error(
        "Error sending message:",
        error.response?.data || error.message
      );
      alert("Failed to send message. Please try again.");
    }
  };

  const formattedJoinDate = isValid(new Date(user.createdAt))
    ? format(new Date(user.createdAt), "MMMM dd, yyyy")
    : null;

  const formattedPlaceDate = isValid(new Date(place.createdAt))
    ? format(new Date(place.createdAt), "MMMM dd, yyyy")
    : null;

  const filteredPlaces = userPlaces.filter((p) => p._id !== place._id);
  const totalPages = Math.ceil(filteredPlaces.length / listingsPerPage);
  const paginatedPlaces = filteredPlaces.slice(
    (currentPage - 1) * listingsPerPage,
    currentPage * listingsPerPage
  );

  return (
    <div className="w-full">
      <div className="w-full bg-white shadow-lg rounded-xl p-6 space-y-4 text-left">
        {/* Avatar & Info Row */}
        <div className="flex items-center gap-4">
          {user.avatarUrl ? (
            <img
              src={user.avatarUrl}
              alt={`${user.name}'s avatar`}
              className="w-24 h-24 rounded-full object-cover"
            />
          ) : (
            <div className="w-24 h-24 rounded-full bg-gray-300 flex items-center justify-center text-2xl font-bold text-white">
              {user.name?.[0] || "?"}
            </div>
          )}

          <div>
            <h2 className="text-xl font-semibold">Hosted by {user.name}</h2>
            <span className="text-sm text-gray-500">
              {formattedJoinDate
                ? `Joined on ${formattedJoinDate}`
                : "Join date unavailable"}
            </span>
            {place.price && (
              <p className="text-lg font-semibold text-green-700 mt-1">
                ${place.price} / night
              </p>
            )}
          </div>
        </div>

        {/* Status Badges */}
        <div className="flex gap-4 text-sm text-gray-600">
          <span>🌟 Reviews</span>
          <span>✔️ Verified</span>
          <span>🏅 Superhost</span>
        </div>

        {/* Superhost Section */}
        <div>
          <h3 className="text-lg font-semibold">{user.name} is a Superhost</h3>
          <p className="text-gray-600 text-sm mt-1">
            Superhosts are experienced, highly rated hosts who are <br />
            committed to providing great stays for guests.
          </p>
        </div>

        {/* Ownership Info */}
        <div className="text-sm text-gray-600 space-y-1">
          {place.owner === user._id && (
            <p>✅ This host is the original creator of this listing.</p>
          )}
          {formattedPlaceDate && (
            <p>📅 Listing created on {formattedPlaceDate}</p>
          )}
          <p>
            📍 Total listings by this host:{" "}
            {listingCount !== null ? listingCount : "Loading..."}
          </p>
          <p>📈 Response rate: 100%</p>
          <p>⏱ Response time: within an hour</p>
        </div>

        {/* Contact Button */}
        {currentUser?._id !== user._id && (
          <div className="flex gap-4 mt-4">
            <button
              onClick={() => setIsModalOpen(true)}
              className="bg-blue-500 text-white font-medium px-4 py-2 rounded-lg hover:bg-blue-600 transition"
            >
              Contact Host
            </button>
          </div>
        )}

        {/* Warning Note */}
        <div className="flex gap-2 text-xs text-gray-500 mt-4 items-start">
          <span>
            <SafetyCheckOutlinedIcon />
          </span>
          <span>
            To protect your payment, never transfer <br />
            money or communicate outside of the <br />
            Airbnb website or app.
          </span>
        </div>

        {/* Other Listings */}
        {filteredPlaces.length > 0 && (
          <div className="mt-6">
            <h3 className="text-lg font-semibold mb-2">
              Other listings by {user.name}
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {paginatedPlaces.map((p) => {
                const photoUrl =
                  Array.isArray(p.photos) && typeof p.photos[0] === "string"
                    ? p.photos[0].startsWith("http")
                      ? p.photos[0]
                      : `http://localhost:4000/upload/${p.photos[0]}`
                    : "/placeholder-image.jpg";

                return (
                  <div
                    key={p._id}
                    className="rounded-lg p-3 hover:shadow-md transition"
                  >
                    <img
                      src={photoUrl}
                      alt={p.title}
                      className="w-full h-32 object-cover rounded-md mb-2"
                    />
                    <h4 className="text-sm font-medium truncate">{p.title}</h4>
                    <p className="text-xs text-gray-500 truncate">
                      {p.address}
                    </p>
                    {p.price && (
                      <p className="text-sm font-semibold text-gray-800 mt-1">
                        ${p.price} / night
                      </p>
                    )}
                    <a
                      href={`/place/${p._id}`}
                      className="text-blue-600 text-xs hover:underline mt-1 inline-block"
                    >
                      View listing →
                    </a>
                  </div>
                );
              })}
            </div>

            {/* Pagination Controls */}
            <div className="flex justify-center mt-4 gap-2">
              <button
                onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
                className="px-3 py-1 text-sm bg-gray-200 rounded hover:bg-gray-300 disabled:opacity-50"
              >
                Previous
              </button>
              <span className="px-3 py-1 text-sm text-gray-600">
                Page {currentPage} of {totalPages}
              </span>
              <button
                onClick={() =>
                  setCurrentPage((prev) => Math.min(prev + 1, totalPages))
                }
                disabled={currentPage === totalPages}
                className="px-3 py-1 text-sm bg-gray-200 rounded hover:bg-gray-300 disabled:opacity-50"
              >
                Next
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-xl w-full max-w-md shadow-lg space-y-4">
            <h2 className="text-xl font-semibold">
              Send a message to {user.name}
            </h2>
            <textarea
              className="w-full border rounded-lg p-2 min-h-[100px]"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Type your message..."
            ></textarea>
            <div className="flex justify-end gap-2">
              <button
                onClick={() => setIsModalOpen(false)}
                className="px-4 py-2 rounded-lg border hover:bg-gray-100"
              >
                Cancel
              </button>
              <button
                onClick={handleSend}
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
              >
                Send
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserCard;

// import { useContext, useState, useEffect } from "react";
// import { UserContext } from "../UserContext";
// import { format, isValid } from "date-fns";
// import SafetyCheckOutlinedIcon from "@mui/icons-material/SafetyCheckOutlined";
// import axios from "axios";

// const UserCard = ({ user, placeId, place }) => {
//   const { user: currentUser, ready } = useContext(UserContext);
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [message, setMessage] = useState("");
//   const [listingCount, setListingCount] = useState(null);
//   const [userPlaces, setUserPlaces] = useState([]);
//   const [showAllPlaces, setShowAllPlaces] = useState(false);

//   useEffect(() => {
//     if (!user?._id) return;

//     const fetchListingData = async () => {
//       try {
//         const [countRes, placesRes] = await Promise.all([
//           axios.get(`/api/users/${user._id}/place-count`),
//           axios.get(`/api/users/${user._id}/places`),
//         ]);
//         setListingCount(countRes.data.count);
//         setUserPlaces(placesRes.data);
//       } catch (err) {
//         console.error("Error fetching host data:", err);
//       }
//     };

//     fetchListingData();
//   }, [user?._id]);

//   if (!ready) return <div>Loading user...</div>;
//   if (!user || !place) {
//     return (
//       <div className="text-gray-500">No user or place data available.</div>
//     );
//   }

//   const handleSend = async () => {
//     if (!message.trim()) return;

//     try {
//       await axios.post(
//         "/api/messages",
//         {
//           recipientId: user._id,
//           message,
//           placeId,
//         },
//         {
//           withCredentials: true,
//           headers: {
//             "Content-Type": "application/json",
//           },
//         }
//       );

//       setMessage("");
//       setIsModalOpen(false);
//       alert("Message sent successfully!");
//     } catch (error) {
//       console.error(
//         "Error sending message:",
//         error.response?.data || error.message
//       );
//       alert("Failed to send message. Please try again.");
//     }
//   };

//   const formattedJoinDate = isValid(new Date(user.createdAt))
//     ? format(new Date(user.createdAt), "MMMM dd, yyyy")
//     : null;

//   const formattedPlaceDate = isValid(new Date(place.createdAt))
//     ? format(new Date(place.createdAt), "MMMM dd, yyyy")
//     : null;

//   return (
//     <div className="w-full">
//       <div className="w-full bg-white shadow-lg rounded-xl p-6 space-y-4 text-left">
//         {/* Avatar & Info Row */}
//         <div className="flex items-center gap-4">
//           {user.avatarUrl ? (
//             <img
//               src={user.avatarUrl}
//               alt={`${user.name}'s avatar`}
//               className="w-24 h-24 rounded-full object-cover"
//             />
//           ) : (
//             <div className="w-24 h-24 rounded-full bg-gray-300 flex items-center justify-center text-2xl font-bold text-white">
//               {user.name?.[0] || "?"}
//             </div>
//           )}

//           <div>
//             <h2 className="text-xl font-semibold">Hosted by {user.name}</h2>
//             <span className="text-sm text-gray-500">
//               {formattedJoinDate
//                 ? `Joined on ${formattedJoinDate}`
//                 : "Join date unavailable"}
//             </span>
//             {place.price && (
//               <p className="text-lg font-semibold text-green-700 mt-1">
//                 ${place.price} / night
//               </p>
//             )}
//           </div>
//         </div>

//         {/* Status Badges */}
//         <div className="flex gap-4 text-sm text-gray-600">
//           <span>🌟 Reviews</span>
//           <span>✔️ Verified</span>
//           <span>🏅 Superhost</span>
//         </div>

//         {/* Superhost Section */}
//         <div>
//           <h3 className="text-lg font-semibold">{user.name} is a Superhost</h3>
//           <p className="text-gray-600 text-sm mt-1">
//             Superhosts are experienced, highly rated hosts who are <br />
//             committed to providing great stays for guests.
//           </p>
//         </div>

//         {/* Ownership Info */}
//         <div className="text-sm text-gray-600 space-y-1">
//           {place.owner === user._id && (
//             <p>✅ This host is the original creator of this listing.</p>
//           )}
//           {formattedPlaceDate && (
//             <p>📅 Listing created on {formattedPlaceDate}</p>
//           )}
//           <p>
//             📍 Total listings by this host:{" "}
//             {listingCount !== null ? listingCount : "Loading..."}
//           </p>
//           <p>📈 Response rate: 100%</p>
//           <p>⏱ Response time: within an hour</p>
//         </div>

//         {/* Contact Button */}
//         {currentUser?._id !== user._id && (
//           <div className="flex gap-4 mt-4">
//             <button
//               onClick={() => setIsModalOpen(true)}
//               className="bg-blue-500 text-white font-medium px-4 py-2 rounded-lg hover:bg-blue-600 transition"
//             >
//               Contact Host
//             </button>
//           </div>
//         )}

//         {/* Warning Note */}
//         <div className="flex gap-2 text-xs text-gray-500 mt-4 items-start">
//           <span>
//             <SafetyCheckOutlinedIcon />
//           </span>
//           <span>
//             To protect your payment, never transfer <br />
//             money or communicate outside of the <br />
//             Airbnb website or app.
//           </span>
//         </div>

//         {/* Other Listings */}
//         {userPlaces.length > 1 && (
//           <div className="mt-6">
//             <h3 className="text-lg font-semibold mb-2">
//               Other listings by {user.name}
//             </h3>
//             <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
//               {userPlaces
//                 .filter((p) => p._id !== place._id)
//                 .slice(0, showAllPlaces ? userPlaces.length : 8)
//                 .map((p) => {
//                   const hasPhotoArray = Array.isArray(p.photos);
//                   const firstPhoto = hasPhotoArray ? p.photos[0] : null;
//                   const photoUrl =
//                     firstPhoto && typeof firstPhoto === "string"
//                       ? firstPhoto.startsWith("http")
//                         ? firstPhoto
//                         : `http://localhost:4000/upload/${firstPhoto}`
//                       : "/placeholder-image.jpg";

//                   return (
//                     <div
//                       key={p._id}
//                       className="rounded-lg p-3 hover:shadow-md transition"
//                     >
//                       <img
//                         src={photoUrl}
//                         alt={p.title}
//                         className="w-full h-32 object-cover rounded-md mb-2"
//                       />
//                       <h4 className="text-sm font-medium truncate">
//                         {p.title}
//                       </h4>
//                       <p className="text-xs text-gray-500 truncate">
//                         {p.address}
//                       </p>
//                       {p.price && (
//                         <p className="text-sm font-semibold text-gray-800 mt-1">
//                           ${p.price} / night
//                         </p>
//                       )}
//                       <a
//                         href={`/place/${p._id}`}
//                         className="text-blue-600 text-xs hover:underline mt-1 inline-block"
//                       >
//                         View listing →
//                       </a>
//                     </div>
//                   );
//                 })}
//             </div>

//             {userPlaces.length > 8 && (
//               <div className="text-center mt-4">
//                 <button
//                   onClick={() => setShowAllPlaces(!showAllPlaces)}
//                   className="text-sm text-blue-600 hover:underline"
//                 >
//                   {showAllPlaces ? "Show Less" : "Show All Listings"}
//                 </button>
//               </div>
//             )}
//           </div>
//         )}
//       </div>

//       {/* Modal */}
//       {isModalOpen && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
//           <div className="bg-white p-6 rounded-xl w-full max-w-md shadow-lg space-y-4">
//             <h2 className="text-xl font-semibold">
//               Send a message to {user.name}
//             </h2>
//             <textarea
//               className="w-full border rounded-lg p-2 min-h-[100px]"
//               value={message}
//               onChange={(e) => setMessage(e.target.value)}
//               placeholder="Type your message..."
//             ></textarea>
//             <div className="flex justify-end gap-2">
//               <button
//                 onClick={() => setIsModalOpen(false)}
//                 className="px-4 py-2 rounded-lg border hover:bg-gray-100"
//               >
//                 Cancel
//               </button>
//               <button
//                 onClick={handleSend}
//                 className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
//               >
//                 Send
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default UserCard;
