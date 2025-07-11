// import React, { useState } from "react";

// const PlaceGallery = ({ place }) => {
//   const [showAllPhotosGroup, setShowAllPhotosGroup] = useState(null);
//   if (!place?.photos) return null;

//   const photoGroups = Object.entries(place.photos || {});
//   const closeModal = () => setShowAllPhotosGroup(null);

//   return (
//     <>
//       {photoGroups.map(([groupName, photos]) => {
//         const validPhotos = Array.isArray(photos) ? photos : [];

//         return (
//           <section key={groupName} className="mb-10 max-w-6xl mx-auto">
//             <h3 className="text-xl font-semibold capitalize mb-4">
//               {groupName} photos
//             </h3>

//             <div className="grid grid-cols-3 gap-2 h-[400px] rounded-2xl overflow-hidden shadow-lg relative">
//               {/* First large photo */}
//               {validPhotos[0] && (
//                 <div className="col-span-2 row-span-2 relative">
//                   <img
//                     src={`http://localhost:4000/upload/${validPhotos[0]}`}
//                     alt={`${groupName} photo 1`}
//                     className="w-full h-full object-cover rounded-tl-2xl rounded-bl-2xl"
//                   />
//                 </div>
//               )}

//               {/* Next two preview photos */}
//               {validPhotos.slice(1, 3).map((photo, idx) => {
//                 const roundedClass =
//                   idx === 0 ? "rounded-tr-2xl" : "rounded-br-2xl";
//                 return (
//                   <div key={idx} className="h-[248px] overflow-hidden">
//                     <img
//                       src={`http://localhost:4000/upload/${photo}`}
//                       alt={`${groupName} photo ${idx + 2}`}
//                       className={`w-full h-full object-cover ${roundedClass}`}
//                     />
//                   </div>
//                 );
//               })}

//               {/* "View More" button */}
//               {validPhotos.length > 3 && (
//                 <button
//                   onClick={() => setShowAllPhotosGroup(groupName)}
//                   className="absolute bottom-4 right-4 bg-white bg-opacity-80 hover:bg-opacity-100 text-black px-4 py-2 rounded-full shadow"
//                 >
//                   View more
//                 </button>
//               )}
//             </div>

//             {/* Fullscreen modal */}
//             {showAllPhotosGroup === groupName && (
//               <div className="fixed inset-0 bg-black bg-opacity-90 text-white p-6 z-50 overflow-y-auto">
//                 <div className="max-w-6xl mx-auto">
//                   <h2 className="text-2xl font-semibold mb-4">
//                     {place.title} - {groupName} photos
//                   </h2>
//                   <button
//                     onClick={closeModal}
//                     className="fixed right-6 top-6 bg-white text-black px-4 py-2 rounded-full shadow hover:bg-gray-200"
//                   >
//                     Close
//                   </button>
//                   <div className="grid gap-4 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 mt-8">
//                     {validPhotos.map((photo, index) => (
//                       <img
//                         key={index}
//                         src={`http://localhost:4000/upload/${photo}`}
//                         alt={`${groupName} photo ${index + 1}`}
//                         className="w-full max-h-[500px] object-contain rounded-lg bg-white"
//                       />
//                     ))}
//                   </div>
//                 </div>
//               </div>
//             )}
//           </section>
//         );
//       })}
//     </>
//   );
// };

// export default PlaceGallery;

// import React, { useState } from "react";

// const PlaceGallery = ({ place }) => {
//   const [showAllPhotosGroup, setShowAllPhotosGroup] = useState(null);
//   // null or group name like 'general' or 'sleeping'

//   if (!place?.photos) return null;

//   // Get photo groups as entries [groupName, photos[]]
//   const photoGroups = Object.entries(place.photos);

//   const closeModal = () => setShowAllPhotosGroup(null);

//   return (
//     <>
//       {photoGroups.map(([groupName, photos]) => (
//         <section key={groupName} className="mb-10 max-w-6xl mx-auto">
//           <h3 className="text-xl font-semibold capitalize mb-4">
//             {groupName} photos
//           </h3>

