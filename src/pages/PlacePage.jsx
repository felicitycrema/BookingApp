// import { useParams } from "react-router-dom";
// import { useState, useEffect } from "react";
// import axios from "axios";

// import BookingWidget from "../BookingWidget";
// import BookingCalendar from "../BookingCalendar";
// import AddressLink from "../AddressLink";
// import Amenities from "../Amenities";
// import SleepGallery from "../components/SleepGallery";

// const PlacePage = () => {
//   const { id } = useParams();
//   const [place, setPlace] = useState(null);
//   const [showAllAmenities, setShowAllAmenities] = useState(false);

//   useEffect(() => {
//     if (!id) return;
//     axios
//       .get(`http://localhost:4000/places/${id}`)
//       .then((res) => setPlace(res.data))
//       .catch((err) => console.error("Error fetching place:", err));
//   }, [id]);

//   if (!place) return <div>Loading…</div>;

//   const photoCategories = Object.entries(place.photos || {});

//   return (
//     <div className="mt-4 bg-gray-100 px-8 py-8 relative max-w-6xl mx-auto">
//       <h1 className="text-3xl font-bold mb-2">{place.title}</h1>
//       <AddressLink>{place.address}</AddressLink>

//       {/* Photos grouped by category */}
//       {photoCategories.map(([category, photos]) => {
//         if (!Array.isArray(photos) || photos.length === 0) return null;

//         return (
//           <section key={category} className="my-8">
//             <h2 className="w-64 text-xl font-semibold capitalize mb-4">
//               {category} photos
//             </h2>
//             <div className="grid grid-cols-3 gap-2 h-[400px] rounded-2xl overflow-hidden shadow-lg">
//               {photos.map((photo, idx) => (
//                 <div
//                   key={idx}
//                   className={`overflow-hidden ${
//                     idx === 0 ? "col-span-2 row-span-2" : ""
//                   }`}
//                 >
//                   <img
//                     src={`http://localhost:4000/upload/${photo}`}
//                     alt={`${category} photo ${idx + 1}`}
//                     className="w-full h-full object-cover rounded-xl"
//                   />
//                 </div>
//               ))}
//             </div>
//           </section>
//         );
//       })}

//       {/* Description + Booking */}
//       <div className="mt-8 mb-4 gap-8 grid grid-cols-1 md:grid-cols-[2fr_1fr]">
//         <div>
//           <div className="my-4">
//             <h2 className="text-2xl font-semibold mb-4">About this place</h2>
//             <p>{place.description}</p>
//           </div>
//           <p>Check-in: {place.checkIn}</p>
//           <p>Check-out: {place.checkOut}</p>
//           <p>Max number of guests: {place.maxGuests}</p>
//           <p>Price: ${place.price}</p>
//         </div>
//         <BookingWidget place={place} className="flex flex-col gap-6" />
//       </div>

//       {/* Extra Info & Amenities */}
//       <div className="bg-white -mx-8 px-8 py-8 rounded-xl shadow mt-8">
//         <h2 className="text-2xl font-semibold mb-4">Extra Info</h2>
//         <div className="mb-4 mt-1 text-sm text-gray-700 leading-5">
//           {place.extraInfo}
//         </div>

//         {place.amenities?.length > 0 && (
//           <div className="mb-6 mt-6 max-w-xl">
//             <h3 className="text-2xl font-semibold mb-4">
//               What this place offers
//             </h3>
//             <Amenities
//               selectedAmenities={place.amenities}
//               showAll={showAllAmenities}
//             />
//             <button
//               onClick={() => setShowAllAmenities(!showAllAmenities)}
//               className="mt-4 bg-red-500 text-white px-6 py-2 rounded-full hover:bg-red-600 transition"
//             >
//               {showAllAmenities ? "Show less" : "Show all amenities"}
//             </button>
//           </div>
//         )}
//       </div>
//       <div>
//         <SleepGallery />
//       </div>

//       {/* Booking Calendar */}
//       <div className="mt-8">
//         <BookingCalendar />
//       </div>
//     </div>
//   );
// };

// export default PlacePage;

// import { useParams } from "react-router-dom";
// import { useState, useEffect } from "react";
// import axios from "axios";
// import BookingWidget from "../BookingWidget";
// import BookingCalendar from "../BookingCalendar";
// import AddressLink from "../AddressLink";
// import Amenities from "../Amenities";

// import PlaceGallery from "./PlaceGallery"; // if you want to keep using it

// const PlacePage = () => {
//   const { id } = useParams();
//   const [place, setPlace] = useState(null);
//   const [showAllAmenities, setShowAllAmenities] = useState(false);

//   useEffect(() => {
//     if (!id) return;
//     axios
//       .get(`http://localhost:4000/places/${id}`)
//       .then((res) => setPlace(res.data))
//       .catch((err) => console.error("Error fetching place:", err));
//   }, [id]);

//   if (!place) return <div>Loading…</div>;

//   // Combine photos by category (for display if you want to show all)
//   const photoCategories = Object.entries(place.photos || {}); // [['general', [...]], ['sleeping', [...]]]

//   return (
//     <div className="mt-4 bg-gray-100 -mx-8 px-8 py-8 relative max-w-6xl">
//       <h1 className="text-3xl font-bold mb-2">{place.title}</h1>
//       <AddressLink>{place.address}</AddressLink>

//       {/* Show photos grouped by category */}
//       {photoCategories.map(([category, photos]) => (
//         <section key={category} className="my-8">
//           <h2 className="text-xl font-semibold capitalize mb-4">
//             {category} photos
//           </h2>
//           <div className="grid grid-cols-3 gap-2 h-[400px] rounded-2xl overflow-hidden shadow-lg">
//             {photos.map((photo, idx) => (
//               <div
//                 key={idx}
//                 className={`overflow-hidden ${
//                   idx === 0 ? "col-span-2 row-span-2" : ""
//                 }`}
//               >
//                 <img
//                   src={`http://localhost:4000/upload/${photo}`}
//                   alt={`${category} photo ${idx + 1}`}
//                   className="w-full h-full object-cover rounded-xl"
//                 />
//               </div>
//             ))}
//           </div>
//         </section>
//       ))}

//       <div className="mt-8 mb-4 gap-8 grid grid-cols-1 md:grid-cols-[2fr_1fr]">
//         <div>
//           <div className="my-4">
//             <h2 className="text-2xl font-semibold mb-4">About this place</h2>
//             <p>{place.description}</p>
//           </div>
//           <p>Check-in: {place.checkIn}</p>
//           <p>Check-out: {place.checkOut}</p>
//           <p>Max number of guests: {place.maxGuests}</p>
//           <p>Price: ${place.price}</p>
//         </div>
//         <BookingWidget place={place} className="flex flex-col gap-6" />
//       </div>

//       <div className="bg-white -mx-8 px-8 py-8 rounded-xl shadow mt-8">
//         <h2 className="text-2xl font-semibold mb-4">Extra Info</h2>
//         <div className="mb-4 mt-1 text-sm text-gray-700 leading-5">
//           {place.extraInfo}
//         </div>

//         {place.amenities?.length > 0 && (
//           <div className="mb-6 mt-6 max-w-xl">
//             <h3 className="text-2xl font-semibold mb-4">
//               What this place offers
//             </h3>
//             <div className="grid grid-cols-2 gap-y-4 gap-x-6 max-w-xl">
//               {(showAllAmenities ? amenitiesList : amenitiesList.slice(0, 10))
//                 .filter((a) => place.amenities.includes(a.name))
//                 .map((a, idx) => (
//                   <div
//                     key={idx}
//                     className="flex items-center gap-3 text-gray-700"
//                   >
//                     <div className="text-red-500">{a.icon}</div>
//                     <span className="text-sm">{a.label}</span>
//                   </div>
//                 ))}
//             </div>
//             <button
//               onClick={() => setShowAllAmenities(!showAllAmenities)}
//               className="mt-4 bg-red-500 text-white px-6 py-2 rounded-full hover:bg-red-600 transition"
//             >
//               {showAllAmenities ? "Show less" : "Show all amenities"}
//             </button>
//           </div>
//         )}
//       </div>

