import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useSearchParams } from "react-router-dom";

const PlacesSearch = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialQuery = searchParams.get("q") || "";

  const [places, setPlaces] = useState([]);
  const [query, setQuery] = useState(initialQuery);
  const [filteredPlaces, setFilteredPlaces] = useState([]);

  // Fetch all places once on mount
  useEffect(() => {
    axios
      .get("/places")
      .then((res) => setPlaces(res.data))
      .catch((err) => console.error("Failed to load places:", err));
  }, []);

  // Filter places whenever places or query changes
  useEffect(() => {
    if (!query.trim()) {
      setFilteredPlaces([]);
      return;
    }

    const q = query.toLowerCase();
    const filtered = places.filter(
      (place) =>
        (place.city && place.city.toLowerCase().includes(q)) ||
        (place.address && place.address.toLowerCase().includes(q)) ||
        (place.title && place.title.toLowerCase().includes(q))
    );

    setFilteredPlaces(filtered);
  }, [query, places]);

  // Update URL query param when query changes
  useEffect(() => {
    if (query) {
      setSearchParams({ q: query });
    } else {
      setSearchParams({});
    }
  }, [query, setSearchParams]);

  return (
    <div className="max-w-xl mx-auto mt-6">
      <input
        type="text"
        placeholder="Search by city, address or title..."
        className="w-full border border-gray-300 p-2 rounded-full mb-4"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        autoFocus
      />

      {query.trim() && (
        <ul className="border border-gray-200 rounded-md shadow-sm max-h-64 overflow-auto">
          {filteredPlaces.length > 0 ? (
            filteredPlaces.map((place) => (
              <li key={place._id} className="border-b last:border-b-0">
                <Link
                  to={`/places/${place._id}`}
                  className="block p-3 hover:bg-gray-100"
                >
                  <div className="font-semibold">{place.title}</div>
                  <div className="text-sm text-gray-600">
                    {place.address}, {place.city}
                  </div>
                </Link>
              </li>
            ))
          ) : (
            <li className="p-3 text-gray-500">No places found</li>
          )}
        </ul>
      )}
    </div>
  );
};

export default PlacesSearch;