//           {/* Grid preview */}
//           <div className="grid grid-cols-3 gap-2 h-[400px] rounded-2xl overflow-hidden shadow-lg relative">
//             {/* Large first photo */}
//             {photos[0] && (
//               <div className="col-span-2 row-span-2 relative">
//                 <img
//                   src={`http://localhost:4000/upload/${photos[0]}`}
//                   alt={`${groupName} photo 1`}
//                   className="w-full h-full object-cover rounded-tl-2xl rounded-bl-2xl"
//                 />
//               </div>
//             )}

//             {/* Next two photos */}
//             {photos.slice(1, 3).map((photo, idx) => {
//               const roundedClass =
//                 idx === 0 ? "rounded-tr-2xl" : "rounded-br-2xl";
//               return (
//                 <div key={idx} className="h-[248px] overflow-hidden">
//                   <img
//                     src={`http://localhost:4000/upload/${photo}`}
//                     alt={`${groupName} photo ${idx + 2}`}
//                     className={`w-full h-full object-cover ${roundedClass}`}
//                   />
//                 </div>
//               );
//             })}

//             {/* View More button if more than 3 photos */}
//             {photos.length > 3 && (
//               <button
//                 onClick={() => setShowAllPhotosGroup(groupName)}
//                 className="absolute bottom-4 right-4 bg-white bg-opacity-80 hover:bg-opacity-100 text-black px-4 py-2 rounded-full shadow"
//               >
//                 View more
//               </button>
//             )}
//           </div>

//           {/* Modal for all photos of this group */}
//           {showAllPhotosGroup === groupName && (
//             <div className="fixed inset-0 bg-black bg-opacity-90 text-white p-6 z-50 overflow-y-auto">
//               <div className="max-w-6xl mx-auto">
//                 <h2 className="text-2xl font-semibold mb-4">
//                   {place.title} - {groupName} photos
//                 </h2>
//                 <button
//                   onClick={closeModal}
//                   className="fixed right-6 top-6 bg-white text-black px-4 py-2 rounded-full shadow hover:bg-gray-200"
//                 >
//                   Close
//                 </button>
//                 <div className="grid gap-4 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 mt-8">
//                   {photos.map((photo, index) => (
//                     <img
//                       key={index}
//                       src={`http://localhost:4000/upload/${photo}`}
//                       alt={`${groupName} photo ${index + 1}`}
//                       className="w-full max-h-[500px] object-contain rounded-lg bg-white"
//                     />
//                   ))}
//                 </div>
//               </div>
//             </div>
//           )}
//         </section>
//       ))}
//     </>
//   );
// };

// export default PlaceGallery;

// import React, { useState } from "react";

// const PlaceGallery = ({ place }) => {
//   const [showAllPhotos, setShowAllPhotos] = useState(false);

//   if (!place?.photos) return null;

//   const allPhotos = Object.values(place.photos).flat();

//   if (showAllPhotos) {
//     return (
//       <div className="fixed inset-0 bg-black text-white min-h-screen p-6 z-50 overflow-y-auto">
//         <div className="max-w-6xl mx-auto">
//           <h2 className="text-2xl font-semibold mb-4">{place.title}</h2>
//           <button
//             onClick={() => setShowAllPhotos(false)}
//             className="fixed right-6 top-6 bg-white text-black px-4 py-2 rounded-full shadow hover:bg-gray-200"
//           >
//             Close
//           </button>
//           <div className="grid gap-4 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 mt-12">
//             {allPhotos.map((photo, index) => (
//               <img
//                 key={index}
//                 src={`http://localhost:4000/upload/${photo}`}
//                 alt={`Photo ${index + 1}`}
//                 className="w-full max-h-[500px] object-contain rounded-lg bg-white"
//               />
//             ))}
//           </div>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="relative max-w-6xl mx-auto">
//       {/* Outer container with rounding and overflow hidden */}
//       <div className="grid grid-cols-3 gap-2 h-[500px] rounded-2xl overflow-hidden shadow-lg">
//         {/* Large photo on left */}
//         {allPhotos[0] && (
//           <div className="col-span-2 row-span-2 relative">
//             <img
//               src={`http://localhost:4000/upload/${allPhotos[0]}`}
//               alt="Main photo"
//               className="w-full h-full object-cover
//                 rounded-tl-2xl rounded-bl-2xl"
//             />
//           </div>
//         )}