//       <div className="mt-8">
//         <BookingCalendar />
//       </div>
//     </div>
//   );
// };

// export default PlacePage;

// import { useParams } from "react-router-dom";
// import { useState, useEffect } from "react";
// import axios from "axios";
// import BookingWidget from "../BookingWidget";
// import BookingCalendar from "../BookingCalendar";
// import PlaceGallery from "./PlaceGallery";
// import AddressLink from "../AddressLink";

// import WifiIcon from "@mui/icons-material/Wifi";
// import LocalParkingIcon from "@mui/icons-material/LocalParking";
// import LocalLaundryServiceIcon from "@mui/icons-material/LocalLaundryService";
// import PetsIcon from "@mui/icons-material/Pets";
// import RestaurantIcon from "@mui/icons-material/Restaurant";
// import PoolIcon from "@mui/icons-material/Pool";
// import EnergySavingsLeafOutlinedIcon from "@mui/icons-material/EnergySavingsLeafOutlined";
// import AirOutlinedIcon from "@mui/icons-material/AirOutlined";
// import PedalBikeIcon from "@mui/icons-material/PedalBike";
// import VideocamOutlinedIcon from "@mui/icons-material/VideocamOutlined";
// import LiveTvIcon from "@mui/icons-material/LiveTv";
// import MicrowaveOutlinedIcon from "@mui/icons-material/MicrowaveOutlined";
// import KitchenOutlinedIcon from "@mui/icons-material/KitchenOutlined";
// import WaterDropOutlinedIcon from "@mui/icons-material/WaterDropOutlined";
// import LocalLaundryServiceOutlinedIcon from "@mui/icons-material/LocalLaundryServiceOutlined";
// import DryCleaningOutlinedIcon from "@mui/icons-material/DryCleaningOutlined";
// import FitnessCenterOutlinedIcon from "@mui/icons-material/FitnessCenterOutlined";
// import LocalCarWashOutlinedIcon from "@mui/icons-material/LocalCarWashOutlined";

// const amenitiesList = [
//   { label: "Free parking spot", icon: <LocalParkingIcon />, name: "parking" },
//   { label: "WIFI", icon: <WifiIcon />, name: "wifi" },
//   { label: "TV", icon: <LiveTvIcon />, name: "tv" },
//   { label: "Coin Laundry", icon: <LocalLaundryServiceIcon />, name: "laundry" },
//   { label: "Pets allowed", icon: <PetsIcon />, name: "pets" },
//   { label: "Cafeteria", icon: <RestaurantIcon />, name: "cafeteria" },
//   { label: "Pool", icon: <PoolIcon />, name: "pool" },
//   { label: "Security camera", icon: <VideocamOutlinedIcon />, name: "camera" },
//   {
//     label: "Garden view",
//     icon: <EnergySavingsLeafOutlinedIcon />,
//     name: "garden",
//   },
//   { label: "Central aircon", icon: <AirOutlinedIcon />, name: "aircon" },
//   { label: "Bicycles", icon: <PedalBikeIcon />, name: "bicycles" },
//   { label: "Kitchen", icon: <MicrowaveOutlinedIcon />, name: "kitchen" },
//   {
//     label: "Refrigerator",
//     icon: <KitchenOutlinedIcon />,
//     name: "refrigerator",
//   },
//   {
//     label: "Free water - in building",
//     icon: <WaterDropOutlinedIcon />,
//     name: "water",
//   },
//   { label: "Dryer", icon: <LocalLaundryServiceOutlinedIcon />, name: "Dryer" },
//   {
//     label: "Dry Cleaning Service",
//     icon: <DryCleaningOutlinedIcon />,
//     name: "dryclean",
//   },
//   { label: "Fitness Center", icon: <FitnessCenterOutlinedIcon />, name: "fit" },
//   { label: "Car Wash", icon: <LocalCarWashOutlinedIcon />, name: "carwash" },
// ];

// const PlacePage = () => {
//   const { id } = useParams();
//   const [place, setPlace] = useState(null);
//   const [showAllAmenities, setShowAllAmenities] = useState(false);

//   useEffect(() => {
//     if (!id) return;
//     axios
//       .get(`http://localhost:4000/places/${id}`)
//       .then((res) => setPlace(res.data))
//       .catch((err) => console.error("Error fetching place:", err));
//   }, [id]);

//   if (!place) return <div>Loading…</div>;

//   return (
//     <div className="mt-4 bg-gray-100 -mx-8 px-8 py-8 relative">
//       <h1 className="text-3xl font-bold mb-2">{place.title}</h1>
//       <AddressLink>{place.address}</AddressLink>

//       <PlaceGallery place={place} />

//       <div className="mt-8 mb-4 gap-8 grid grid-cols-1 md:grid-cols-[2fr_1fr]">
//         <div>
//           <div className="my-4">
//             <h2 className="text-2xl font-semibold mb-4">About this place</h2>
//             <p>{place.description}</p>
//           </div>
//           Check-in: {place.checkIn}
//           <br />
//           Check-out: {place.checkOut}
//           <br />
//           Max number of guests: {place.maxGuests}
//         </div>
//         <BookingWidget place={place} className="flex flex-col gap-6" />
//       </div>

//       <div className="bg-white -mx-8 px-8 py-8">
//         <h2 className="text-2xl font-semibold mb-4">Extra Info</h2>
//         <div className="mb-4 mt-1 text-sm text-gray-700 leading-4">
//           {place.extraInfo}
//         </div>

//         {place.amenities?.length > 0 && (
//           <div className="mb-6 mt-6">
//             <h3 className="text-2xl font-semibold mb-4">
//               What this place offers
//             </h3>
//             <div className="grid grid-cols-2 gap-y-4 gap-x-6 max-w-xl">
//               {(showAllAmenities ? amenitiesList : amenitiesList.slice(0, 10))
//                 .filter((a) => place.amenities.includes(a.name))
//                 .map((a, idx) => (
//                   <div
//                     key={idx}
//                     className="flex items-center gap-3 text-gray-700"
//                   >
//                     <div className="text-red-500">{a.icon}</div>
//                     <span className="text-sm">{a.label}</span>
//                   </div>
//                 ))}
//             </div>
//             <button
//               onClick={() => setShowAllAmenities(!showAllAmenities)}
//               className="mt-4 bg-red-500 text-white px-6 py-2 rounded-full hover:bg-red-600 transition"
//             >
//               {showAllAmenities ? "Show less" : "Show all amenities"}
//             </button>
//           </div>
//         )}
//       </div>

//       <div className="mt-8">
//         <BookingCalendar />
//       </div>
//     </div>
//   );
// };

// export default PlacePage;

// import { useParams } from "react-router-dom";
// import { useState, useEffect } from "react";
// import axios from "axios";
// import BookingWidget from "../BookingWidget";
// import PlaceGallery from "./PlaceGallery";
// import AddressLink from "../AddressLink";
// // import PlaceMap from "../PlaceMap";

// const PlacePage = () => {
//   const { id } = useParams();
//   const [place, setPlace] = useState(null);
//   const [showAllPhotos, setShowAllPhotos] = useState(false);

//   useEffect(() => {
//     if (!id) return;
//     axios
//       .get(`http://localhost:4000/places/${id}`)
//       .then((res) => setPlace(res.data))
//       .catch((err) => console.error("Error fetching place:", err));
//   }, [id]);

//   if (!place) return <div>Loading…</div>;

//   const photosToShow = showAllPhotos ? place.photos : place.photos.slice(0, 6);

//   return (
//     <div className="mt-4 bg-gray-100 -mx-8 px-8 py-8 relative">
//       <h1 className="text-3xl font-bold mb-2">{place.title}</h1>
//       <AddressLink>{place.address}</AddressLink>
//       {/* <PlaceMap place={place.address} /> */}

