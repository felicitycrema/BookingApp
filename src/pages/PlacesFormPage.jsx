// import { useState, useEffect } from "react";
// import { useParams, Navigate } from "react-router-dom";
// import axios from "axios";
// import AccountNav from "./AccountNav.jsx";
// import PhotosUpLoader from "../PhotosUpLoader.jsx";
// import Amenities from "../AmenitiesT.jsx";
// import WhereYouWillStay from "./WhereYouWillStay.jsx";
// import AddGuests from "../AddGuests.jsx";

// const PlacesFormPage = () => {
//   const { id } = useParams();

//   // Form state variables
//   const [title, setTitle] = useState("");
//   const [city, setCity] = useState("");
//   const [address, setAddress] = useState("");
//   const [addedPhotos, setAddedPhotos] = useState([]);
//   const [description, setDescription] = useState("");
//   const [amenities, setAmenities] = useState([]);
//   const [extraInfo, setExtraInfo] = useState("");
//   const [checkIn, setCheckIn] = useState("");
//   const [checkOut, setCheckOut] = useState("");
//   const [maxGuests, setMaxGuests] = useState(1);
//   const [guestCategories, setGuestCategories] = useState({
//     adults: 1,
//     children: 0,
//     infants: 0,
//   });
//   const [price, setPrice] = useState(100);
//   const [weeklyDiscount, setDiscount] = useState(0);
//   const [cleaningFee, setCleaningFee] = useState(1);
//   const [serviceFee, setServiceFee] = useState(0);
//   const [occupancyTaxFee, setOccupancyTaxFee] = useState(0);
//   const [rooms, setRooms] = useState(1);
//   const [baths, setBaths] = useState(1);
//   const [type, setType] = useState("Hotel");
//   const [bedroomImage, setBedroomImage] = useState("");
//   const [latitude, setLatitude] = useState("");
//   const [longitude, setLongitude] = useState("");
//   const [redirect, setRedirect] = useState(false);
//   const [error, setError] = useState("");

//   // Load place data if editing existing
//   useEffect(() => {
//     if (!id) return;
//     axios.get(`/places/${id}`).then((response) => {
//       const data = response.data;
//       setTitle(data.title);
//       setCity(data.city || "");
//       setAddress(data.address);
//       setAddedPhotos(data.photos);
//       setDescription(data.description);
//       setAmenities(data.amenities);
//       setExtraInfo(data.extraInfo);
//       setRooms(data.rooms || 1);
//       setBaths(data.baths || 1);
//       setCheckIn(data.checkIn);
//       setCheckOut(data.checkOut);
//       setMaxGuests(data.maxGuests);
//       setGuestCategories(
//         data.guestCategories || { adults: 1, children: 0, infants: 0 }
//       );
//       setPrice(data.price);
//       setDiscount(data.weeklyDiscount * 100 || 0);
//       setCleaningFee(data.cleaningFee || 0);
//       setServiceFee(data.serviceFee * 100 || 0);
//       setOccupancyTaxFee(data.occupancyTaxFee * 100 || 0);
//       setType(data.type || "Hotel");
//       setBedroomImage(data.bedroomImage || "");
//       setLatitude(data.latitude ?? "");
//       setLongitude(data.longitude ?? "");
//     });
//   }, [id]);

//   // Percent cleaning helper (converts percentage to decimal)
//   const cleanPercent = (val) => {
//     const num = Number(val);
//     if (isNaN(num) || num < 0) return 0;
//     return num > 1 ? num / 100 : num;
//   };

//   // Validate latitude and longitude inputs
//   const validateCoordinates = () => {
//     const latNum = parseFloat(latitude);
//     const lngNum = parseFloat(longitude);
//     if (
//       isNaN(latNum) ||
//       latNum < -90 ||
//       latNum > 90 ||
//       isNaN(lngNum) ||
//       lngNum < -180 ||
//       lngNum > 180
//     ) {
//       setError(
//         "Please enter valid latitude (-90 to 90) and longitude (-180 to 180)."
//       );
//       return false;
//     }
//     setError("");
//     return true;
//   };

//   // Save place handler
//   const savePlace = async (e) => {
//     e.preventDefault();

//     if (!validateCoordinates()) return;

//     const placeData = {
//       title,
//       city,
//       address,
//       photos: addedPhotos,
//       description,
//       amenities,
//       extraInfo,
//       checkIn,
//       checkOut,
//       maxGuests: Number(maxGuests),
//       guestCategories,
//       price: Number(price),
//       rooms: Number(rooms),
//       baths: Number(baths),
//       type,
//       weeklyDiscount: cleanPercent(weeklyDiscount),
//       cleaningFee: Number(cleaningFee),
//       serviceFee: cleanPercent(serviceFee),
//       occupancyTaxFee: cleanPercent(occupancyTaxFee),
//       bedroomImage,
//       latitude: parseFloat(latitude),
//       longitude: parseFloat(longitude),
//     };

//     try {
//       if (id) {
//         await axios.put(`/places/${id}`, placeData, { withCredentials: true });
//       } else {
//         await axios.post("/places", placeData, { withCredentials: true });
//       }
//       setRedirect(true);
//     } catch (e) {
//       console.error("Error saving place:", e.response?.data || e.message);
//       alert("Failed to save the place. Please try again.");
//     }
//   };

//   if (redirect) return <Navigate to="/account/places" />;

//   // Helper to render headers + descriptions
//   function preInput(header, description) {
//     return (
//       <>
//         <h2 className="text-2xl mt-4">{header}</h2>
//         <p className="text-gray-500 text-sm">{description}</p>
//       </>
//     );
//   }

//   return (
//     <div className="max-w-2xl mx-auto mt-8">
//       <AccountNav />
//       <form onSubmit={savePlace} className="space-y-6">
//         {/* City */}
//         {preInput("City", "Select a city you want to visit")}
//         <select
//           className="w-full border border-gray-300 p-2 rounded-full"
//           value={city}
//           onChange={(e) => setCity(e.target.value)}
//           required
//         >
//           <option value="">Select a city</option>
//           <option value="Johannesburg">Johannesburg</option>
//           <option value="Cape Town">Cape Town</option>
//           <option value="Durban">Durban</option>
//           <option value="Pretoria">Pretoria</option>
//           <option value="Polokwane">Polokwane</option>
//         </select>

//         {/* Title */}
//         {preInput("Title", "Short and catchy headline for your place")}
//         <input
//           type="text"
//           placeholder="Lovely apartment in Cape Town"
//           className="w-full border border-gray-300 p-2 rounded-full"
//           value={title}
//           onChange={(e) => setTitle(e.target.value)}
//           required
//         />

//         {/* Address */}
//         {preInput("Address", "Exact address of the place")}
//         <input
//           type="text"
//           placeholder="123 Long Street"
//           className="w-full border border-gray-300 p-2 rounded-full"
//           value={address}
//           onChange={(e) => setAddress(e.target.value)}
//           required
//         />

