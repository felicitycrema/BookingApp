import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import BookingWidget from "../BookingWidget";
import PlaceGallery from "./PlaceGallery";
import AddressLink from "../AddressLink";


const PlacePage = () => {
  const { id } = useParams();
  const [place, setPlace] = useState(null);
  const [showAllPhotos, setShowAllPhotos] = useState(false);

  useEffect(() => {
    if (!id) return;
    axios
      .get(`http://localhost:4000/places/${id}`)
      .then((res) => setPlace(res.data))
      .catch((err) => console.error("Error fetching place:", err));
  }, [id]);

  if (!place) return <div>Loading…</div>;

  const photosToShow = showAllPhotos ? place.photos : place.photos.slice(0, 6);

 
  // --- MAIN PAGE WITH PREVIEW ---
  return (
    <div className="mt-4 bg-gray-100 -mx-8 px-8 py-8 relative">
      <h1 className="text-3xl font-bold mb-2">{place.title}</h1>
          <AddressLink>{place.address}</AddressLink>
      
      {/* IMAGE PREVIEW SECTION */}
      <PlaceGallery place={place} />  

        <div className="mt-8 mb-4 gap-8 grid grid-cols-1 md:grid-cols-[2fr_1fr]">
          <div>
            <div className="my-4">
              <h2 className="text-2xl font-semibold mb-4">About this place</h2>
              <p>{place.description}</p>
            </div>
            Check-in: {place.checkIn}
            <br />
            Check-out: {place.checkOut}
            <br />
            Max number of guests: {place.maxGuests}
          </div>
          <BookingWidget place={place} className="flex flex-col gap-6" />
        </div>
        <div className="bg-white -mx-8 px-8 py-8"></div>
        <h2 className="text-2xl font-semibold mb-4">Extra Info</h2>
        <div className="mb-4 mt-1 text-sm text-gray-700 leading-4">
          {place.extraInfo}
        </div>
        {/* Amenities */}
        {place.amenities?.length > 0 && (
          <div className="mb-6">
            <h3 className="font-semibold mb-2">Amenities</h3>
            <ul className="list-disc list-inside">
              {place.amenities.map((item, i) => (
                <li key={i} className="text-gray-700">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        )} 
      </div>
    
  );  
  
};

export default PlacePage;