//       {/* IMAGE PREVIEW SECTION */}
//       <PlaceGallery place={place} />

//       <div className="mt-8 mb-4 gap-8 grid grid-cols-1 md:grid-cols-[2fr_1fr]">
//         <div>
//           <div className="my-4">
//             <h2 className="text-2xl font-semibold mb-4">About this place</h2>
//             <p>{place.description}</p>
//           </div>
//           Check-in: {place.checkIn}
//           <br />
//           Check-out: {place.checkOut}
//           <br />
//           Max number of guests: {place.maxGuests}
//         </div>
//         <BookingWidget place={place} className="flex flex-col gap-6" />
//       </div>

//       <div className="bg-white -mx-8 px-8 py-8">
//         <h2 className="text-2xl font-semibold mb-4">Extra Info</h2>
//         <div className="mb-4 mt-1 text-sm text-gray-700 leading-4">
//           {place.extraInfo}
//         </div>

//         {/* Amenities Grid */}
//         {place.amenities?.length > 0 && (
//           <div className="mb-6 mt-6">
//             <h3 className="text-2xl font-semibold mb-4">Amenities</h3>
//             <div className="grid grid-cols-2 gap-y-4 gap-x-6 max-w-xl">
//               {amenitiesList
//                 .filter((amenity) => place.amenities.includes(amenity.name))
//                 .slice(0, 10)
//                 .map((amenity, idx) => (
//                   <div
//                     key={idx}
//                     className="flex items-center gap-3 text-gray-700"
//                   >
//                     <div className="text-red-500">{amenity.icon}</div>
//                     <span className="text-sm">{amenity.label}</span>
//                   </div>
//                 ))}
//             </div>
//           </div>
//         )}
//       </div>
//     </div> // ✅ Closing main div
//   );
// };

// export default PlacePage;

// import { useParams } from "react-router-dom";
// import { useState, useEffect } from "react";
// import axios from "axios";
// import BookingWidget from "../BookingWidget";
// import PlaceGallery from "./PlaceGallery";
// import AddressLink from "../AddressLink";
// import PlaceMap from "../PlaceMap";

// const PlacePage = () => {
//   const { id } = useParams();
//   const [place, setPlace] = useState(null);
//   const [showAllPhotos, setShowAllPhotos] = useState(false);

//   useEffect(() => {
//     if (!id) return;
//     axios
//       .get(`http://localhost:4000/places/${id}`)
//       .then((res) => setPlace(res.data))
//       .catch((err) => console.error("Error fetching place:", err));
//   }, [id]);

//   if (!place) return <div>Loading…</div>;

//   const photos = place.photos || [];
//   const photosToShow = showAllPhotos ? photos : photos.slice(0, 6);

//   return (
//     <div className="mt-4 bg-gray-100 -mx-8 px-8 py-8 relative">
//       <h1 className="text-3xl font-bold mb-2">{place.title}</h1>
//       <AddressLink>{place.address}</AddressLink>
//       {/* <PlaceMap place={place.address} /> */}

//       <PlaceGallery place={place} />

//       <div className="mt-8 mb-4 gap-8 grid grid-cols-1 md:grid-cols-[2fr_1fr]">
//         <div>
//           <div className="my-4">
//             <h2 className="text-2xl font-semibold mb-4">About this place</h2>
//             <p>{place.description}</p>
//           </div>
//           <p>Check-in: {place.checkIn}</p>
//           <p>Check-out: {place.checkOut}</p>
//           <p>Max number of guests: {place.maxGuests}</p>
//         </div>
//         <BookingWidget place={place} className="flex flex-col gap-6" />
//       </div>

//       <div className="bg-white -mx-8 px-8 py-8">
//         <h2 className="text-2xl font-semibold mb-4">Extra Info</h2>
//         <div className="mb-4 mt-1 text-sm text-gray-700 leading-4">
//           {place.extraInfo}
//         </div>

//         {/* Amenities Grid */}
//         {place.amenities?.length > 0 && (
//           <div className="mb-6 mt-6">
//             <h3 className="text-2xl font-semibold mb-4">Amenities</h3>
//             <div className="grid grid-cols-2 gap-y-4 gap-x-6 max-w-xl">
//               {place.amenities.map((item, idx) => (
//                 <div
//                   key={idx}
//                   className="flex items-center gap-3 text-gray-700"
//                 >
//                   <div className="text-red-500">✔️</div>
//                   <span className="text-sm">{item}</span>
//                 </div>
//               ))}
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default PlacePage;


import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import BookingWidget from "../BookingWidget";
import PlaceGallery from "./PlaceGallery";
import AddressLink from "../AddressLink";
import BookingCalendar from "../BookingCalendar";
import UserCard from "../components/UserCard";
import Amenities from "../Amenities";
import LocationMap from "../components/LocationMap";
import IosShareIcon from "@mui/icons-material/IosShare";
import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";

