import React from "react";

const PlaceImg = ({ place }) => {
  if (!place || !place.photos || place.photos.length === 0) {
    return (
      <div className="bg-gray-100 h-48 w-full rounded-xl flex items-center justify-center text-gray-400">
        No Image
      </div>
    );
  }

  return (
    <div className="w-full h-48 overflow-hidden rounded-xl">
      <img
        src={`http://localhost:4000/upload/${place.photos[0]}`}
        alt={place.title}
        className="w-full h-full object-cover"
      />
    </div>
  );
};

export default PlaceImg;