//         {/* Coordinates */}
//         <div>
//           {preInput(
//             "Location Coordinates",
//             "Enter latitude and longitude to pinpoint your place on the map"
//           )}
//           <div className="grid grid-cols-2 gap-4">
//             <input
//               type="number"
//               step="any"
//               min="-90"
//               max="90"
//               placeholder="Latitude (-90 to 90)"
//               value={latitude}
//               onChange={(e) => setLatitude(e.target.value)}
//               className="w-full border border-gray-300 p-2 rounded"
//               required
//             />
//             <input
//               type="number"
//               step="any"
//               min="-180"
//               max="180"
//               placeholder="Longitude (-180 to 180)"
//               value={longitude}
//               onChange={(e) => setLongitude(e.target.value)}
//               className="w-full border border-gray-300 p-2 rounded"
//               required
//             />
//           </div>
//           {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
//         </div>

//         {/* Photos */}
//         {preInput("Photos", "More photos = more trust")}
//         <PhotosUpLoader addedPhotos={addedPhotos} onChange={setAddedPhotos} />

//         {/* Description */}
//         {preInput("Description", "Write a detailed description")}
//         <textarea
//           className="w-full border border-gray-300 p-2 rounded"
//           value={description}
//           onChange={(e) => setDescription(e.target.value)}
//           required
//         />

//         {/* Amenities */}
//         {preInput("Amenities", "Select what your place offers")}
//         <Amenities
//           selectedAmenities={amenities}
//           onChange={setAmenities}
//           showAll
//         />

//         {/* Rooms and Baths */}
//         <div className="grid grid-cols-2 gap-4">
//           <div>
//             <label className="block text-sm font-medium">Rooms</label>
//             <input
//               type="number"
//               min="1"
//               value={rooms}
//               onChange={(e) => setRooms(e.target.value)}
//               className="w-full border border-gray-300 p-2 rounded"
//             />
//           </div>
//           <div>
//             <label className="block text-sm font-medium">Baths</label>
//             <input
//               type="number"
//               min="1"
//               value={baths}
//               onChange={(e) => setBaths(e.target.value)}
//               className="w-full border border-gray-300 p-2 rounded"
//             />
//           </div>
//         </div>

//         {/* Type */}
//         <div>
//           <label className="block text-sm font-medium">Type</label>
//           <select
//             value={type}
//             onChange={(e) => setType(e.target.value)}
//             className="w-full border border-gray-300 p-2 rounded"
//           >
//             <option value="Hotel">Hotel</option>
//             <option value="Apartment">Apartment</option>
//             <option value="Resort">Resort</option>
//             <option value="Hostel">Guesthouse</option>
//           </select>
//         </div>

//         {/* Extra Info */}
//         {preInput("Extra info", "House rules or anything else")}
//         <textarea
//           className="w-full border border-gray-300 p-2 rounded"
//           value={extraInfo}
//           onChange={(e) => setExtraInfo(e.target.value)}
//         />

//         {/* Where you will stay */}
//         <WhereYouWillStay
//           bedroomImage={bedroomImage}
//           setBedroomImage={setBedroomImage}
//         />

//         {/* Check-in/out and Guests */}
//         {preInput("Check-in/out & Guests", "Setup basic guest info")}
//         <div className="grid grid-cols-2 gap-2">
//           <input
//             type="text"
//             placeholder="Check-in (e.g. 14H00)"
//             value={checkIn}
//             onChange={(e) => setCheckIn(e.target.value)}
//             className="w-full border border-gray-300 p-2 rounded"
//           />
//           <input
//             type="text"
//             placeholder="Check-out (e.g. 11H00)"
//             value={checkOut}
//             onChange={(e) => setCheckOut(e.target.value)}
//             className="w-full border border-gray-300 p-2 rounded"
//           />
//           <input
//             type="number"
//             placeholder="Max guests"
//             min="1"
//             value={maxGuests}
//             onChange={(e) => setMaxGuests(e.target.value)}
//             className="w-full border border-gray-300 p-2 rounded"
//           />
//           <input
//             type="number"
//             placeholder="Price per night"
//             min="1"
//             value={price}
//             onChange={(e) => setPrice(e.target.value)}
//             className="w-full border border-gray-300 p-2 rounded"
//           />
//         </div>

//         {/* Guest Breakdown */}
//         {preInput("Guest Breakdown", "Adults, children, infants")}
//         <AddGuests value={guestCategories} onChange={setGuestCategories} />

//         {/* Fees */}
//         <div className="grid grid-cols-2 gap-4">
//           <input
//             type="number"
//             min="0"
//             max="100"
//             placeholder="Weekly Discount (%)"
//             value={weeklyDiscount}
//             onChange={(e) => setDiscount(e.target.value)}
//             className="w-full border border-gray-300 p-2 rounded"
//           />
//           <input
//             type="number"
//             min="0"
//             max="100"
//             placeholder="Service Fee (%)"
//             value={serviceFee}
//             onChange={(e) => setServiceFee(e.target.value)}
//             className="w-full border border-gray-300 p-2 rounded"
//           />
//           <input
//             type="number"
//             min="0"
//             max="100"
//             placeholder="Occupancy Tax (%)"
//             value={occupancyTaxFee}
//             onChange={(e) => setOccupancyTaxFee(e.target.value)}
//             className="w-full border border-gray-300 p-2 rounded"
//           />
//           <input
//             type="number"
//             min="0"
//             placeholder="Cleaning Fee (R)"
//             value={cleaningFee}
//             onChange={(e) => setCleaningFee(e.target.value)}
//             className="w-full border border-gray-300 p-2 rounded"
//           />
//         </div>

//         {/* Save button */}
//         <div className="pt-4">
//           <button
//             type="submit"
//             className="bg-red-500 hover:bg-red-600 text-white py-2 px-6 rounded-full w-full my-4"
//           >
//             Save
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default PlacesFormPage;

import { useState, useEffect } from "react";
import { useParams, Navigate } from "react-router-dom";
import axios from "axios";
import AccountNav from "./AccountNav.jsx";
import PhotosUpLoader from "../PhotosUpLoader.jsx";
import Amenities from "../AmenitiesT.jsx";
import WhereYouWillStay from "./WhereYouWillStay.jsx";
// import AddGuests from "../AddGuests.jsx";
import GuestsBreakdown from "./GuestsBreakdown.jsx";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

// Fix leaflet's default icon paths
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.9.3/dist/images/marker-icon-2x.png",
  iconUrl: "https://unpkg.com/leaflet@1.9.3/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.3/dist/images/marker-shadow.png",
});