const PlacePage = () => {
  const { id } = useParams();
  const [place, setPlace] = useState(null);
  const [reviews, setReviews] = useState([]);
  const [showAllAmenities, setShowAllAmenities] = useState(false);

  useEffect(() => {
    if (!id) return;

    axios
      .get(`http://localhost:4000/places/${id}`)
      .then((res) => setPlace(res.data))
      .catch((err) => console.error("Error fetching place:", err));

    axios
      .get(`http://localhost:4000/places/${id}/reviews`)
      .then((res) => setReviews(res.data))
      .catch((err) => console.error("Error loading reviews:", err));
  }, [id]);

  if (!place) return <div>Loading…</div>;

  const averageRating = (
    reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length || 0
  ).toFixed(1);

  return (
    <div className="mt-4 bg-gray-100 py-8">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <h1 className="text-3xl font-bold mb-2">{place.city}</h1>
        <h1 className="text-3xl font-bold mb-2">{place.title}</h1>

        {/* Address + Share/Save Buttons */}
        <div className="flex justify-between items-center flex-wrap gap-2 mt-2">
          <AddressLink>{place.address}</AddressLink>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1 cursor-pointer">
              <IosShareIcon />
              Share
            </span>
            <span className="flex items-center gap-1 cursor-pointer">
              ♥️ Save
            </span>
          </div>
        </div>

        <PlaceGallery place={place} />

        <div className="mt-8 mb-4 gap-8 grid grid-cols-1 md:grid-cols-[2fr_1fr]">
          <div>
            <div className="my-4">
              <h2 className="text-2xl font-semibold mb-4">About this place</h2>
              <p>{place.description}</p>
            </div>
            <p>Check-in: {place.checkIn}</p>
            <p>Check-out: {place.checkOut}</p>
            <p>Max number of guests: {place.maxGuests}</p>
          </div>
          <BookingWidget place={place} className="flex flex-col gap-6" />
        </div>
      </div>

      {/* Extra Info Section */}
      <div className="bg-white mt-8">
        <div className="max-w-6xl mx-auto px-4 md:px-8 py-8">
          <h2 className="text-2xl font-semibold mb-4">Extra Info</h2>
          <div className="mb-4 mt-1 text-sm text-gray-700 leading-4">
            {place.extraInfo}
          </div>

          {/* Where you will stay */}
          {place.bedroomImage && (
            <div className="my-6">
              <h2 className="text-xl font-semibold mb-2">Where you'll stay</h2>
              <img
                src={
                  place.bedroomImage.startsWith("http")
                    ? place.bedroomImage
                    : `http://localhost:4000/upload/${place.bedroomImage}`
                }
                alt="Bedroom"
                className="w-full rounded-2xl shadow-md object-cover"
              />
            </div>
          )}

          {/* Amenities */}
          {place.amenities?.length > 0 && (
            <div className="mb-6 mt-6">
              <h3 className="text-2xl font-semibold mb-4">Amenities</h3>
              <Amenities
                amenities={
                  showAllAmenities
                    ? place.amenities
                    : place.amenities.slice(0, 10)
                }
              />
              {place.amenities.length > 10 && (
                <button
                  onClick={() => setShowAllAmenities(!showAllAmenities)}
                  className="mt-4 px-4 py-2 bg-red-500 text-white rounded-full hover:bg-red-600 transition"
                >
                  {showAllAmenities ? "Show Less" : "Show All Amenities"}
                </button>
              )}
            </div>
          )}

          {/* Booking Calendar */}
          <div className="mb-6 mt-6">
            <BookingCalendar />
          </div>

          {/* Host Info */}
          <div className="mb-12">
            {place?.owner && (
              <UserCard user={place.owner} placeId={place._id} place={place} />
            )}
          </div>

          {/* Reviews Section */}
          {reviews.length > 0 && (
            <div className="mt-12 border-t pt-10">
              <h2 className="text-2xl font-semibold mb-6">
                ★ {averageRating} · {reviews.length} review
                {reviews.length > 1 ? "s" : ""}
              </h2>

              <div className="grid md:grid-cols-2 gap-6">
                {reviews.map((review) => (
                  <div
                    key={review._id}
                    className="bg-white rounded-2xl shadow p-6 border border-gray-100"
                  >
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center font-bold text-white">
                        {review.user?.name?.[0]?.toUpperCase() || "G"}
                      </div>
                      <div>
                        <div className="font-semibold">
                          {review.user?.name || "Guest"}
                        </div>
                        <div className="text-sm text-gray-500 flex items-center gap-2">
                          <div className="flex text-yellow-500">
                            {Array.from({ length: 5 }, (_, i) =>
                              i < review.rating ? (
                                <StarIcon key={i} fontSize="small" />
                              ) : (
                                <StarBorderIcon key={i} fontSize="small" />
                              )
                            )}
                          </div>
                          <span>
                            {new Date(review.createdAt).toLocaleDateString(
                              "en-US",
                              {
                                month: "short",
                                year: "numeric",
                              }
                            )}
                          </span>
                        </div>
                      </div>
                    </div>
                    <p className="text-gray-700">{review.comment}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Map Section */}
          <div className="rounded-2xl bg-white shadow-md border border-gray-200 max-w-4xl p-6 mt-8 ml-4">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">
              Where you will be
            </h2>

            {place.latitude && place.longitude ? (
              <LocationMap
                latitude={place.latitude}
                longitude={place.longitude}
                title={place.title}
                address={place.address}
                price={place.price}
              />
            ) : (
              <p className="text-sm text-gray-500">
                No location coordinates provided.
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlacePage;




// ...imports remain the same
// import { useParams } from "react-router-dom";
// import { useState, useEffect } from "react";
// import axios from "axios";
// import BookingWidget from "../BookingWidget";
// import PlaceGallery from "./PlaceGallery";
// import AddressLink from "../AddressLink";
// import BookingCalendar from "../BookingCalendar";
// import UserCard from "../components/UserCard";
// import Amenities from "../Amenities";
// import LocationMap from "../components/LocationMap";
// import IosShareIcon from "@mui/icons-material/IosShare";

// const PlacePage = () => {
//   const { id } = useParams();
//   const [place, setPlace] = useState(null);
//   const [reviews, setReviews] = useState([]);
//   const [showAllAmenities, setShowAllAmenities] = useState(false);

//   useEffect(() => {
//     if (!id) return;

//     axios
//       .get(`http://localhost:4000/places/${id}`)
//       .then((res) => setPlace(res.data))
//       .catch((err) => console.error("Error fetching place:", err));

//     axios
//       .get(`http://localhost:4000/places/${id}/reviews`)
//       .then((res) => setReviews(res.data))
//       .catch((err) => console.error("Error loading reviews:", err));
//   }, [id]);

//   if (!place) return <div>Loading…</div>;

//   const averageRating = (
//     reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length || 0
//   ).toFixed(1);

//   return (
//     <div className="mt-4 bg-gray-100 py-8">
//       <div className="max-w-6xl mx-auto px-4 md:px-8">
//         <h1 className="text-3xl font-bold mb-2">{place.city}</h1>
//         <h1 className="text-3xl font-bold mb-2">{place.title}</h1>
//         <div className="flex justify-between items-center flex-wrap gap-2">
//           <AddressLink>{place.address}</AddressLink>

//           <div className="flex items-center gap-4">
//             <span className="flex items-center gap-1 cursor-pointer">
//               <IosShareIcon />
//               Share
//             </span>
//             <span className="flex items-center gap-1 cursor-pointer">
//               ♥️ Save
//             </span>
//           </div>
//         </div>

//         <PlaceGallery place={place} />

//         <div className="mt-8 mb-4 gap-8 grid grid-cols-1 md:grid-cols-[2fr_1fr]">
//           <div>
//             <div className="my-4">
//               <h2 className="text-2xl font-semibold mb-4">About this place</h2>
//               <p>{place.description}</p>
//             </div>
//             <p>Check-in: {place.checkIn}</p>
//             <p>Check-out: {place.checkOut}</p>
//             <p>Max number of guests: {place.maxGuests}</p>
//           </div>
//           <BookingWidget place={place} className="flex flex-col gap-6" />
//         </div>
//       </div>

//       {/* Extra Info Section */}
//       <div className="bg-white mt-8">
//         <div className="max-w-6xl mx-auto px-4 md:px-8 py-8">
//           <h2 className="text-2xl font-semibold mb-4">Extra Info</h2>
//           <div className="mb-4 mt-1 text-sm text-gray-700 leading-4">
//             {place.extraInfo}
//           </div>

//           {/* Where you will stay */}
//           {place.bedroomImage && (
//             <div className="my-6">
//               <h2 className="text-xl font-semibold mb-2">Where you'll stay</h2>
//               <img
//                 src={
//                   place.bedroomImage.startsWith("http")
//                     ? place.bedroomImage
//                     : `http://localhost:4000/upload/${place.bedroomImage}`
//                 }
//                 alt="Bedroom"
//                 className="w-full rounded-2xl shadow-md object-cover"
//               />
//             </div>
//           )}

//           {/* Amenities */}
//           {place.amenities?.length > 0 && (
//             <div className="mb-6 mt-6">
//               <h3 className="text-2xl font-semibold mb-4">Amenities</h3>
//               <Amenities
//                 amenities={
//                   showAllAmenities
//                     ? place.amenities
//                     : place.amenities.slice(0, 10)
//                 }
//               />
//               {place.amenities.length > 10 && (
//                 <button
//                   onClick={() => setShowAllAmenities(!showAllAmenities)}
//                   className="mt-4 px-4 py-2 bg-red-500 text-white rounded-full hover:bg-red-600 transition"
//                 >
//                   {showAllAmenities ? "Show Less" : "Show All Amenities"}
//                 </button>
//               )}
//             </div>
//           )}

//           {/* Booking Calendar */}
//           <div className="mb-6 mt-6">
//             <BookingCalendar />
//           </div>

//           {/* Host Info */}
//           <div className="mb-12">
//             {place?.owner && (
//               <UserCard user={place.owner} placeId={place._id} place={place} />
//             )}
//           </div>

//           {/* Reviews Section */}
//           {reviews.length > 0 && (
//             <div className="mt-12 border-t pt-10">
//               <h2 className="text-2xl font-semibold mb-6">
//                 ★ {averageRating} · {reviews.length} review
//                 {reviews.length > 1 ? "s" : ""}
//               </h2>

//               <div className="grid md:grid-cols-2 gap-6">
//                 {reviews.map((review) => (
//                   <div
//                     key={review._id}
//                     className="bg-white rounded-2xl shadow p-6 border border-gray-100"
//                   >
//                     <div className="flex items-center gap-4 mb-4">
//                       <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center font-bold text-white">
//                         {review.user?.name?.[0]?.toUpperCase() || "G"}
//                       </div>
//                       <div>
//                         <div className="font-semibold">
//                           {review.user?.name || "Guest"}
//                         </div>
//                         <div className="text-sm text-gray-500">
//                           ★ {review.rating} ·{" "}
//                           {new Date(review.createdAt).toLocaleDateString(
//                             "en-US",
//                             {
//                               month: "short",
//                               year: "numeric",
//                             }
//                           )}
//                         </div>
//                       </div>
//                     </div>
//                     <p className="text-gray-700">{review.comment}</p>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           )}

//           {/* Map Section */}
//           <div className="rounded-2xl bg-white shadow-md border border-gray-200 max-w-4xl p-6 mt-8 ml-4">
//             <h2 className="text-2xl font-semibold mb-4 text-gray-800">
//               Where you will be
//             </h2>

//             {place.latitude && place.longitude ? (
//               <LocationMap
//                 latitude={place.latitude}
//                 longitude={place.longitude}
//                 title={place.title}
//                 address={place.address}
//                 price={place.price}
//               />
//             ) : (
//               <p className="text-sm text-gray-500">
//                 No location coordinates provided.
//               </p>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default PlacePage;


// import { useParams } from "react-router-dom";
// import { useState, useEffect } from "react";
// import axios from "axios";
// import BookingWidget from "../BookingWidget";
// import PlaceGallery from "./PlaceGallery";
// import AddressLink from "../AddressLink";
// import BookingCalendar from "../BookingCalendar";
// import UserCard from "../components/UserCard";
// import Amenities from "../Amenities";
// import LocationMap from "../components/LocationMap";
// import IosShareIcon from "@mui/icons-material/IosShare";
// // import RatingsPage from "./RatingsPage";

// const PlacePage = () => {
//   const { id } = useParams();
//   const [place, setPlace] = useState(null);
//   const [reviews, setReviews] = useState([]);
//   const [showAllAmenities, setShowAllAmenities] = useState(false);

//   useEffect(() => {
//     if (!id) return;

//     axios
//       .get(`http://localhost:4000/places/${id}`)
//       .then((res) => setPlace(res.data))
//       .catch((err) => console.error("Error fetching place:", err));

//     axios
//       .get(`http://localhost:4000/places/${id}/reviews`)
//       .then((res) => setReviews(res.data))
//       .catch((err) => console.error("Error loading reviews:", err));
//   }, [id]);

//   if (!place) return <div>Loading…</div>;

//   return (
//     <div className="mt-4 bg-gray-100 py-8">
//       <div className="max-w-6xl mx-auto px-4 md:px-8">
//         <h1 className="text-3xl font-bold mb-2">{place.city}</h1>
//         <h1 className="text-3xl font-bold mb-2">{place.title}</h1>
//         <AddressLink>{place.address}</AddressLink>
//         <div className="flex justify-end items-center gap-4">
//           <span className="flex items-center gap-1">
//             <IosShareIcon />
//             Share
//           </span>
//           <span className="flex items-center gap-1">♥️ Save</span>
//         </div>

//         <PlaceGallery place={place} />

//         <div className="mt-8 mb-4 gap-8 grid grid-cols-1 md:grid-cols-[2fr_1fr]">
//           <div>
//             <div className="my-4">
//               <h2 className="text-2xl font-semibold mb-4">About this place</h2>
//               <p>{place.description}</p>
//             </div>
//             <p>Check-in: {place.checkIn}</p>
//             <p>Check-out: {place.checkOut}</p>
//             <p>Max number of guests: {place.maxGuests}</p>
//           </div>
//           <BookingWidget place={place} className="flex flex-col gap-6" />
//         </div>
//       </div>

//       {/* Extra Info */}
//       <div className="bg-white mt-8">
//         <div className="max-w-6xl mx-auto px-4 md:px-8 py-8">
//           <h2 className="text-2xl font-semibold mb-4">Extra Info</h2>
//           <div className="mb-4 mt-1 text-sm text-gray-700 leading-4">
//             {place.extraInfo}
//           </div>

//           {/* Where you will stay */}
//           {place.bedroomImage && (
//             <div className="my-6">
//               <h2 className="text-xl font-semibold mb-2">Where you'll stay</h2>
//               <img
//                 src={
//                   place.bedroomImage.startsWith("http")
//                     ? place.bedroomImage
//                     : `http://localhost:4000/upload/${place.bedroomImage}`
//                 }
//                 alt="Bedroom"
//                 className="w-full rounded-2xl shadow-md object-cover"
//               />
//             </div>
//           )}

//           {/* Amenities */}
//           {place.amenities?.length > 0 && (
//             <div className="mb-6 mt-6">
//               <h3 className="text-2xl font-semibold mb-4">Amenities</h3>
//               <Amenities
//                 amenities={
//                   showAllAmenities
//                     ? place.amenities
//                     : place.amenities.slice(0, 10)
//                 }
//               />
//               {place.amenities.length > 10 && (
//                 <button
//                   onClick={() => setShowAllAmenities(!showAllAmenities)}
//                   className="mt-4 px-4 py-2 bg-red-500 text-white rounded-full hover:bg-red-600 transition"
//                 >
//                   {showAllAmenities ? "Show Less" : "Show All Amenities"}
//                 </button>
//               )}
//             </div>
//           )}

//           {/* Booking caledar */}
//           <div className="mb-6 mt-6">
//             <BookingCalendar />
//           </div>
//           {/* <RatingsPage /> */}

//           {/* Place Thumbnail + Host Info */}
//           <div className="mb-12">
//             {place?.owner && (
//               <UserCard user={place.owner} placeId={place._id} place={place} />
//             )}
//           </div>

//           {/* Reviews Section */}
//           {reviews.length > 0 && (
//             <div className="mt-12 border-t pt-10">
//               <h2 className="text-2xl font-semibold mb-6">
//                 ★{" "}
//                 {(
//                   reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length
//                 ).toFixed(1)}{" "}
//                 · {reviews.length} review{reviews.length > 1 ? "s" : ""}
//               </h2>

//               <div className="grid md:grid-cols-2 gap-6">
//                 {reviews.map((review) => (
//                   <div
//                     key={review._id}
//                     className="bg-white rounded-2xl shadow p-6 border border-gray-100"
//                   >
//                     <div className="flex items-center gap-4 mb-4">
//                       <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center font-bold text-white">
//                         {review.user?.name?.[0]?.toUpperCase() || "G"}
//                       </div>
//                       <div>
//                         <div className="font-semibold">
//                           {review.user?.name || "Guest"}
//                         </div>
//                         <div className="text-sm text-gray-500">
//                           ★ {review.rating} ·{" "}
//                           {new Date(review.createdAt).toLocaleDateString(
//                             "en-US",
//                             {
//                               month: "short",
//                               year: "numeric",
//                             }
//                           )}
//                         </div>
//                       </div>
//                     </div>
//                     <p className="text-gray-700">{review.comment}</p>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           )}

//           <div className="rounded-2xl bg-white shadow-md border border-gray-200 max-w-4xl p-6 mt-8 ml-4">
//             <h2 className="text-2xl font-semibold mb-4 text-gray-800">
//               Where you will be
//             </h2>

//             {place.latitude && place.longitude ? (
//               <LocationMap
//                 latitude={place.latitude}
//                 longitude={place.longitude}
//                 title={place.title}
//                 address={place.address}
//                 price={place.price}
//               />
//             ) : (
//               <p className="text-sm text-gray-500">
//                 No location coordinates provided.
//               </p>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default PlacePage;


// import { useParams } from "react-router-dom";
// import { useState, useEffect } from "react";
// import axios from "axios";
// import BookingWidget from "../BookingWidget";
// import PlaceGallery from "./PlaceGallery";
// import AddressLink from "../AddressLink";
// import BookingCalendar from "../BookingCalendar";
// import UserCard from "../components/UserCard";
// import Amenities from "../Amenities";
// import WhereYouWillStay from "./WhereYouWillStay";

// const PlacePage = () => {
//   const { id } = useParams();
//   const [place, setPlace] = useState(null);
//   const [reviews, setReviews] = useState([]);
//   const [showAllPhotos, setShowAllPhotos] = useState(false);
//   const [showAllAmenities, setShowAllAmenities] = useState(false);

//   useEffect(() => {
//     if (!id) return;

//     axios
//       .get(`http://localhost:4000/places/${id}`)
//       .then((res) => setPlace(res.data))
//       .catch((err) => console.error("Error fetching place:", err));

//     axios
//       .get(`http://localhost:4000/places/${id}/reviews`)
//       .then((res) => setReviews(res.data))
//       .catch((err) => console.error("Error loading reviews:", err));
//   }, [id]);

//   if (!place) return <div>Loading…</div>;

//   const photos = place.photos || [];
//   const photosToShow = showAllPhotos ? photos : photos.slice(0, 6);

//   return (
//     <div className="mt-4 bg-gray-100 py-8">
//       <div className="max-w-6xl mx-auto px-4 md:px-8">
//         <h1 className="text-3xl font-bold mb-2">{place.city}</h1>
//         <h1 className="text-3xl font-bold mb-2">{place.title}</h1>
//         <AddressLink>{place.address}</AddressLink>

//         <PlaceGallery place={place} />

//         <div className="mt-8 mb-4 gap-8 grid grid-cols-1 md:grid-cols-[2fr_1fr]">
//           <div>
//             <div className="my-4">
//               <h2 className="text-2xl font-semibold mb-4">About this place</h2>
//               <p>{place.description}</p>
//             </div>
//             <p>Check-in: {place.checkIn}</p>
//             <p>Check-out: {place.checkOut}</p>
//             <p>Max number of guests: {place.maxGuests}</p>
//           </div>
//           <BookingWidget place={place} className="flex flex-col gap-6" />
//         </div>
//       </div>

//       <div className="bg-white mt-8">
//         <div className="max-w-6xl mx-auto px-4 md:px-8 py-8">
//           <h2 className="text-2xl font-semibold mb-4">Extra Info</h2>
//           <div className="mb-4 mt-1 text-sm text-gray-700 leading-4">
//             {place.extraInfo}
//           </div>

//           {place.bedroomImage && (
//             <div className="my-6">
//               <h2 className="text-xl font-semibold mb-2">Where you'll stay</h2>
//               <img
//                 src={
//                   place.bedroomImage.startsWith("http")
//                     ? place.bedroomImage
//                     : `http://localhost:4000/upload/${place.bedroomImage}`
//                 }
//                 alt="Bedroom"
//                 className="w-full rounded-2xl shadow-md object-cover"
//               />
//             </div>
//           )}

//           {place.amenities?.length > 0 && (
//             <div className="mb-6 mt-6">
//               <h3 className="text-2xl font-semibold mb-4">Amenities</h3>

//               <Amenities
//                 amenities={
//                   showAllAmenities
//                     ? place.amenities
//                     : place.amenities.slice(0, 10)
//                 }
//               />

//               {place.amenities.length > 10 && (
//                 <button
//                   onClick={() => setShowAllAmenities(!showAllAmenities)}
//                   className="mt-4 px-4 py-2 bg-red-500 text-white rounded-full hover:bg-red-600 transition"
//                 >
//                   {showAllAmenities ? "Show Less" : "Show All Amenities"}
//                 </button>
//               )}
//             </div>
//           )}

//           <BookingCalendar />

//           {/* Place Thumbnail + Host Info */}
//           <div className="mb-12">
//             <div className="mb-6">
//               {place?.photos?.[0] ? (
//                 <img
//                   src={place.photos[0]}
//                   alt={place.title}
//                   className="w-full h-64 object-cover rounded-xl shadow"
//                 />
//               ) : (
//                 <div className="h-64 bg-gray-100 flex items-center justify-center rounded-xl shadow">
//                   <span className="text-gray-400 text-sm">
//                     No image available
//                   </span>
//                 </div>
//               )}
//             </div>

//             {place?.owner && (
//               <UserCard user={place.owner} placeId={place._id} place={place} />
//             )}
//           </div>

//           {/* Reviews Section */}
//           {reviews.length > 0 && (
//             <div className="mt-12 border-t pt-10">
//               <h2 className="text-2xl font-semibold mb-6">
//                 ★{" "}
//                 {(
//                   reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length
//                 ).toFixed(1)}{" "}
//                 · {reviews.length} review{reviews.length > 1 ? "s" : ""}
//               </h2>

//               <div className="grid md:grid-cols-2 gap-6">
//                 {reviews.map((review) => (
//                   <div
//                     key={review._id}
//                     className="bg-white rounded-2xl shadow p-6 border border-gray-100"
//                   >
//                     <div className="flex items-center gap-4 mb-4">
//                       <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center font-bold text-white">
//                         {review.user?.name?.[0]?.toUpperCase() || "G"}
//                       </div>
//                       <div>
//                         <div className="font-semibold">
//                           {review.user?.name || "Guest"}
//                         </div>
//                         <div className="text-sm text-gray-500">
//                           ★ {review.rating} ·{" "}
//                           {new Date(review.createdAt).toLocaleDateString(
//                             "en-US",
//                             {
//                               month: "short",
//                               year: "numeric",
//                             }
//                           )}
//                         </div>
//                       </div>
//                     </div>
//                     <p className="text-gray-700">{review.comment}</p>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default PlacePage;

// import { useParams } from "react-router-dom";
// import { useState, useEffect } from "react";
// import axios from "axios";
// import BookingWidget from "../BookingWidget";
// import PlaceGallery from "./PlaceGallery";
// import AddressLink from "../AddressLink";
// import BookingCalendar from "../BookingCalendar";
// import UserCard from "../components/UserCard";
// import Amenities from "../Amenities";
// import WhereYouWillStay from "./WhereYouWillStay";

// const PlacePage = () => {
//   const { id } = useParams();
//   const [place, setPlace] = useState(null);
//   const [reviews, setReviews] = useState([]);
//   const [showAllPhotos, setShowAllPhotos] = useState(false);
//   const [showAllAmenities, setShowAllAmenities] = useState(false);

//   useEffect(() => {
//     if (!id) return;

//     axios
//       .get(`http://localhost:4000/places/${id}`)
//       .then((res) => setPlace(res.data))
//       .catch((err) => console.error("Error fetching place:", err));

//     axios
//       .get(`http://localhost:4000/places/${id}/reviews`)
//       .then((res) => setReviews(res.data))
//       .catch((err) => console.error("Error loading reviews:", err));
//   }, [id]);

//   if (!place) return <div>Loading…</div>;

//   const photos = place.photos || [];
//   const photosToShow = showAllPhotos ? photos : photos.slice(0, 6);

//   return (
//     <div className="mt-4 bg-gray-100 py-8">
//       <div className="max-w-6xl mx-auto px-4 md:px-8">
//         <h1 className="text-3xl font-bold mb-2">{place.city}</h1>
//         <h1 className="text-3xl font-bold mb-2">{place.title}</h1>
//         <AddressLink>{place.address}</AddressLink>

//         <PlaceGallery place={place} />

//         <div className="mt-8 mb-4 gap-8 grid grid-cols-1 md:grid-cols-[2fr_1fr]">
//           <div>
//             <div className="my-4">
//               <h2 className="text-2xl font-semibold mb-4">About this place</h2>
//               <p>{place.description}</p>
//             </div>
//             <p>Check-in: {place.checkIn}</p>
//             <p>Check-out: {place.checkOut}</p>
//             <p>Max number of guests: {place.maxGuests}</p>
//           </div>
//           <BookingWidget place={place} className="flex flex-col gap-6" />
//         </div>
//       </div>

//       <div className="bg-white mt-8">
//         <div className="max-w-6xl mx-auto px-4 md:px-8 py-8">
//           <h2 className="text-2xl font-semibold mb-4">Extra Info</h2>
//           <div className="mb-4 mt-1 text-sm text-gray-700 leading-4">
//             {place.extraInfo}
//           </div>

//           {place.bedroomImage && (
//             <div className="my-6">
//               <h2 className="text-xl font-semibold mb-2">Where you'll stay</h2>
//               <img
//                 src={
//                   place.bedroomImage.startsWith("http")
//                     ? place.bedroomImage
//                     : `http://localhost:4000/upload/${place.bedroomImage}`
//                 }
//                 alt="Bedroom"
//                 className="w-full rounded-2xl shadow-md object-cover"
//               />
//             </div>
//           )}

//           {place.amenities?.length > 0 && (
//             <div className="mb-6 mt-6">
//               <h3 className="text-2xl font-semibold mb-4">Amenities</h3>

//               <Amenities
//                 amenities={
//                   showAllAmenities
//                     ? place.amenities
//                     : place.amenities.slice(0, 10)
//                 }
//               />

//               {place.amenities.length > 10 && (
//                 <button
//                   onClick={() => setShowAllAmenities(!showAllAmenities)}
//                   className="mt-4 px-4 py-2 bg-red-500 text-white rounded-full hover:bg-red-600 transition"
//                 >
//                   {showAllAmenities ? "Show Less" : "Show All Amenities"}
//                 </button>
//               )}
//             </div>
//           )}

//           <BookingCalendar />

//           <div className="mb-6 mt-6">
//           <div className="mb-12">
//   {/* Place Image or Placeholder */}
//   <div className="mb-6">
//     {place?.photos?.[0] ? (
//       <img
//         src={place.photos[0]}
//         alt={place.title}
//         className="w-full h-64 object-cover rounded-xl shadow"
//       />
//     ) : (
//       <div className="h-64 bg-gray-100 flex items-center justify-center rounded-xl shadow">
//         <span className="text-gray-400 text-sm">No image available</span>
//       </div>
//     )}
//   </div>

//   {/* Host Info */}
//   {place?.owner && (
//     <UserCard user={place.owner} placeId={place._id} place={place} />
//   )}
// </div>



//           {/* Reviews Section */}
//           {reviews.length > 0 && (
//             <div className="mt-12 border-t pt-10">
//               <h2 className="text-2xl font-semibold mb-6">
//                 ★{" "}
//                 {(
//                   reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length
//                 ).toFixed(1)}{" "}
//                 · {reviews.length} review{reviews.length > 1 ? "s" : ""}
//               </h2>

//               <div className="grid md:grid-cols-2 gap-6">
//                 {reviews.map((review) => (
//                   <div
//                     key={review._id}
//                     className="bg-white rounded-2xl shadow p-6 border border-gray-100"
//                   >
//                     <div className="flex items-center gap-4 mb-4">
//                       <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center font-bold text-white">
//                         {review.user?.name?.[0]?.toUpperCase() || "G"}
//                       </div>
//                       <div>
//                         <div className="font-semibold">
//                           {review.user?.name || "Guest"}
//                         </div>
//                         <div className="text-sm text-gray-500">
//                           ★ {review.rating} ·{" "}
//                           {new Date(review.createdAt).toLocaleDateString(
//                             "en-US",
//                             {
//                               month: "short",
//                               year: "numeric",
//                             }
//                           )}
//                         </div>
//                       </div>
//                     </div>
//                     <p className="text-gray-700">{review.comment}</p>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default PlacePage;


// import { useParams } from "react-router-dom";
// import { useState, useEffect } from "react";
// import axios from "axios";
// import BookingWidget from "../BookingWidget";
// import PlaceGallery from "./PlaceGallery";
// import AddressLink from "../AddressLink";
// import BookingCalendar from "../BookingCalendar";
// import UserCard from "../components/UserCard";
// import Amenities from "../Amenities";
// import WhereYouWillStay from "./WhereYouWillStay";

// const PlacePage = () => {
//   const { id } = useParams();
//   const [place, setPlace] = useState(null);
//   const [showAllPhotos, setShowAllPhotos] = useState(false);
//   const [showAllAmenities, setShowAllAmenities] = useState(false);
//   const [reviews, setReviews] = useState([]);
//   // const [bedroomImage, setBedroomImage] = useState("");


//   useEffect(() => {
//     if (!id) return;
//     axios
//       .get(`http://localhost:4000/places/${id}`)
//       .then((res) => setPlace(res.data))
//       .catch((err) => console.error("Error fetching place:", err));

//     axios
//       .get(`http://localhost:4000/places/${id}/reviews`)
//       .then((res) => setReviews(res.data))
//       .catch((err) => console.error("Error fetching reviews:", err));
//   }, [id]);

//   if (!place) return <div>Loading…</div>;

//   const photos = place.photos || [];
//   const photosToShow = showAllPhotos ? photos : photos.slice(0, 6);

//   // useEffect(() => {
//   //   if (!id) return;
//   //   // Fetch place details
//   //   axios
//   //     .get(`http://localhost:4000/places/${id}`)
//   //     .then((res) => setPlace(res.data))
//   //     .catch((err) => console.error("Error fetching place:", err));
//   //   // Fetch reviews for this place
//   //   axios
//   //     .get(`http://localhost:4000/places/${id}/reviews`)
//   //     .then((res) => setReviews(res.data))
//   //     .catch((err) => console.error("Error fetching reviews:", err));
//   // }, [id]);
  

//   return (
//     <div className="mt-4 bg-gray-100 py-8">
//       <div className="max-w-6xl mx-auto px-4 md:px-8">
//         <h1 className="text-3xl font-bold mb-2">{place.city}</h1>
//         <h1 className="text-3xl font-bold mb-2">{place.title}</h1>
//         <AddressLink>{place.address}</AddressLink>

//         <PlaceGallery place={place} />

//         <div className="mt-8 mb-4 gap-8 grid grid-cols-1 md:grid-cols-[2fr_1fr]">
//           <div>
//             <div className="my-4">
//               <h2 className="text-2xl font-semibold mb-4">About this place</h2>
//               <p>{place.description}</p>
//             </div>
//             <p>Check-in: {place.checkIn}</p>
//             <p>Check-out: {place.checkOut}</p>
//             <p>Max number of guests: {place.maxGuests}</p>
//           </div>
//           <BookingWidget place={place} className="flex flex-col gap-6" />
//         </div>
//       </div>

//       <div className="bg-white mt-8">
//         <div className="max-w-6xl mx-auto px-4 md:px-8 py-8">
//           <h2 className="text-2xl font-semibold mb-4">Extra Info</h2>
//           <div className="mb-4 mt-1 text-sm text-gray-700 leading-4">
//             {place.extraInfo}
//           </div>

//           {/* Display bedroom image if available */}
//           {place.bedroomImage && (
//             <div className="my-6">
//               <h2 className="text-xl font-semibold mb-2">Where you'll stay</h2>
//               <img
//                 src={
//                   place.bedroomImage.startsWith("http")
//                     ? place.bedroomImage
//                     : `http://localhost:4000/upload/${place.bedroomImage}`
//                 }
//                 alt="Bedroom"
//                 className="w-full rounded-2xl shadow-md object-cover"
//               />
//             </div>
//           )}

//           {/* Amenities Grid */}
//           {place.amenities?.length > 0 && (
//             <div className="mb-6 mt-6">
//               <h3 className="text-2xl font-semibold mb-4">Amenities</h3>

//               <Amenities
//                 amenities={
//                   showAllAmenities
//                     ? place.amenities
//                     : place.amenities.slice(0, 10)
//                 }
//               />

//               {place.amenities.length > 10 && (
//                 <button
//                   onClick={() => setShowAllAmenities(!showAllAmenities)}
//                   className="mt-4 px-4 py-2 bg-red-500 text-white rounded-full hover:bg-red-600 transition"
//                 >
//                   {showAllAmenities ? "Show Less" : "Show All Amenities"}
//                 </button>
//               )}
//             </div>
//           )}

//           <BookingCalendar />

//           <div className="mb-6 mt-6">
//             <UserCard />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default PlacePage;


// import { useParams } from "react-router-dom";
// import { useState, useEffect } from "react";
// import axios from "axios";
// import BookingWidget from "../BookingWidget";
// import PlaceGallery from "./PlaceGallery";
// import AddressLink from "../AddressLink";
// import BookingCalendar from "../BookingCalendar";
// import UserCard from "../components/UserCard";
// import Amenities from "../Amenities";

// const PlacePage = () => {
//   const { id } = useParams();
//   const [place, setPlace] = useState(null);
//   const [showAllPhotos, setShowAllPhotos] = useState(false);
//   const [showAllAmenities, setShowAllAmenities] = useState(false);

//   useEffect(() => {
//     if (!id) return;
//     axios
//       .get(`http://localhost:4000/places/${id}`)
//       .then((res) => setPlace(res.data))
//       .catch((err) => console.error("Error fetching place:", err));
//   }, [id]);

//   if (!place) return <div>Loading…</div>;

//   const photos = place.photos || [];
//   const photosToShow = showAllPhotos ? photos : photos.slice(0, 6);

//   return (
//     <div className="mt-4 bg-gray-100 -mx-8 px-8 py-8 relative">
//       <h1 className="text-3xl font-bold mb-2">{place.city}</h1>
//       <h1 className="text-3xl font-bold mb-2">{place.title}</h1>
//       <AddressLink>{place.address}</AddressLink>

//       <PlaceGallery place={place} />

//       <div className="mt-8 mb-4 gap-8 grid grid-cols-1 md:grid-cols-[2fr_1fr]">
//         <div>
//           <div className="my-4">
//             <h2 className="text-2xl font-semibold mb-4">About this place</h2>
//             <p>{place.description}</p>
//           </div>
//           <p>Check-in: {place.checkIn}</p>
//           <p>Check-out: {place.checkOut}</p>
//           <p>Max number of guests: {place.maxGuests}</p>
//         </div>
//         <BookingWidget place={place} className="flex flex-col gap-6" />
//       </div>

//       <div className="bg-white -mx-8 px-8 py-8">
//         <h2 className="text-2xl font-semibold mb-4">Extra Info</h2>
//         <div className="mb-4 mt-1 text-sm text-gray-700 leading-4">
//           {place.extraInfo}
//         </div>

//         {/* Amenities Grid */}
//         {/* {place.amenities?.length > 0 && (
//           <div className="mb-6 mt-6">
//             <h3 className="text-2xl font-semibold mb-4">Amenities</h3>

//             <div className="grid grid-cols-2 gap-4">
//               {(showAllAmenities
//                 ? place.amenities
//                 : place.amenities.slice(0, 10)
//               ).map((amenity, index) => (
//                 <div
//                   key={index}
//                   className="bg-gray-100 p-2 rounded text-sm text-gray-800"
//                 >
//                   {amenity}
//                 </div>
//               ))}
//             </div>

//             {place.amenities.length > 10 && (
//               <button
//                 onClick={() => setShowAllAmenities(!showAllAmenities)}
//                 className="mt-4 px-4 py-2 bg-red-500 text-white rounded-full hover:bg-red-600 transition"
//               >
//                 {showAllAmenities ? "Show Less" : "Show All Amenities"}
//               </button>
//             )}
//           </div>
//         )} */}
//         <Amenities
//           amenities={
//             showAllAmenities ? place.amenities : place.amenities.slice(0, 10)
//           }
//         />

//         {place.amenities.length > 10 && (
//           <button
//             onClick={() => setShowAllAmenities(!showAllAmenities)}
//             className="mt-4 px-4 py-2 bg-red-500 text-white rounded-full hover:bg-red-600 transition"
//           >
//             {showAllAmenities ? "Show Less" : "Show All Amenities"}
//           </button>
//         )}

//         <BookingCalendar />

//         <div className="mb-6 mt-6">
//           <UserCard />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default PlacePage;



// import { useParams } from "react-router-dom";
// import { useState, useEffect } from "react";
// import axios from "axios";
// import BookingWidget from "../BookingWidget";
// import PlaceGallery from "./PlaceGallery";
// import AddressLink from "../AddressLink";
// import Amenities from "../Amenities";
// import BookingCalendar from "../BookingCalendar";
// import UserCard from "../components/UserCard";

// const PlacePage = () => {
//   const { id } = useParams();
//   const [place, setPlace] = useState(null);
//   const [showAllPhotos, setShowAllPhotos] = useState(false);
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [message, setMessage] = useState("");

//   useEffect(() => {
//     if (!id) return;
//     axios
//       .get(`http://localhost:4000/places/${id}`)
//       .then((res) => setPlace(res.data))
//       .catch((err) => console.error("Error fetching place:", err));
//   }, [id]);

//   if (!place) return <div>Loading…</div>;

//   const handleSendMessage = async () => {
//     if (!message.trim()) return;

//     try {
//       await axios.post(
//         "/api/messages",
//         {
//           recipientId: place.owner,
//           message,
//         },
//         { withCredentials: true }
//       );
//       setIsModalOpen(false);
//       setMessage("");
//       alert("Message sent successfully!");
//     } catch (err) {
//       console.error("Failed to send message:", err);
//       alert("Failed to send message.");
//     }
//   };

//   return (
//     <div className="mt-4 bg-gray-100 -mx-8 px-8 py-8 relative">
//       <h1 className="text-3xl font-bold mb-2">{place.city}</h1>
//       <h1 className="text-3xl font-bold mb-2">{place.title}</h1>
//       <AddressLink>{place.address}</AddressLink>

//       <PlaceGallery place={place} />

//       <div className="mt-8 mb-4 gap-8 grid grid-cols-1 md:grid-cols-[2fr_1fr]">
//         <div>
//           <div className="my-4">
//             <h2 className="text-2xl font-semibold mb-4">About this place</h2>
//             <p>{place.description}</p>
//           </div>
//           <p>Check-in: {place.checkIn}</p>
//           <p>Check-out: {place.checkOut}</p>
//           <p>Max number of guests: {place.maxGuests}</p>
//         </div>
//         <BookingWidget place={place} />
//       </div>

//       <div className="bg-white -mx-8 px-8 py-8">
//         <h2 className="text-2xl font-semibold mb-4">Extra Info</h2>
//         <div className="mb-4 mt-1 text-sm text-gray-700 leading-4">
//           {place.extraInfo}
//         </div>

//         {place.amenities?.length > 0 && (
//           <div className="mb-6 mt-6">
//             <h3 className="text-2xl font-semibold mb-4">Amenities</h3>
//             <Amenities selectedAmenities={place.amenities} />
//           </div>
//         )}

//         <BookingCalendar />

//         <div className="mb-6 mt-6">
//           <UserCard onContactClick={() => setIsModalOpen(true)} />
//         </div>
//       </div>

//       {isModalOpen && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center">
//           <div className="bg-white p-6 rounded-xl w-full max-w-md shadow-lg space-y-4 relative">
//             <button
//               onClick={() => setIsModalOpen(false)}
//               className="absolute top-2 right-2 text-gray-400 hover:text-black text-lg"
//             >
//               ✕
//             </button>
//             <h2 className="text-xl font-semibold">
//               Send a message to the host
//             </h2>
//             <textarea
//               className="w-full border rounded-lg p-2 min-h-[100px]"
//               value={message}
//               onChange={(e) => setMessage(e.target.value)}
//               placeholder="Type your message..."
//             />
//             <div className="flex justify-end">
//               <button
//                 onClick={handleSendMessage}
//                 className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
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

// export default PlacePage;