//         {/* Top right small photo */}
//         {allPhotos[1] && (
//           <div className="h-[248px] overflow-hidden">
//             <img
//               src={`http://localhost:4000/upload/${allPhotos[1]}`}
//               alt="Photo 2"
//               className="w-full h-full object-cover rounded-tr-2xl"
//             />
//           </div>
//         )}

//         {/* Bottom right small photo */}
//         {allPhotos[2] && (
//           <div className="h-[248px] overflow-hidden">
//             <img
//               src={`http://localhost:4000/upload/${allPhotos[2]}`}
//               alt="Photo 3"
//               className="w-full h-full object-cover rounded-br-2xl"
//             />
//           </div>
//         )}
//       </div>

//       {allPhotos.length > 3 && (
//         <button
//           onClick={() => setShowAllPhotos(true)}
//           className="absolute bottom-4 right-4 bg-white bg-opacity-80 hover:bg-opacity-100 text-black px-4 py-2 rounded-full shadow"
//         >
//           View more
//         </button>
//       )}
//     </div>
//   );
// };

// export default PlaceGallery;

// import React, { useState } from "react";

// const PlaceGallery = ({ place }) => {
//   const [showAllPhotos, setShowAllPhotos] = useState(false);

//   if (!place?.photos) return null;

//   const allPhotos = Object.values(place.photos).flat();

//   if (showAllPhotos) {
//     return (
//       <div className="fixed inset-0 bg-black text-white min-h-screen p-6 z-50 overflow-y-auto">
//         <div className="max-w-6xl mx-auto">
//           <h2 className="text-2xl font-semibold mb-4">{place.title}</h2>
//           <button
//             onClick={() => setShowAllPhotos(false)}
//             className="fixed right-6 top-6 bg-white text-black px-4 py-2 rounded-full shadow hover:bg-gray-200"
//           >
//             Close
//           </button>
//           <div className="grid gap-4 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 mt-12">
//             {allPhotos.map((photo, index) => (
//               <img
//                 key={index}
//                 src={`http://localhost:4000/upload/${photo}`}
//                 alt={`Photo ${index + 1}`}
//                 className="w-full max-h-[500px] object-contain rounded-lg bg-white"
//               />
//             ))}
//           </div>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="relative">
//       <div className="grid grid-cols-3 gap-2 h-[500px]">
//         {/* First photo: large, spans full height on left */}
//         {allPhotos[0] && (
//           <div className="col-span-2 row-span-2 overflow-hidden rounded-xl">
//             <img
//               src={`http://localhost:4000/upload/${allPhotos[0]}`}
//               alt="Main photo"
//               className="w-full h-full object-cover rounded-xl"
//             />
//           </div>
//         )}

//         {/* Next two photos: stacked vertically on the right */}
//         <div className="flex flex-col gap-2">
//           {allPhotos.slice(1, 3).map((photo, index) => (
//             <div
//               key={index}
//               className="h-[248px] overflow-hidden rounded-xl bg-white"
//             >
//               <img
//                 src={`http://localhost:4000/upload/${photo}`}
//                 alt={`Photo ${index + 2}`}
//                 className="w-full h-full object-cover rounded-xl"
//               />
//             </div>
//           ))}
//         </div>
//       </div>

//       {allPhotos.length > 3 && (
//         <button
//           onClick={() => setShowAllPhotos(true)}
//           className="absolute bottom-4 right-4 bg-white bg-opacity-80 hover:bg-opacity-100 text-black px-4 py-2 rounded-full shadow"
//         >
//           View more
//         </button>
//       )}
//     </div>
//   );
// };

// export default PlaceGallery;

// import React, { useState } from "react";

// const PlaceGallery = ({ place }) => {
//   const [showAllPhotos, setShowAllPhotos] = useState(false);

//   if (!place?.photos) return null;

//   const allPhotos = Object.values(place.photos).flat();

