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
    if (propPlace) return; // if prop provided, no need to fetch
    if (!id) return;
    axios
      .get(`http://localhost:4000/places/${id}`)
      .then((res) => setPlace(res.data))
      .catch((err) => console.error("Error fetching place:", err));
  }, [id, propPlace]);

  if (!place) return <div>Loading…</div>;

  const photosToShow = showAllPhotos ? place.photos : place.photos.slice(0, 6);

  if (showAllPhotos) {
    return (
      <div className="fixed inset-0 bg-black text-white z-50 overflow-y-auto p-8">
        <button
          onClick={() => setShowAllPhotos(false)}
          className="fixed top-4 right-4 bg-gray-100 text-gray-700 p-2 rounded-full shadow mr-6"
        >
          <CloseIcon />
        </button>
        <h2 className="text-2xl font-bold mb-6">{place.title} – All Photos</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {place.photos.map((photo, idx) => (
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
    <div className="relative mb-4">
      <div className="flex flex-col sm:flex-row gap-2 mb-2">
        {photosToShow[0] && (
          <img
            src={`http://localhost:4000/upload/${photosToShow[0]}`}
            alt="Main"
            className="w-full sm:w-2/3 h-60 object-cover rounded-lg"
          />
        )}
        <div className="flex flex-col w-full sm:w-1/3 gap-2">
          {photosToShow.slice(1, 3).map((photo, idx) => (
            <img
              key={idx}
              src={`http://localhost:4000/upload/${photo}`}
              alt={`Photo ${idx + 2}`}
              className="h-28 w-full object-cover rounded-lg"
            />
          ))}
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
        {photosToShow.slice(3, 6).map((photo, idx) => (
          <img
            key={idx}
            src={`http://localhost:4000/upload/${photo}`}
            alt={`Photo ${idx + 4}`}
            className="h-36 w-full object-cover rounded-lg"
          />
        ))}
      </div>
      {place.photos?.length > 6 && (
        <button
          onClick={() => setShowAllPhotos(true)}
          className="absolute bottom-2 right-2 z-10 border rounded-2xl text-blue-600 bg-white bg-opacity-90 px-4 py-2 hover:underline shadow-lg flex items-center"
        >
          <ViewCompactIcon className="mr-2" />
          Show all {place.photos.length} photos
        </button>
      )}
    </div>
  );
};

export default PlaceGallery;