const PlacesFormPage = () => {
  const { id } = useParams();

  // Form state variables
  const [title, setTitle] = useState("");
  const [city, setCity] = useState("");
  const [address, setAddress] = useState("");
  const [addedPhotos, setAddedPhotos] = useState([]);
  const [description, setDescription] = useState("");
  const [amenities, setAmenities] = useState([]);
  const [extraInfo, setExtraInfo] = useState("");
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [maxGuests, setMaxGuests] = useState(1);
  const [guestCategories, setGuestCategories] = useState({
    adults: 1,
    children: 0,
    infants: 0,
  });
  const [price, setPrice] = useState(100);
  const [weeklyDiscount, setDiscount] = useState(0);
  const [cleaningFee, setCleaningFee] = useState(1);
  const [serviceFee, setServiceFee] = useState(0);
  const [occupancyTaxFee, setOccupancyTaxFee] = useState(0);
  const [rooms, setRooms] = useState(1);
  const [baths, setBaths] = useState(1);
  const [type, setType] = useState("Hotel");
  const [bedroomImage, setBedroomImage] = useState("");
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");
  const [redirect, setRedirect] = useState(false);
  const [error, setError] = useState("");

  // Load place data if editing existing
  useEffect(() => {
    if (!id) return;
    axios.get(`/places/${id}`).then((response) => {
      const data = response.data;
      setTitle(data.title);
      setCity(data.city || "");
      setAddress(data.address);
      setAddedPhotos(data.photos);
      setDescription(data.description);
      setAmenities(data.amenities);
      setExtraInfo(data.extraInfo);
      setRooms(data.rooms || 1);
      setBaths(data.baths || 1);
      setCheckIn(data.checkIn);
      setCheckOut(data.checkOut);
      setMaxGuests(data.maxGuests);
      setGuestCategories(
        data.guestCategories || { adults: 1, children: 0, infants: 0 }
      );
      setPrice(data.price);
      setDiscount(data.weeklyDiscount * 100 || 0);
      setCleaningFee(data.cleaningFee || 0);
      setServiceFee(data.serviceFee * 100 || 0);
      setOccupancyTaxFee(data.occupancyTaxFee * 100 || 0);
      setType(data.type || "Hotel");
      setBedroomImage(data.bedroomImage || "");
      setLatitude(data.latitude ?? "");
      setLongitude(data.longitude ?? "");
    });
  }, [id]);

  // Percent cleaning helper (converts percentage to decimal)
  const cleanPercent = (val) => {
    const num = Number(val);
    if (isNaN(num) || num < 0) return 0;
    return num > 1 ? num / 100 : num;
  };

  // Validate latitude and longitude inputs
  const validateCoordinates = () => {
    const latNum = parseFloat(latitude);
    const lngNum = parseFloat(longitude);
    if (
      isNaN(latNum) ||
      latNum < -90 ||
      latNum > 90 ||
      isNaN(lngNum) ||
      lngNum < -180 ||
      lngNum > 180
    ) {
      setError(
        "Please enter valid latitude (-90 to 90) and longitude (-180 to 180)."
      );
      return false;
    }
    setError("");
    return true;
  };

  // Save place handler
  const savePlace = async (e) => {
    e.preventDefault();

    if (!validateCoordinates()) return;

    const placeData = {
      title,
      city,
      address,
      photos: addedPhotos,
      description,
      amenities,
      extraInfo,
      checkIn,
      checkOut,
      maxGuests: Number(maxGuests),
      guestCategories,
      price: Number(price),
      rooms: Number(rooms),
      baths: Number(baths),
      type,
      weeklyDiscount: cleanPercent(weeklyDiscount),
      cleaningFee: Number(cleaningFee),
      serviceFee: cleanPercent(serviceFee),
      occupancyTaxFee: cleanPercent(occupancyTaxFee),
      bedroomImage,
      latitude: parseFloat(latitude),
      longitude: parseFloat(longitude),
    };

    try {
      if (id) {
        await axios.put(`/places/${id}`, placeData, { withCredentials: true });
      } else {
        await axios.post("/places", placeData, { withCredentials: true });
      }
      setRedirect(true);
    } catch (e) {
      console.error("Error saving place:", e.response?.data || e.message);
      alert("Failed to save the place. Please try again.");
    }
  };

  if (redirect) return <Navigate to="/account/places" />;

  // Helper to render headers + descriptions
  function preInput(header, description) {
    return (
      <>
        <h2 className="text-2xl mt-4">{header}</h2>
        <p className="text-gray-500 text-sm">{description}</p>
      </>
    );
  }

  const handleGuestsChange = (data) => {
    console.log("Guest breakdown:", data);
  };

  return (
    <div className="max-w-2xl mx-auto mt-8">
      <AccountNav />
      <form onSubmit={savePlace} className="space-y-6">
        {/* City */}
        {preInput("City", "Select a city you want to visit")}
        <select
          className="w-full border border-gray-300 p-2 rounded-full"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          required
        >
          <option value="">Select a city</option>
          <option value="Johannesburg">Johannesburg</option>
          <option value="Cape Town">Cape Town</option>
          <option value="Durban">Durban</option>
          <option value="Pretoria">Pretoria</option>
          <option value="Polokwane">Polokwane</option>
        </select>

        {/* Title */}
        {preInput("Title", "Short and catchy headline for your place")}
        <input
          type="text"
          placeholder="Lovely apartment in Cape Town"
          className="w-full border border-gray-300 p-2 rounded-full"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />

        {/* Address */}
        {preInput("Address", "Exact address of the place")}
        <input
          type="text"
          placeholder="123 Long Street"
          className="w-full border border-gray-300 p-2 rounded-full"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          required
        />

        {/* Coordinates */}
        <div>
          {preInput(
            "Location Coordinates",
            "Enter latitude and longitude to pinpoint your place on the map"
          )}
          <div className="grid grid-cols-2 gap-4">
            <input
              type="number"
              step="any"
              min="-90"
              max="90"
              placeholder="Latitude (-90 to 90)"
              value={latitude}
              onChange={(e) => setLatitude(e.target.value)}
              className="w-full border border-gray-300 p-2 rounded"
              required
            />
            <input
              type="number"
              step="any"
              min="-180"
              max="180"
              placeholder="Longitude (-180 to 180)"
              value={longitude}
              onChange={(e) => setLongitude(e.target.value)}
              className="w-full border border-gray-300 p-2 rounded"
              required
            />
          </div>
          {error && <p className="text-red-500 text-sm mt-1">{error}</p>}

          {/* Map Preview */}
          <div className="mt-4">
            <h2 className="text-lg font-semibold mb-2">Map Preview</h2>
            {latitude && longitude ? (
              <MapContainer
                center={[parseFloat(latitude), parseFloat(longitude)]}
                zoom={13}
                style={{ height: "300px", width: "100%" }}
                scrollWheelZoom={false}
                key={`${latitude}-${longitude}`} // force rerender when coords change
              >
                <TileLayer
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker
                  position={[parseFloat(latitude), parseFloat(longitude)]}
                >
                  <Popup>
                    {title || "Your place"} <br />
                    {address || ""}
                  </Popup>
                </Marker>
              </MapContainer>
            ) : (
              <p className="text-gray-500">
                Enter latitude and longitude to see location on the map.
              </p>
            )}
          </div>
        </div>

        {/* Photos */}
        {preInput("Photos", "More photos = more trust")}
        <PhotosUpLoader addedPhotos={addedPhotos} onChange={setAddedPhotos} />

        {/* Description */}
        {preInput("Description", "Write a detailed description")}
        <textarea
          className="w-full border border-gray-300 p-2 rounded"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />

        {/* Amenities */}
        {preInput("Amenities", "Select what your place offers")}
        <Amenities
          selectedAmenities={amenities}
          onChange={setAmenities}
          showAll
        />

        {/* Rooms and Baths */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium">Rooms</label>
            <input
              type="number"
              min="1"
              value={rooms}
              onChange={(e) => setRooms(e.target.value)}
              className="w-full border border-gray-300 p-2 rounded"
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Baths</label>
            <input
              type="number"
              min="1"
              value={baths}
              onChange={(e) => setBaths(e.target.value)}
              className="w-full border border-gray-300 p-2 rounded"
            />
          </div>
        </div>

        {/* Type */}
        <div>
          <label className="block text-sm font-medium">Type</label>
          <select
            value={type}
            onChange={(e) => setType(e.target.value)}
            className="w-full border border-gray-300 p-2 rounded"
          >
            <option value="Hotel">Hotel</option>
            <option value="Apartment">Apartment</option>
            <option value="Resort">Resort</option>
            <option value="Hostel">Guesthouse</option>
          </select>
        </div>

        {/* Extra Info */}
        {preInput("Extra info", "House rules or anything else")}
        <textarea
          className="w-full border border-gray-300 p-2 rounded"
          value={extraInfo}
          onChange={(e) => setExtraInfo(e.target.value)}
        />

        {/* {preInput("Check-in/out & Guests", "Setup basic guest info")}
        <div></div> */}

        {/* Where you will stay */}
        <WhereYouWillStay
          bedroomImage={bedroomImage}
          setBedroomImage={setBedroomImage}
        />

        {/* Check-in/out and Guests */}
        {preInput("Check-in/out & Guests", "Setup basic guest info")}
        <div className="grid grid-cols-2 gap-2">
          <input
            type="text"
            placeholder="Check-in (e.g. 14H00)"
            value={checkIn}
            onChange={(e) => setCheckIn(e.target.value)}
            className="w-full border border-gray-300 p-2 rounded"
          />
          <input
            type="text"
            placeholder="Check-out (e.g. 11H00)"
            value={checkOut}
            onChange={(e) => setCheckOut(e.target.value)}
            className="w-full border border-gray-300 p-2 rounded"
          />
          <input
            type="number"
            placeholder="Max guests"
            min="1"
            value={maxGuests}
            onChange={(e) => setMaxGuests(e.target.value)}
            className="w-full border border-gray-300 p-2 rounded"
          />
          <input
            type="number"
            placeholder="Price per night"
            min="1"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className="w-full border border-gray-300 p-2 rounded"
          />
        </div>

        {/* Guest Breakdown */}
        {preInput("Guest Breakdown", "Adults, children, infants")}
        {/* <AddGuests value={guestCategories} onChange={setGuestCategories} /> */}
        <div>
          <GuestsBreakdown onChange={handleGuestsChange} />
        </div>

        {/* Fees */}
        <div className="grid grid-cols-2 gap-4">
          <input
            type="number"
            min="0"
            max="100"
            placeholder="Weekly Discount (%)"
            value={weeklyDiscount}
            onChange={(e) => setDiscount(e.target.value)}
            className="w-full border border-gray-300 p-2 rounded"
          />
          <input
            type="number"
            min="0"
            max="100"
            placeholder="Service Fee (%)"
            value={serviceFee}
            onChange={(e) => setServiceFee(e.target.value)}
            className="w-full border border-gray-300 p-2 rounded"
          />
          <input
            type="number"
            min="0"
            max="100"
            placeholder="Occupancy Tax (%)"
            value={occupancyTaxFee}
            onChange={(e) => setOccupancyTaxFee(e.target.value)}
            className="w-full border border-gray-300 p-2 rounded"
          />
          <input
            type="number"
            min="0"
            placeholder="Cleaning Fee (R)"
            value={cleaningFee}
            onChange={(e) => setCleaningFee(e.target.value)}
            className="w-full border border-gray-300 p-2 rounded"
          />
        </div>

        {/* Save button */}
        <div className="pt-4">
          <button
            type="submit"
            className="bg-red-500 hover:bg-red-600 text-white py-2 px-6 rounded-full w-full my-4"
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
};

export default PlacesFormPage;




// import { useState, useEffect } from "react";
// import { useParams, Navigate } from "react-router-dom";
// import PhotosUpLoader from "../PhotosUpLoader.jsx";
// import Amenities from "../AmenitiesT.jsx";
// import WhereYouWillStay from "./WhereYouWillStay.jsx";
// import axios from "axios";
// import AccountNav from "./AccountNav.jsx";
// import AddGuests from "../AddGuests.jsx";

// const cleanPercent = (val) => {
//   const num = parseFloat(val);
//   if (isNaN(num) || num < 0) return 0;
//   return num > 1 ? num / 100 : num;
// };

// const PlacesFormPage = () => {
//   const { id } = useParams();
//   const [title, setTitle] = useState("");
//   const [city, setCity] = useState("");
//   const [address, setAddress] = useState("");
//   const [addedPhotos, setAddedPhotos] = useState([]);
//   const [description, setDescription] = useState("");
//   const [amenities, setAmenities] = useState([]);
//   const [extraInfo, setExtraInfo] = useState("");
//   const [checkIn, setCheckIn] = useState("");
//   const [checkOut, setCheckOut] = useState("");
//   const [maxGuests, setMaxGuests] = useState(1);
//   const [guestCategories, setGuestCategories] = useState({
//     adults: 1,
//     children: 0,
//     infants: 0,
//   });
//   const [price, setPrice] = useState(100);
//   const [weeklyDiscount, setDiscount] = useState(0);
//   const [cleaningFee, setCleaningFee] = useState(1);
//   const [serviceFee, setServiceFee] = useState(0);
//   const [occupancyTaxFee, setOccupancyTaxFee] = useState(0);
//   const [rooms, setRooms] = useState(1);
//   const [baths, setBaths] = useState(1);
//   const [type, setType] = useState("Hotel");
//   const [redirect, setRedirect] = useState(false);
//   const [bedroomImage, setBedroomImage] = useState("");

//   useEffect(() => {
//     if (!id) return;
//     axios.get(`/places/${id}`).then((response) => {
//       const data = response.data;
//       setTitle(data.title);
//       setCity(data.city || "");
//       setAddress(data.address);
//       setAddedPhotos(data.photos);
//       setDescription(data.description);
//       setAmenities(data.amenities);
//       setExtraInfo(data.extraInfo);
//       setRooms(data.rooms || 1);
//       setBaths(data.baths || 1);
//       setCheckIn(data.checkIn);
//       setCheckOut(data.checkOut);
//       setMaxGuests(data.maxGuests);
//       setGuestCategories(
//         data.guestCategories || { adults: 1, children: 0, infants: 0 }
//       );
//       setPrice(data.price);
//       setDiscount(data.weeklyDiscount * 100 || 0);
//       setCleaningFee(data.cleaningFee || 0);
//       setServiceFee(data.serviceFee * 100 || 0);
//       setOccupancyTaxFee(data.occupancyTaxFee * 100 || 0);
//       setType(data.type || "Hotel");
//       setBedroomImage(data.bedroomImage || "");
//     });
//   }, [id]);

//   function preInput(header, description) {
//     return (
//       <>
//         <h2 className="text-2xl mt-4">{header}</h2>
//         <p className="text-gray-500 text-sm">{description}</p>
//       </>
//     );
//   }

//   const cleanPercent = (val) => {
//     const num = Number(val);
//     if (isNaN(num) || num < 0) return 0;
//     // Convert percentages > 1 to decimals
//     return num > 1 ? num / 100 : num;
//   };

//   const savePlace = async (e) => {
//     e.preventDefault();

//     const placeData = {
//       title,
//       city,
//       address,
//       photos: addedPhotos,
//       description,
//       amenities,
//       extraInfo,
//       checkIn,
//       checkOut,
//       maxGuests: Number(maxGuests),
//       guestCategories,
//       price: Number(price),
//       rooms: Number(rooms),
//       baths: Number(baths),
//       type,
//       weeklyDiscount: cleanPercent(weeklyDiscount),
//       cleaningFee: Number(cleaningFee),
//       serviceFee: cleanPercent(serviceFee),
//       occupancyTaxFee: cleanPercent(occupancyTaxFee),
//       bedroomImage,
//     };

//     try {
//       if (id) {
//         await axios.put(`/places/${id}`, placeData, { withCredentials: true });
//       } else {
//         await axios.post("/places", placeData, { withCredentials: true });
//       }
//       setRedirect(true);
//     } catch (e) {
//       console.error("Error saving place:", e.response?.data || e.message);
//       alert("Failed to save the place. Please try again.");
//     }
//   };

//   if (redirect) return <Navigate to="/account/places" />;

//   return (
//     <div className="max-w-2xl mx-auto mt-8">
//       <AccountNav />
//       <form onSubmit={savePlace} className="space-y-6">
//         {/* City */}
//         {preInput("City", "Select a city you want to visit")}
//         <select
//           className="w-full border border-gray-300 p-2 rounded-full"
//           value={city}
//           onChange={(e) => setCity(e.target.value)}
//           required
//         >
//           <option value="">Select a city</option>
//           <option value="Johannesburg">Johannesburg</option>
//           <option value="Cape Town">Cape Town</option>
//           <option value="Durban">Durban</option>
//           <option value="Pretoria">Pretoria</option>
//           <option value="Polokwane">Polokwane</option>
//         </select>

//         {/* Title */}
//         {preInput("Title", "Short and catchy headline for your place")}
//         <input
//           type="text"
//           placeholder="Lovely apartment in Cape Town"
//           className="w-full border border-gray-300 p-2 rounded-full"
//           value={title}
//           onChange={(e) => setTitle(e.target.value)}
//         />

//         {/* Address */}
//         {preInput("Address", "Exact address of the place")}
//         <input
//           type="text"
//           placeholder="123 Long Street"
//           className="w-full border border-gray-300 p-2 rounded-full"
//           value={address}
//           onChange={(e) => setAddress(e.target.value)}
//         />

//         {/* Photos */}
//         {preInput("Photos", "More photos = more trust")}
//         <PhotosUpLoader addedPhotos={addedPhotos} onChange={setAddedPhotos} />

//         {/* Description */}
//         {preInput("Description", "Write a detailed description")}
//         <textarea
//           className="w-full border border-gray-300 p-2 rounded"
//           value={description}
//           onChange={(e) => setDescription(e.target.value)}
//         />

//         {/* Amenities */}
//         {preInput("Amenities", "Select what your place offers")}
//         <Amenities
//           selectedAmenities={amenities}
//           onChange={setAmenities}
//           showAll
//         />

//         {/* Rooms and Baths */}
//         <div className="grid grid-cols-2 gap-4">
//           <div>
//             <label className="block text-sm font-medium">Rooms</label>
//             <input
//               type="number"
//               min="1"
//               value={rooms}
//               onChange={(e) => setRooms(e.target.value)}
//               className="w-full border border-gray-300 p-2 rounded"
//             />
//           </div>
//           <div>
//             <label className="block text-sm font-medium">Baths</label>
//             <input
//               type="number"
//               min="1"
//               value={baths}
//               onChange={(e) => setBaths(e.target.value)}
//               className="w-full border border-gray-300 p-2 rounded"
//             />
//           </div>
//         </div>

//         {/* Type */}
//         <div>
//           <label className="block text-sm font-medium">Type</label>
//           <select
//             value={type}
//             onChange={(e) => setType(e.target.value)}
//             className="w-full border border-gray-300 p-2 rounded"
//           >
//             <option value="Hotel">Hotel</option>
//             <option value="Apartment">Apartment</option>
//             <option value="Resort">Resort</option>
//             <option value="Hostel">Guesthouse</option>
//           </select>
//         </div>

//         {/* Extra Info */}
//         {preInput("Extra info", "House rules or anything else")}
//         <textarea
//           className="w-full border border-gray-300 p-2 rounded"
//           value={extraInfo}
//           onChange={(e) => setExtraInfo(e.target.value)}
//         />

//         {/* {preInput("Stay", "Where you'll stay")} */}
//         <WhereYouWillStay
//           bedroomImage={bedroomImage}
//           setBedroomImage={setBedroomImage}
//         />

//         {/* Check-in/out and Guests */}
//         {preInput("Check-in/out & Guests", "Setup basic guest info")}
//         <div className="grid grid-cols-2 gap-2">
//           <input
//             type="text"
//             placeholder="Check-in (e.g. 14H00)"
//             value={checkIn}
//             onChange={(e) => setCheckIn(e.target.value)}
//             className="w-full border border-gray-300 p-2 rounded"
//           />
//           <input
//             type="text"
//             placeholder="Check-out (e.g. 11H00)"
//             value={checkOut}
//             onChange={(e) => setCheckOut(e.target.value)}
//             className="w-full border border-gray-300 p-2 rounded"
//           />
//           <input
//             type="number"
//             placeholder="Max guests"
//             min="1"
//             value={maxGuests}
//             onChange={(e) => setMaxGuests(e.target.value)}
//             className="w-full border border-gray-300 p-2 rounded"
//           />
//           <input
//             type="number"
//             placeholder="Price per night"
//             min="1"
//             value={price}
//             onChange={(e) => setPrice(e.target.value)}
//             className="w-full border border-gray-300 p-2 rounded"
//           />
//         </div>

//         {/* Guest Breakdown */}
//         {preInput("Guest Breakdown", "Adults, children, infants")}
//         <AddGuests value={guestCategories} onChange={setGuestCategories} />

//         {/* Fees */}
//         <div className="grid grid-cols-2 gap-4">
//           <input
//             type="number"
//             min="0"
//             max="100"
//             placeholder="Weekly Discount (%)"
//             value={weeklyDiscount}
//             onChange={(e) => setDiscount(e.target.value)}
//             className="w-full border border-gray-300 p-2 rounded"
//           />
//           <input
//             type="number"
//             min="0"
//             max="100"
//             placeholder="Service Fee (%)"
//             value={serviceFee}
//             onChange={(e) => setServiceFee(e.target.value)}
//             className="w-full border border-gray-300 p-2 rounded"
//           />
//           <input
//             type="number"
//             min="0"
//             max="100"
//             placeholder="Occupancy Tax (%)"
//             value={occupancyTaxFee}
//             onChange={(e) => setOccupancyTaxFee(e.target.value)}
//             className="w-full border border-gray-300 p-2 rounded"
//           />
//           <input
//             type="number"
//             min="0"
//             placeholder="Cleaning Fee (R)"
//             value={cleaningFee}
//             onChange={(e) => setCleaningFee(e.target.value)}
//             className="w-full border border-gray-300 p-2 rounded"
//           />
//         </div>

//         {/* Save */}
//         <div className="pt-4">
//           <button
//             type="submit"
//             className="bg-red-500 hover:bg-red-600 text-white py-2 px-6 rounded-full w-full my-4"
//           >
//             Save
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default PlacesFormPage;

// import { useState, useEffect } from "react";
// import { useParams, Navigate } from "react-router-dom";
// import PhotosUpLoader from "../PhotosUpLoader.jsx";
// import Amenities from "../AmenitiesT.jsx";
// import axios from "axios";
// import AccountNav from "./AccountNav.jsx";
// import AddGuests from "../AddGuests.jsx";

// const PlacesFormPage = () => {
//   const { id } = useParams();
//   const [title, setTitle] = useState("");
//   const [city, setCity] = useState("");
//   const [address, setAddress] = useState("");
//   const [addedPhotos, setAddedPhotos] = useState([]);
//   const [description, setDescription] = useState("");
//   const [amenities, setAmenities] = useState([]);
//   const [extraInfo, setExtraInfo] = useState("");
//   const [checkIn, setCheckIn] = useState("");
//   const [checkOut, setCheckOut] = useState("");
//   const [maxGuests, setMaxGuests] = useState(1);
//   const [guestCategories, setGuestCategories] = useState({
//     adults: 1,
//     children: 0,
//     infants: 0,
//   });
//   const [price, setPrice] = useState(100);
//   const [weeklyDiscount, setDiscount] = useState(-1);
//   const [cleaningFee, setCleaningFee] = useState(1);
//   const [serviceFee, setServiceFee] = useState(1);
//   const [occupancyTaxFee, setOccupancyTaxFee] = useState(1);
//   const [rooms, setRooms] = useState(1);
//   const [baths, setBaths] = useState(1);
//   const [type, setType] = useState("Hotel");
//   const [redirect, setRedirect] = useState(false);

//   useEffect(() => {
//     if (!id) return;
//     axios.get(`/places/` + id).then((response) => {
//       const data = response.data;
//       setTitle(data.title);
//       setCity(data.city || "");
//       setAddress(data.address);
//       setAddedPhotos(data.photos);
//       setDescription(data.description);
//       setAmenities(data.amenities);
//       setExtraInfo(data.extraInfo);
//       setRooms(data.rooms);
//       setBaths(data.baths)
//       setCheckIn(data.checkIn);
//       setCheckOut(data.checkOut);
//       setMaxGuests(data.maxGuests);
//       setGuestCategories(
//         data.guestCategories || { adults: 1, children: 0, infants: 0 }
//       );
//       setPrice(data.price);
//       setDiscount(data.weeklyDiscount);
//       setCleaningFee(data.cleaningFee);
//       setServiceFee(data.serviceFee);
//       setOccupancyTaxFee(data.occupancyTaxFee);
//       setRooms(data.rooms || 1);
//       setBaths(data.baths || 1);
//       setType(data.type || "Hotel");
//     });
//   }, [id]);

//   function inputHeader(text) {
//     return <h2 className="text-2xl mt-4">{text}</h2>;
//   }

//   function inputDescription(text) {
//     return <p className="text-gray-500 text-sm">{text}</p>;
//   }

//   function preInput(header, description) {
//     return (
//       <>
//         {inputHeader(header)}
//         {inputDescription(description)}
//       </>
//     );
//   }

//   const savePlace = async (e) => {
//     e.preventDefault();
//     const placeData = {
//       title,
//       city,
//       address,
//       photos: addedPhotos,
//       description,
//       amenities,
//       extraInfo,
//       checkIn,
//       checkOut,
//       maxGuests: Number(maxGuests),
//       guestCategories,
//       price: Number(price),
//       rooms: Number(rooms),
//       baths: Number(baths),
//       type,
//       weeklyDiscount: Number(weeklyDiscount),
//       cleaningFee: Number(cleaningFee),
//       serviceFee: Number(serviceFee),
//       occupancyTaxFee: Number(occupancyTaxFee),
//     };

//     try {
//       if (id) {
//         await axios.put(`/places/${id}`, placeData, { withCredentials: true });
//       } else {
//         await axios.post("/places", placeData, { withCredentials: true });
//       }
//       setRedirect(true);
//     } catch (e) {
//       console.error("Error saving place:", e.response?.data || e.message);
//       alert("Failed to save the place. Please try again.");
//     }
//   };

//   if (redirect) return <Navigate to="/account/places" />;

//   return (
//     <div className="max-w-2xl mx-auto mt-8">
//       <AccountNav />
//       <form onSubmit={savePlace} className="space-y-6">
//         {/* {preInput("City", "City where the place is located")}
//         <input
//           type="text"
//           placeholder="City, e.g. Cape Town"
//           className="w-full border border-gray-300 p-2 rounded-full"
//           value={city}
//           onChange={(e) => setCity(e.target.value)}
//           required
//         /> */}

//         {preInput("City", "Select a city you want to visit")}
//         <select
//           className="w-full border border-gray-300 p-2 rounded-full"
//           value={city}
//           onChange={(e) => setCity(e.target.value)}
//           required
//         >
//           <option value="">Select a city</option>
//           <option value="Johannesburg">Johannesburg</option>
//           <option value="Cape Town">Cape Town</option>
//           <option value="Durban">Durban</option>
//           <option value="Pretoria">Pretoria</option>
//           <option value="Polokwane">Polokwane</option>
//         </select>

//         {preInput(
//           "Title",
//           "Title for your place should be short and catchy like in a catchy advertisement."
//         )}
//         <input
//           type="text"
//           placeholder="Title, for example: My lovely apartment"
//           className="w-full border border-gray-300 p-2 rounded-full"
//           value={title}
//           onChange={(e) => setTitle(e.target.value)}
//         />

//         {preInput("Address", "Address to this place")}
//         <input
//           type="text"
//           placeholder="Address"
//           className="w-full border border-gray-300 p-2 rounded-full"
//           value={address}
//           onChange={(e) => setAddress(e.target.value)}
//         />

//         {preInput("Photos", "more = Better")}
//         <PhotosUpLoader
//           addedPhotos={addedPhotos}
//           onChange={(photos) => setAddedPhotos(photos)}
//         />

//         {preInput("Description", "Description of the place")}
//         <textarea
//           className="h-140 w-full border border-gray-300 p-2 rounded"
//           value={description}
//           onChange={(e) => setDescription(e.target.value)}
//         />

//         {preInput("Amenities", "Select all the amenities of your place")}
//         <Amenities
//           selectedAmenities={amenities}
//           onChange={setAmenities}
//           showAll
//         />

//         <div className="grid grid-cols-2 gap-4">
//           <div>
//             <label className="block text-sm font-medium text-gray-700">
//               Rooms
//             </label>
//             <input
//               name="rooms"
//               type="number"
//               placeholder="Rooms"
//               value={rooms}
//               onChange={(e) => setRooms(e.target.value)}
//               className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
//             />
//           </div>
//           <div>
//             <label className="block text-sm font-medium text-gray-700">
//               Baths
//             </label>
//             <input
//               name="baths"
//               type="number"
//               placeholder="Baths"
//               value={baths}
//               onChange={(e) => setBaths(e.target.value)}
//               className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
//             />
//           </div>
//           <div className="col-span-2">
//             <label className="block text-sm font-medium text-gray-700">
//               Type
//             </label>
//             <select
//               name="type"
//               value={type}
//               onChange={(e) => setType(e.target.value)}
//               className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
//             >
//               <option value="Hotel">Hotel</option>
//               <option value="Apartment">Apartment</option>
//               <option value="Resort">Resort</option>
//               <option value="Hostel">Guesthouse</option>
//             </select>
//           </div>
//         </div>

//         <div>
//           {preInput("Extra info", "House rules, etc")}
//           <textarea
//             className="h-140 w-full border border-gray-300 p-2 rounded"
//             value={extraInfo}
//             onChange={(e) => setExtraInfo(e.target.value)}
//           />
//         </div>

//         <div>
//           {preInput(
//             "Check in & out times",
//             "Add check in and out times. Remember to allow time for cleaning between guests."
//           )}
//           <div className="grid grid-cols-2 md-grid-cols-4 gap-2 mt-2">
//             <div>
//               <h3 className="mt-2 -mb-1">Check-in time</h3>
//               <input
//                 type="text"
//                 placeholder="14H00"
//                 className="w-full border border-gray-300 p-2 rounded"
//                 value={checkIn}
//                 onChange={(e) => setCheckIn(e.target.value)}
//               />
//             </div>

//             <div>
//               <h3 className="mt-2 -mb-1">Check-out time</h3>
//               <input
//                 type="text"
//                 placeholder="11H00"
//                 className="w-full border border-gray-300 p-2 rounded"
//                 value={checkOut}
//                 onChange={(e) => setCheckOut(e.target.value)}
//               />
//             </div>

//             <div>
//               <h3 className="mt-2 -mb-1">Max number of guests</h3>
//               <input
//                 type="number"
//                 min="1"
//                 className="w-full border border-gray-300 p-2 rounded"
//                 value={maxGuests}
//                 onChange={(e) => setMaxGuests(e.target.value)}
//               />
//             </div>
//             <div>
//               <h3 className="mt-2 -mb-1">Price per night</h3>
//               <input
//                 type="number"
//                 min="1"
//                 className="w-full border border-gray-300 p-2 rounded"
//                 value={price}
//                 onChange={(e) => setPrice(e.target.value)}
//               />
//             </div>
//           </div>
//         </div>

//         <div>
//           {preInput(
//             "Guest breakdown",
//             "Specify how many adults, children and infants can be hosted"
//           )}
//           <AddGuests value={guestCategories} onChange={setGuestCategories} />
//         </div>

//         <div>
//           <h3 className="mt-2 -mb-1">Weekly discount</h3>
//           <input
//             type="number"
//             min="-1"
//             className="w-full border border-gray-300 p-2 rounded"
//             value={weeklyDiscount}
//             onChange={(e) => setDiscount(e.target.value)}
//           />
//         </div>
//         <div>
//           <h3 className="mt-2 -mb-1">Cleaning fee</h3>
//           <input
//             type="number"
//             min="1"
//             className="w-full border border-gray-300 p-2 rounded"
//             value={cleaningFee}
//             onChange={(e) => setCleaningFee(e.target.value)}
//           />
//         </div>
//         <div>
//           <h3 className="mt-2 -mb-1">Service fee</h3>
//           <input
//             type="number"
//             min="1"
//             className="w-full border border-gray-300 p-2 rounded"
//             value={serviceFee}
//             onChange={(e) => setServiceFee(e.target.value)}
//           />
//         </div>
//         <div>
//           <h3 className="mt-2 -mb-1">Occupancy taxes and fees</h3>
//           <input
//             type="number"
//             min="1"
//             className="w-full border border-gray-300 p-2 rounded"
//             value={occupancyTaxFee}
//             onChange={(e) => setOccupancyTaxFee(e.target.value)}
//           />
//         </div>

//         <div className="pt-4">
//           <button
//             type="submit"
//             className="bg-red-500 hover:bg-red-600 text-white py-2 px-6 rounded-full w-full my-4"
//           >
//             Save
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default PlacesFormPage;

// import { useState, useEffect } from "react";
// import { useParams, Navigate } from "react-router-dom";
// import PhotosUpLoader from "../PhotosUpLoader.jsx";
// import Amenities from "../AmenitiesT.jsx";
// import axios from "axios";
// import AccountNav from "./AccountNav.jsx";
// import AddGuests from "../AddGuests.jsx";

// const PlacesFormPage = () => {
//   const { id } = useParams();
//   const [title, setTitle] = useState("");
//   const [city, setCity] = useState("");
//   const [address, setAddress] = useState("");
//   const [addedPhotos, setAddedPhotos] = useState([]);
//   const [description, setDescription] = useState("");
//   const [amenities, setAmenities] = useState([]);
//   const [extraInfo, setExtraInfo] = useState("");
//   const [checkIn, setCheckIn] = useState("");
//   const [checkOut, setCheckOut] = useState("");
//   const [maxGuests, setMaxGuests] = useState(1);
//   const [guestCategories, setGuestCategories] = useState({
//     adults: 1,
//     children: 0,
//     infants: 0,
//   });
//   const [price, setPrice] = useState(100);
//   const [weeklyDiscount, setDiscount] = useState(0);
//   const [cleaningFee, setCleaningFee] = useState(1);
//   const [serviceFee, setServiceFee] = useState(0);
//   const [occupancyTaxFee, setOccupancyTaxFee] = useState(0);
//   const [rooms, setRooms] = useState(1);
//   const [baths, setBaths] = useState(1);
//   const [type, setType] = useState("Hotel");
//   const [redirect, setRedirect] = useState(false);

//   useEffect(() => {
//     if (!id) return;
//     axios.get(`/places/` + id).then((response) => {
//       const data = response.data;
//       setTitle(data.title);
//       setCity(data.city || "");
//       setAddress(data.address);
//       setAddedPhotos(data.photos || []);
//       setDescription(data.description || "");
//       setAmenities(data.amenities || []);
//       setExtraInfo(data.extraInfo || "");
//       setRooms(data.rooms || 1);
//       setBaths(data.baths || 1);
//       setCheckIn(data.checkIn || "");
//       setCheckOut(data.checkOut || "");
//       setMaxGuests(data.maxGuests || 1);
//       setGuestCategories(
//         data.guestCategories || { adults: 1, children: 0, infants: 0 }
//       );
//       setPrice(data.price || 100);
//       setDiscount((data.weeklyDiscount ?? 0) * 100); // decimal → %
//       setCleaningFee(data.cleaningFee ?? 0);
//       setServiceFee((data.serviceFee ?? 0) * 100); // decimal → %
//       setOccupancyTaxFee((data.occupancyTaxFee ?? 0) * 100); // decimal → %
//       setType(data.type || "Hotel");
//     });
//   }, [id]);

//   function preInput(header, description) {
//     return (
//       <>
//         <h2 className="text-2xl mt-4">{header}</h2>
//         <p className="text-gray-500 text-sm">{description}</p>
//       </>
//     );
//   }

//   const savePlace = async (e) => {
//     e.preventDefault();
//     const placeData = {
//       title,
//       city,
//       address,
//       photos: addedPhotos,
//       description,
//       amenities,
//       extraInfo,
//       checkIn,
//       checkOut,
//       maxGuests: Number(maxGuests),
//       guestCategories,
//       price: Number(price),
//       rooms: Number(rooms),
//       baths: Number(baths),
//       type,
//       weeklyDiscount: Number(weeklyDiscount) / 100,
//       cleaningFee: Number(cleaningFee),
//       serviceFee: Number(serviceFee) / 100,
//       occupancyTaxFee: Number(occupancyTaxFee) / 100,
//     };

//     try {
//       if (id) {
//         await axios.put(`/places/${id}`, placeData, { withCredentials: true });
//       } else {
//         await axios.post("/places", placeData, { withCredentials: true });
//       }
//       setRedirect(true);
//     } catch (e) {
//       console.error("Error saving place:", e.response?.data || e.message);
//       alert("Failed to save the place. Please try again.");
//     }
//   };

//   if (redirect) return <Navigate to="/account/places" />;

//   return (
//     <div className="max-w-2xl mx-auto mt-8">
//       <AccountNav />
//       <form onSubmit={savePlace} className="space-y-6">
//         {preInput("City", "Select a city you want to visit")}
//         <select
//           className="w-full border border-gray-300 p-2 rounded-full"
//           value={city}
//           onChange={(e) => setCity(e.target.value)}
//           required
//         >
//           <option value="">Select a city</option>
//           <option value="Johannesburg">Johannesburg</option>
//           <option value="Cape Town">Cape Town</option>
//           <option value="Durban">Durban</option>
//           <option value="Pretoria">Pretoria</option>
//           <option value="Polokwane">Polokwane</option>
//         </select>

//         {preInput("Title", "Short catchy title like an advertisement")}
//         <input
//           type="text"
//           placeholder="My lovely apartment"
//           className="w-full border border-gray-300 p-2 rounded-full"
//           value={title}
//           onChange={(e) => setTitle(e.target.value)}
//         />

//         {preInput("Address", "Physical address of the place")}
//         <input
//           type="text"
//           placeholder="Address"
//           className="w-full border border-gray-300 p-2 rounded-full"
//           value={address}
//           onChange={(e) => setAddress(e.target.value)}
//         />

//         {preInput("Photos", "More is better")}
//         <PhotosUpLoader addedPhotos={addedPhotos} onChange={setAddedPhotos} />

//         {preInput("Description", "Details about the space")}
//         <textarea
//           className="h-40 w-full border border-gray-300 p-2 rounded"
//           value={description}
//           onChange={(e) => setDescription(e.target.value)}
//         />

//         {preInput("Amenities", "Select all amenities available")}
//         <Amenities
//           selectedAmenities={amenities}
//           onChange={setAmenities}
//           showAll
//         />

//         <div className="grid grid-cols-2 gap-4">
//           <div>
//             <label className="block text-sm font-medium text-gray-700">
//               Rooms
//             </label>
//             <input
//               name="rooms"
//               type="number"
//               value={rooms}
//               onChange={(e) => setRooms(e.target.value)}
//               className="border border-gray-300 rounded-lg px-3 py-2 w-full"
//             />
//           </div>
//           <div>
//             <label className="block text-sm font-medium text-gray-700">
//               Baths
//             </label>
//             <input
//               name="baths"
//               type="number"
//               value={baths}
//               onChange={(e) => setBaths(e.target.value)}
//               className="border border-gray-300 rounded-lg px-3 py-2 w-full"
//             />
//           </div>
//           <div className="col-span-2">
//             <label className="block text-sm font-medium text-gray-700">
//               Type
//             </label>
//             <select
//               name="type"
//               value={type}
//               onChange={(e) => setType(e.target.value)}
//               className="border border-gray-300 rounded-lg px-3 py-2 w-full"
//             >
//               <option value="Hotel">Hotel</option>
//               <option value="Apartment">Apartment</option>
//               <option value="Resort">Resort</option>
//               <option value="Hostel">Guesthouse</option>
//             </select>
//           </div>
//         </div>

//         {preInput("Extra Info", "House rules, etc")}
//         <textarea
//           className="h-40 w-full border border-gray-300 p-2 rounded"
//           value={extraInfo}
//           onChange={(e) => setExtraInfo(e.target.value)}
//         />

//         {preInput("Check-in/out Times", "Add check-in and out times")}
//         <div className="grid grid-cols-2 gap-2">
//           <input
//             type="text"
//             placeholder="Check-in (e.g. 14:00)"
//             className="w-full border border-gray-300 p-2 rounded"
//             value={checkIn}
//             onChange={(e) => setCheckIn(e.target.value)}
//           />
//           <input
//             type="text"
//             placeholder="Check-out (e.g. 11:00)"
//             className="w-full border border-gray-300 p-2 rounded"
//             value={checkOut}
//             onChange={(e) => setCheckOut(e.target.value)}
//           />
//         </div>

//         <div className="grid grid-cols-2 gap-2">
//           <input
//             type="number"
//             min="1"
//             placeholder="Max guests"
//             className="w-full border border-gray-300 p-2 rounded"
//             value={maxGuests}
//             onChange={(e) => setMaxGuests(e.target.value)}
//           />
//           <input
//             type="number"
//             min="1"
//             placeholder="Price per night"
//             className="w-full border border-gray-300 p-2 rounded"
//             value={price}
//             onChange={(e) => setPrice(e.target.value)}
//           />
//         </div>

//         {preInput("Guest Breakdown", "Adults, children and infants")}
//         <AddGuests value={guestCategories} onChange={setGuestCategories} />

//         <div>
//           <label className="block mt-2">Weekly Discount (%)</label>
//           <input
//             type="number"
//             min="0"
//             max="100"
//             className="w-full border border-gray-300 p-2 rounded"
//             value={weeklyDiscount}
//             onChange={(e) => setDiscount(e.target.value)}
//           />
//         </div>

//         <div>
//           <label className="block mt-2">Cleaning Fee</label>
//           <input
//             type="number"
//             min="0"
//             className="w-full border border-gray-300 p-2 rounded"
//             value={cleaningFee}
//             onChange={(e) => setCleaningFee(e.target.value)}
//           />
//         </div>

//         <div>
//           <label className="block mt-2">Service Fee (%)</label>
//           <input
//             type="number"
//             min="0"
//             max="100"
//             className="w-full border border-gray-300 p-2 rounded"
//             value={serviceFee}
//             onChange={(e) => setServiceFee(e.target.value)}
//           />
//         </div>

//         <div>
//           <label className="block mt-2">Occupancy Tax Fee (%)</label>
//           <input
//             type="number"
//             min="0"
//             max="100"
//             className="w-full border border-gray-300 p-2 rounded"
//             value={occupancyTaxFee}
//             onChange={(e) => setOccupancyTaxFee(e.target.value)}
//           />
//         </div>

//         <div className="pt-4">
//           <button
//             type="submit"
//             className="bg-red-500 hover:bg-red-600 text-white py-2 px-6 rounded-full w-full"
//           >
//             Save
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default PlacesFormPage;