//   if (showAllPhotos) {
//     return (
//       <div className="absolute inset-0 bg-black text-white min-h-screen p-8 z-50 overflow-y-auto">
//         <div className="max-w-5xl mx-auto">
//           <h2 className="text-2xl font-semibold mb-4">{place.title}</h2>
//           <button
//             onClick={() => setShowAllPhotos(false)}
//             className="fixed right-10 top-8 bg-white text-black px-4 py-2 rounded-full shadow-lg hover:bg-gray-100"
//           >
//             Close
//           </button>
//           <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mt-8">
//             {allPhotos.map((photo, index) => (
//               <img
//                 key={index}
//                 src={`http://localhost:4000/upload/${photo}`}
//                 alt={`Photo ${index + 1}`}
//                 className="w-full h-64 object-cover rounded-lg"
//               />
//             ))}
//           </div>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="relative">
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
//         {/* First photo (spans two columns) */}
//         {allPhotos[0] && (
//           <div className="md:col-span-2 h-64 overflow-hidden rounded-xl">
//             <img
//               src={`http://localhost:4000/upload/${allPhotos[0]}`}
//               alt="Main photo"
//               className="w-full h-full object-cover"
//             />
//           </div>
//         )}

//         {/* Next two photos */}
//         {allPhotos.slice(1, 3).map((photo, index) => (
//           <div key={index} className="h-48 overflow-hidden rounded-xl">
//             <img
//               src={`http://localhost:4000/upload/${photo}`}
//               alt={`Photo ${index + 2}`}
//               className="w-full h-full object-cover"
//             />
//           </div>
//         ))}
//       </div>

//       {allPhotos.length > 3 && (
//         <button
//           onClick={() => setShowAllPhotos(true)}
//           className="absolute bottom-4 right-4 bg-white bg-opacity-80 hover:bg-opacity-100 text-black px-4 py-2 rounded-full shadow"
//         >
//           View more
//         </button>
//       )}
//     </div>
//   );
// };

// export default PlaceGallery;

// import React from "react";

// const PlaceGallery = ({ place }) => {
//   if (!place?.photos) return null;

//   // Combine all photo groups (general, sleeping, etc.) into one array
//   const allPhotos = Object.values(place.photos).flat();

//   return (
//     <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
//       {allPhotos.slice(0, 5).map((photo, index) => (
//         <div key={index} className="overflow-hidden rounded">
//           <img
//             src={`http://localhost:4000/upload/${photo}`}
//             alt={`Photo ${index + 1}`}
//             className="w-full h-full object-cover"
//           />
//         </div>
//       ))}
//     </div>
//   );
// };

// export default PlaceGallery;

// import { useParams } from "react-router-dom";
// import { useState, useEffect } from "react";
// import axios from "axios";
// import ViewCompactIcon from "@mui/icons-material/ViewCompact";
// import CloseIcon from "@mui/icons-material/Close";

// const PlaceGallery = ({ place: propPlace }) => {
//   const { id } = useParams();
//   const [place, setPlace] = useState(propPlace || null);
//   const [showAllPhotos, setShowAllPhotos] = useState(false);

//   useEffect(() => {
//     if (propPlace) return; // if prop provided, no need to fetch
//     if (!id) return;
//     axios
//       .get(`http://localhost:4000/places/${id}`)
//       .then((res) => setPlace(res.data))
//       .catch((err) => console.error("Error fetching place:", err));
//   }, [id, propPlace]);

//   if (!place) return <div>Loading…</div>;

//   const photosToShow = showAllPhotos ? place.photos : place.photos.slice(0, 6);

//   if (showAllPhotos) {
//     return (
//       <div className="fixed inset-0 bg-black text-white z-50 overflow-y-auto p-8">
//         <button
//           onClick={() => setShowAllPhotos(false)}
//           className="fixed top-4 right-4 bg-gray-100 text-gray-700 p-2 rounded-full shadow mr-6"
//         >
//           <CloseIcon />
//         </button>
//         <h2 className="text-2xl font-bold mb-6">{place.title} – All Photos</h2>
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
//           {place.photos.map((photo, idx) => (
//             <img
//               key={idx}
//               src={`http://localhost:4000/upload/${photo}`}
//               alt={`Photo ${idx + 1}`}
//               className="w-full object-cover rounded-lg"
//             />
//           ))}
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="relative mb-4">
//       <div className="flex flex-col sm:flex-row gap-2 mb-2">
//         {photosToShow[0] && (
//           <img
//             src={`http://localhost:4000/upload/${photosToShow[0]}`}
//             alt="Main"
//             className="w-full sm:w-2/3 h-60 object-cover rounded-lg"
//           />
//         )}
//         <div className="flex flex-col w-full sm:w-1/3 gap-2">
//           {photosToShow.slice(1, 3).map((photo, idx) => (
//             <img
//               key={idx}
//               src={`http://localhost:4000/upload/${photo}`}
//               alt={`Photo ${idx + 2}`}
//               className="h-28 w-full object-cover rounded-lg"
//             />
//           ))}
//         </div>
//       </div>
//       <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
//         {photosToShow.slice(3, 6).map((photo, idx) => (
//           <img
//             key={idx}
//             src={`http://localhost:4000/upload/${photo}`}
//             alt={`Photo ${idx + 4}`}
//             className="h-36 w-full object-cover rounded-lg"
//           />
//         ))}
//       </div>
//       {place.photos?.length > 6 && (
//         <button
//           onClick={() => setShowAllPhotos(true)}
//           className="absolute bottom-2 right-2 z-10 border rounded-2xl text-blue-600 bg-white bg-opacity-90 px-4 py-2 hover:underline shadow-lg flex items-center"
//         >
//           <ViewCompactIcon className="mr-2" />
//           Show all {place.photos.length} photos
//         </button>
//       )}
//     </div>
//   );
// };

