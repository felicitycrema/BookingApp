import { useState, useEffect } from "react";
import { useParams, Navigate } from "react-router-dom"; 
import PhotosUpLoader from "../PhotosUpLoader.jsx";
import Amenities from "../Amenities.jsx";
import axios from "axios"; // 
import AccountNav from "./AccountNav.jsx";

const PlacesFormPage = () => {
  // const { action } = useParams();
  const { id } = useParams();
  console.log({id})
  const [title, setTitle] = useState("");
  const [address, setAddress] = useState("");
  const [addedPhotos, setAddedPhotos] = useState([]);
  const [description, setDescription] = useState("");
  const [amenities, setAmenities] = useState([]);
  const [extraInfo, setExtraInfo] = useState("");
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [maxGuests, setMaxGuests] = useState(1);
  const [price, setPrice] = useState(100);
  const [redirect, setRedirect] = useState(false);
  useEffect(() => {
    if (!id) return;
    axios.get(`/places/`+id).then((response) => {
        const data = response.data;
        setTitle(data.title);
        setAddress(data.address);
        setAddedPhotos(data.photos);
        setDescription(data.description);
        setAmenities(data.amenities);
        setExtraInfo(data.extraInfo);
        setCheckIn(data.checkIn);
        setCheckOut(data.checkOut);
      setMaxGuests(data.maxGuests);
      setPrice(data.price);
      })
      .catch((error) => {
        console.error("Error loading place data:", error);
      });
  }, [id]);
  
  
  function inputHeader(text) {
    return <h2 className="text-2xl mt-4">{text}</h2>;
  }

  function inputDescription(text) {
    return <p className="text-gray-500 text-sm">{text}</p>;
  }

  function preInput(header, description) {
    return (
      <>
        {inputHeader(header)}
        {inputDescription(description)}
      </>
    );
  }

  const savePlace = async (e) => {
    e.preventDefault();
    const placeData = {
      title,
      address,
      photos: addedPhotos,
      description,
      amenities,
      extraInfo,
      checkIn,
      checkOut,
      maxGuests,
      price,
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
  

  return (
    <div className="max-w-2xl mx-auto mt-8">
      <AccountNav />
      <form onSubmit={savePlace} className="space-y-6">
        {preInput(
          "Title",
          "Title for your place should be short and catchy like in a catchy advertisement."
        )}
        <input
          type="text"
          placeholder="Title, for example: My lovely apartment"
          className="w-full border border-gray-300 p-2 rounded-full"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        {preInput("Address", "Address to this place")}
        <input
          type="text"
          placeholder="Address"
          className="w-full border border-gray-300 p-2 rounded-full"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />

        {preInput("Photos", "more = Better")}
        <PhotosUpLoader
          addedPhotos={addedPhotos}
          onChange={(photos) => setAddedPhotos(photos)}
        />

        {preInput("Description", "Description of the place")}
        <textarea
          className="h-140 w-full border border-gray-300 p-2 rounded"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        {preInput("Amenities", "Select all the amenities of your place")}
        <Amenities selected={amenities} onChange={setAmenities} />

        <div>
          {preInput("Extra info", "House rules, etc")}
          <textarea
            className=" h-140 w-full border border-gray-300 p-2 rounded"
            value={extraInfo}
            onChange={(e) => setExtraInfo(e.target.value)}
          />
        </div>

        <div>
          {preInput(
            "Check in & out times",
            "Add check in and out times. Remember to allow time for cleaning between guests."
          )}

          <div className="grid grid-cols-2 md-grid-cols-4 gap-2 mt-2">
            <div>
              <h3 className="mt-2 -mb-1">Check-in time</h3>
              <input
                type="text"
                placeholder="14H00"
                className="w-full border border-gray-300 p-2 rounded"
                value={checkIn}
                onChange={(e) => setCheckIn(e.target.value)}
              />
            </div>

            <div>
              <h3 className="mt-2 -mb-1">Check-out time</h3>
              <input
                type="text"
                placeholder="11H00"
                className="w-full border border-gray-300 p-2 rounded"
                value={checkOut}
                onChange={(e) => setCheckOut(e.target.value)}
              />
            </div>

            <div>
              <h3 className="mt-2 -mb-1">Max number of guests</h3>
              <input
                type="number"
                min="1"
                className="w-full border border-gray-300 p-2 rounded"
                value={maxGuests}
                onChange={(e) => setMaxGuests(e.target.value)}
              />
            </div>
            <div>
              <h3 className="mt-2 -mb-1">Price per night</h3>
              <input
                type="number"
                min="1"
                className="w-full border border-gray-300 p-2 rounded"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />
            </div>
          </div>
        </div>

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