// export default PlaceGallery;
// import React from "react";

// const PlaceGallery = ({ place }) => {
//   if (!place) return null;

//   const photos = place.photos || [];
//   const photosToShow = photos.slice(0, 6);

//   return (
//     <div className="grid gap-2 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mt-4">
//       {photosToShow.map((photo, idx) => (
//         <div key={idx} className="overflow-hidden rounded-xl">
//           <img
//             className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
//             src={`http://localhost:4000/upload/${photo}`}
//             alt={`Place photo ${idx + 1}`}
//           />
//         </div>
//       ))}
//     </div>
//   );
// };

// export default PlaceGallery;

// import { useParams } from "react-router-dom";
// import { useState, useEffect } from "react";
// import axios from "axios";
// import ViewCompactIcon from "@mui/icons-material/ViewCompact";
// import CloseIcon from "@mui/icons-material/Close";

// const PlaceGallery = ({ place: propPlace }) => {
//   const { id } = useParams();
//   const [place, setPlace] = useState(propPlace || null);
//   const [showAllPhotos, setShowAllPhotos] = useState(false);

//   useEffect(() => {
//     if (propPlace) return; // Use passed prop if available, no fetch
//     if (!id) return;
//     axios
//       .get(`http://localhost:4000/places/${id}`)
//       .then((res) => setPlace(res.data))
//       .catch((err) => console.error("Error fetching place:", err));
//   }, [id, propPlace]);

//   if (!place) return <div>Loading…</div>;

//   const photosToShow = showAllPhotos ? place.photos : place.photos.slice(0, 6);

//   if (showAllPhotos) {
//     // Fullscreen gallery modal
//     return (
//       <div className="fixed inset-0 bg-black text-white z-50 overflow-y-auto p-8">
//         <button
//           onClick={() => setShowAllPhotos(false)}
//           className="fixed top-4 right-4 bg-gray-100 text-gray-700 p-2 rounded-full shadow"
//           aria-label="Close all photos view"
//         >
//           <CloseIcon />
//         </button>
//         <h2 className="text-2xl font-bold mb-6">{place.title} – All Photos</h2>
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
//           {place.photos.map((photo, idx) => (
//             <img
//               key={idx}
//               src={`http://localhost:4000/upload/${photo}`}
//               alt={`Photo ${idx + 1}`}
//               className="w-full object-cover rounded-lg"
//             />
//           ))}
//         </div>
//       </div>
//     );
//   }

//   // Preview grid layout
//   return (
//     <div className="relative mb-4">
//       <div className="flex flex-col sm:flex-row gap-2 mb-2">
//         {photosToShow[0] && (
//           <img
//             src={`http://localhost:4000/upload/${photosToShow[0]}`}
//             alt="Main"
//             className="w-full sm:w-2/3 h-60 object-cover rounded-lg"
//           />
//         )}
//         <div className="flex flex-col w-full sm:w-1/3 gap-2">
//           {photosToShow.slice(1, 3).map((photo, idx) => (
//             <img
//               key={idx}
//               src={`http://localhost:4000/upload/${photo}`}
//               alt={`Photo ${idx + 2}`}
//               className="h-28 w-full object-cover rounded-lg"
//             />
//           ))}
//         </div>
//       </div>
//       <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
//         {photosToShow.slice(3, 6).map((photo, idx) => (
//           <img
//             key={idx}
//             src={`http://localhost:4000/upload/${photo}`}
//             alt={`Photo ${idx + 4}`}
//             className="h-36 w-full object-cover rounded-lg"
//           />
//         ))}
//       </div>
//       {place.photos?.length > 6 && (
//         <button
//           onClick={() => setShowAllPhotos(true)}
//           className="absolute bottom-2 right-2 z-10 border rounded-2xl text-blue-600 bg-white bg-opacity-90 px-4 py-2 hover:underline shadow-lg flex items-center"
//           aria-label="Show all photos"
//         >
//           <ViewCompactIcon className="mr-2" />
//           Show all {place.photos.length} photos
//         </button>
//       )}
//     </div>
//   );
// };

// export default PlaceGallery;


// const PlaceGallery = ({ place }) => {
//   if (!place) return null;

//   const photos = place.photos || [];
//   const photosToShow = photos.slice(0, 5);

//   return (
//     <div
//       className="grid grid-cols-3 gap-2 mt-4"
//       style={{ gridAutoRows: "150px" }}
//     >
//       {photosToShow.map((photo, index) => {
//         if (index === 0) {
//           // First photo spans 2 rows
//           return (
//             <div
//               key={index}
//               className="overflow-hidden rounded-xl"
//               style={{ gridRow: "span 2", gridColumn: "span 1" }}
//             >
//               <img
//                 className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
//                 src={`http://localhost:4000/upload/${photo}`}
//                 alt={`Place photo ${index + 1}`}
//               />
//             </div>
//           );
//         }
//         return (
//           <div key={index} className="overflow-hidden rounded-xl">
//             <img
//               className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
//               src={`http://localhost:4000/upload/${photo}`}
//               alt={`Place photo ${index + 1}`}
//             />
//           </div>
//         );
//       })}
//     </div>
//   );
// };

// export default PlaceGallery;

import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import ViewCompactIcon from "@mui/icons-material/ViewCompact";
import CloseIcon from "@mui/icons-material/Close";

const PlaceGallery = ({ place: propPlace }) => {
  const { id } = useParams();
  const [place, setPlace] = useState(propPlace || null);
  const [showAllPhotos, setShowAllPhotos] = useState(false);

  useEffect(() => {
    if (propPlace) return;
    if (!id) return;
    axios
      .get(`http://localhost:4000/places/${id}`)
      .then((res) => setPlace(res.data))
      .catch((err) => console.error("Error fetching place:", err));
  }, [id, propPlace]);

  if (!place) return <div>Loading…</div>;

  const photos = place.photos || [];
  const photosToShow = showAllPhotos ? photos : photos.slice(0, 5);

  if (showAllPhotos) {
    return (
      <div className="fixed inset-0 bg-black text-white z-50 overflow-y-auto p-8">
        <button
          onClick={() => setShowAllPhotos(false)}
          className="fixed top-4 right-4 bg-gray-100 text-gray-700 p-2 rounded-full shadow"
          aria-label="Close all photos view"
        >
          <CloseIcon />
        </button>
        <h2 className="text-2xl font-bold mb-6">{place.title} – All Photos</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {photos.map((photo, idx) => (
            <img
              key={idx}
              src={`http://localhost:4000/upload/${photo}`}
              alt={`Photo ${idx + 1}`}
              className="w-full object-cover rounded-lg"
            />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="relative mt-4 rounded-2xl overflow-hidden">
      <div className="grid grid-cols-3 gap-2" style={{ gridAutoRows: "150px" }}>
        {photosToShow.map((photo, index) => (
          <div
            key={index}
            className={`relative overflow-hidden ${
              index === 0 ? "row-span-2" : ""
            }`}
          >
            <img
              src={`http://localhost:4000/upload/${photo}`}
              alt={`Photo ${index + 1}`}
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
            />
            {index === photosToShow.length - 1 && place.photos.length > 5 && (
              <button
                onClick={() => setShowAllPhotos(true)}
                className="absolute bottom-2 right-2 z-10 border rounded-2xl text-blue-600 bg-white bg-opacity-90 px-4 py-2 hover:underline shadow-lg flex items-center"
                aria-label="Show all photos"
              >
                <ViewCompactIcon className="mr-2" />
                Show all {place.photos.length} photos
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default PlaceGallery;
